package com.example.LoginTest.config;


import com.example.LoginTest.application.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;


/**
 *
 * 로그인 로직용 Spring Security 관련 설정 코드
 * @EnableWebSecurity : Spring Security config를 할 클래스
 * PasswordEncoder : 입력받은 비밀번호를 그대로 DB에 저장하는 것이 아니고 암호화를 해서 저장
 * PasswordEncoder :따라서 이러한 암호화를 해주는 메서드로 다른 곳에서 사용할 수 있도록 @Bean으로 등록
 * BCryptPasswordEncoder() : password 암호화 방법
 * configure(HttpSecurity http) : HttpSecurity는 Http로 들어오는 요청에 대하여 보안을 구성할 수 있는 클래스
 * -- 로그인에 대한 설정
 *
 * AuthenticationManagerBuilder
 *  -- AuthenticationManager : Spring Security의 모든 인증 관리
 *  -- UserDetailService를 통해 유저의 정보를 memberService에서 찾아 담아줌
 */
@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig{

    private final UserService userService;

    @Value("${security.jwt.token.secretKey")
    private String secretKey;

    /**
     *
     * http.csrf().disable()
     * - REST API에서는 CSRF 방어가 필요없다 > CSRF 설정을 해제해도 된다.
     *
     * addFilter(corsConfig.corsFilter())
     * - REST API는 여러 서버를 운영하는 환경이라서 CORS를 허용해줘야한다.
     *
     *
     * sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
     * - 서버를 Stateless하게 유지. Spring Security에서 세션을 만들지 않는다.
     *
     *
     * httpBasic().disable()
     * - request headerd에 id와 password를 직접 날리는 방식이라 보안에 광장히 취약함
     *
     * AuthorizationFilter : 사용자가 페이지 이동시 인가처리를 받기위한 필터
     * -
     *
     */
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
        return httpSecurity
                .httpBasic().disable()
                .formLogin().disable()
                .csrf().disable()
                .cors().and()
                .authorizeRequests()
                .antMatchers("/api/v1/users/join","/api/v1/users/login").permitAll() // 누구나 사용가능
                .antMatchers(HttpMethod.GET, "/api/v1/gifs/{gifId}", "/api/v1/gifs").permitAll() // Gif 읽기, 검색은 누구나 가능
                .antMatchers(HttpMethod.POST , "/api/v1/gifs/**").authenticated() // 인증이 필요한 api-endpoint(경로) 설정
                .antMatchers(HttpMethod.PUT, "/api/v1/gifs/**").authenticated()
                .antMatchers(HttpMethod.DELETE, "/api/v1/gifs/**").authenticated()
                .and()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS) // jwt는 세션방식이아니라서 끄는 설정
                .and()
                .addFilterBefore(new JwtFilter(userService, secretKey), UsernamePasswordAuthenticationFilter.class)
                .build();
    }



}
