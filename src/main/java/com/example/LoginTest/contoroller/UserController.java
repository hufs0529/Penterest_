package com.example.LoginTest.contoroller;


import com.example.LoginTest.application.UserService;
import com.example.LoginTest.domain.User;
import com.example.LoginTest.domain.dto.UserJoinReqeustDto;
import com.example.LoginTest.domain.dto.UserLoginReqeustDto;
import com.example.LoginTest.domain.dto.UserReadDto;
import io.swagger.annotations.Api;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/api/v1/users")
@Api(tags = "User join & Login API")
@Slf4j
@CrossOrigin("*")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/join")
    public ResponseEntity<String> join(@RequestBody UserJoinReqeustDto joinDto) {
        userService.join(joinDto);
        return ResponseEntity.ok().body("회원가입이 성공했습니다.");
    }


    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody UserLoginReqeustDto loginReqeustDto) {
        String token = userService.login(loginReqeustDto.getEmailAddress(), loginReqeustDto.getPassword());
        return ResponseEntity.ok().body(token);
    }

    @GetMapping
    public List<User> getAllUsers(UserReadDto userReadDto){
        return userService.getAllUsers(userReadDto);
    }


    @GetMapping("/{userid}")
    public Optional<User> getUserByUserId(@PathVariable Long userid) {
        log.info("-- GET: localhost:8080/gifs/{}, getUserByUserid() called", userid);
        log.debug("-- @PathVariable String id: {}", userid);
        return userService.getUserByUserId(userid);
    }

    // 유저 수정
    // uri : localhost:8080/users/{userid}
    // https://charliecharlie.tistory.com/263 TODO : anotation 정리
    @PutMapping("/{userid}")
    public void updateUser(@RequestBody User updateUser) {
        log.info("-- POST: localhost:8080/users, updateUser() called");
        log.info("-- @RequestBody Gif: {}", updateUser);
        userService.updateUser(updateUser);
    }

    // 유저 삭제
    // uri : localhost:8080/users
    // TODO : 후에 사라질수도 있는 메서드
    @DeleteMapping("/{userId}")
    public List<User> removeUser(@RequestParam("userId") Long deleteUserId) {
        log.info("-- POST: localhost:8080/users, removeUser() called");
        log.info("-- @RequestParam Gif: {}", deleteUserId);
        return userService.removeUser(deleteUserId);
    }

}
