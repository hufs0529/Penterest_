package com.example.LoginTest.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalDateTime;

@AllArgsConstructor
@Getter
public class UserJoinReqeustDto {
    private String userName;
    private String password;
    private String emailAddress;
    private String phoneNumber;
    private LocalDateTime createDate;


}
