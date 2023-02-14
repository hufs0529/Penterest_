package com.example.LoginTest.utils;

import com.example.LoginTest.domain.dto.UserJoinReqeustDto;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import java.util.Date;

public class JwtUtil {

    public static String getUserName(String token, String secretKey) {
        return Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token)
                .getBody().get("userName", String.class);
    }

    public static String getEmailId(String token, String secretKey) {
        return Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token)
                .getBody().get("email", String.class);
    }





    public static boolean isExpired(String token, String secretKey) {
        return Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token)
                .getBody().getExpiration().before(new Date());
    }

    // pram changed : userName > email
    public static String createToken(String  email, String secretKey, long expireTimeMs) {
        Claims claims = Jwts.claims(); // Map의 일종 : 넣고 싶은정보 clasims.put() 이용해서 넣으면됨
        claims.put("email", email); // 원래는 String userName을 첫번째 파라미터로 받고, 바로 넣었음.
//        claims.put("phoneNumber",dto.getPhoneNumber());
//        claims.put("emailAddress",dto.getEmailAddress());

        return  Jwts.builder()
                .setClaims(claims)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + expireTimeMs))
                .signWith(SignatureAlgorithm.HS256, secretKey) // key를 이용해서 Claims로 전달받은 정보를 암호화함
                // Todo : key값을 외부에 공개하지 않는 방법 필요해 보임
                .compact();

    }


}
