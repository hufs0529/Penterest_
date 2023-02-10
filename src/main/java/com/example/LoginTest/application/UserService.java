package com.example.LoginTest.application;


import com.example.LoginTest.domain.User;

import com.example.LoginTest.domain.dto.UserJoinReqeustDto;
import com.example.LoginTest.domain.dto.UserReadDto;
import com.example.LoginTest.exception.AppException;
import com.example.LoginTest.exception.ErrorCode;
import com.example.LoginTest.infrastructure.UserRepository;
import com.example.LoginTest.utils.JwtUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
@Slf4j
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    @Value("${security.jwt.token.secretKey")
    private String secretKey;
    private Long expiredTimeMs = 1000 * 60 * 60L; // 1초 * 60 * 60 = 1시간

    //회원 가입
    public String join(UserJoinReqeustDto joinDto) {
        //username 중복체크
        userRepository.findByUsername(joinDto.getUserName())
                .ifPresent(user -> {
                    log.info("ExceptionManager.runtimeExceptionHandler() 실행");
                    throw new AppException(ErrorCode.USERNAME_DUPLICATED, joinDto.getUserName() + "는 이미 존재하는 usserName 입니다.");
                });
        // DB에 저장할때는 Entity를 이용해서
        User user = User.builder()
                .username(joinDto.getUserName())
                .password(passwordEncoder.encode(joinDto.getPassword()))
                .email(joinDto.getEmailAddress())
                .phoneNumber(joinDto.getPhoneNumber())
                .createDate(joinDto.getCreateDate())
                .build();
        userRepository.save(user);
        return "SUCCESS";
    }

    public String login(String userName, String password) {
        // userName 없음;
        User selectedUser = userRepository.findByUsername(userName)
                .orElseThrow(() ->new AppException(ErrorCode.USERNAME_NOT_FOUND, userName + "이 없습니다."));

        // password 오류;
        if(!passwordEncoder.matches(password, selectedUser.getPassword())){
            throw new AppException(ErrorCode.INVALID_PASSWORD, "패스워드를 잘못 입력 했습니다.");

        }

        String token = JwtUtil.createToken(selectedUser.getUsername(),secretKey, expiredTimeMs);

        // 위 Exception 발생안하면 토큰 생성
        return token;
    }


    // 모든 유저 검색
    // Todo : password 노출 안되도록
    public List<User> getAllUsers(UserReadDto userReadDto) {
        log.info("userReadDto.toEntity(userReadDto) : {}",userReadDto.toEntity());
        User userinfo = userReadDto.toEntity();
        return userRepository.findAll();
    }

    // 유저 아이디 검색
    public Optional<User> getUserByUserId(Long userId) {
        return userRepository.findById(userId);
    }


    // 유저 정보 수정
    public User updateUser(User userUpdateInfo) {
        User updateUser = userRepository.save(userUpdateInfo);
        return userRepository.save(updateUser);
    }

    // 유저 삭제
    public List<User> removeUser(Long userId) {
        userRepository.deleteById(userId);

        return getAllUsers();
    }
    // 유저 삭제 용으로 임시로 만듬
    private List<User> getAllUsers() {
        log.info("{}", getAllUsers());
        return userRepository.findAll();
    }

}
