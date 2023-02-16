package com.example.LoginTest.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Getter
public class UserLoginReqeustDto {
    private String password;
    private String username;
    private String emailAddress;
}
