package com.example.LoginTest.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalDateTime;

@AllArgsConstructor
@Getter
public class UserJoinReqeustDto {
    private String userName; // id 값을 email로 변경하기 !
    private String emailAddress;
    private String phoneNumber;
    private String password;
    private LocalDateTime createDate;
}
