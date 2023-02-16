package com.example.LoginTest.config;

import com.example.LoginTest.application.UserService;
import com.example.LoginTest.utils.JwtUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@Slf4j
public class JwtFilter extends OncePerRequestFilter {

    private final UserService userService;

    @Value("${security.jwt.token.secretKey")
    private final String secretKey;

    public JwtFilter(UserService userService, String secretKey) {
        this.userService = userService;
        this.secretKey = secretKey;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {

        final String authorization = request.getHeader(HttpHeaders.AUTHORIZATION);
        log.info("authorization : {}", authorization); // Todo : 토큰 정보가 콘솔에 나오기 때문에 보안을 위해 추후 삭제 필요해 보임


        // Header에 Token 정보가 없으면 접근 제한
        if (authorization == null || !authorization.startsWith("Bearer ")) {
            log.error("authorization을 잘못 보냈습니다.");
            filterChain.doFilter(request,response);
            return;
        }

        // Token 꺼내기
        String token = authorization.split(" ")[1];

        // Token Expired 여부
        if (JwtUtil.isExpired(token,secretKey)) {
            log.error("Token이 만료 되었습니다.");
            filterChain.doFilter(request,response);
            return;
        }


        //UserName Token에서 꺼내기

        // id를 UserName에서  Email로 변경하기
//        String userName = JwtUtil.getUserName(token, secretKey);
//        log.info("userName : {}", userName);

        // 위 주석 코드에서 email로 변경하였음.
        String email = JwtUtil.getEmailId(token, secretKey);
        log.info("email : {}", email);



        //권한 부여
        // 첫번째 파라미터 userName > email
        UsernamePasswordAuthenticationToken authenticationToken =
                new UsernamePasswordAuthenticationToken(email, null, List.of(new SimpleGrantedAuthority("USER")));

        // Detail 정보 입력 부분
        authenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
        SecurityContextHolder.getContext().setAuthentication(authenticationToken);
        filterChain.doFilter(request, response);

    }
}
