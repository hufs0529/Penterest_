package com.example.LoginTest.contoroller;

import io.swagger.annotations.Api;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Test용
 * 회원가입된 사람만 쓸수 있는 리뷰 컨트롤러
 * 유저 정보에 토큰을 가지고 있어야만 리뷰를 쓸 수 있어야함
 * 그게 아니면 아무나와서 쉽게 공격이 가능하다.
 */
@RestController
@RequestMapping("/api/v1/reviews")
@Api("권한 확인용 컨트롤러")
public class ReviewController {

    @PostMapping
    public ResponseEntity<String> writeReview(Authentication authentication) {

        return ResponseEntity.ok().body(authentication.getName() + "님의 리뷰 등록이 완료 되었습니다.");
    }

}
