package com.example.LoginTest.domain.dto;

import com.example.LoginTest.domain.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;


@Getter
@NoArgsConstructor
public class UserReadDto {
    private String userName;
    //    private String password; password는 노출하고 싶지않아서 제외함
    private String emailAddress;
    private String phoneNumber;
    private LocalDateTime createDate;


    @Builder
    public UserReadDto(String userName, String emailAddress, String phoneNumber, LocalDateTime createDate) {
        this.userName = userName;
        this.emailAddress = emailAddress;
        this.phoneNumber = phoneNumber;
        this.createDate = createDate;
    }

    public User toEntity() {
        return User.builder()
                .username(userName)
                .emailAddress(emailAddress)
                .phoneNumber(phoneNumber)
                .createDate(createDate).build();


    }
}
