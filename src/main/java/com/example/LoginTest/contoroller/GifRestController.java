package com.example.LoginTest.contoroller;


import com.example.LoginTest.application.GifManager;
import com.example.LoginTest.domain.GifBoard;
import com.example.LoginTest.domain.dto.GifPostDto;
import com.example.LoginTest.domain.dto.UserReadDto;
import io.swagger.annotations.Api;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController // Java Object > JSON
@RequestMapping("/api/v1/gifs")
@CrossOrigin(value = "*")
@Api(tags = "GIF API")
@Slf4j
public class GifRestController {

    private final GifManager gifManager;

    public GifRestController(GifManager gifManager) {
        this.gifManager = gifManager;
    }

    /**
     * 전체 Todo 데이터 조회 메서드 findAll()
     * <p>
     * 모든 메서드의 반환 타입은 List<Todo>
     */
    @GetMapping("/{gifId}")
//    @ExceptionHandler(NoSuchElementException.class) // 예외처리 관련 exception package 과 연관됨
    public GifBoard findGif(@PathVariable Long gifId) {
        // @PathVariable에 대한 추가 정보 ref) https://leeborn.tistory.com/entry/Spring-PathVariable-%EA%B8%B0%EB%B3%B8%EA%B0%92-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0
        log.info("-- GET: localhost:8080/gifs/{}, findGif() called", gifId); // 빈 중괄호에 id값이 들어간 상태로 출력되게 함.

        // log 레벨 조정 - trace, debug, info, warn, error 수준 => 필요한 로그만 출력해서 보자.
        // logging 하는 이유: 부가정보출력, 좋은 가독성, 콘솔 출력만이 아닌 네트워크, 파일등으로 남길 수 있음 등등,,,
        // ref) https://dev-monkey-dugi.tistory.com/149
        log.debug("-- @PathVariable String id: {}", gifId); // debug level 에서 값이 잘 들어온건지 보고 싶을때 사용할 수 있는 방법.

        return gifManager.findGif(gifId);
    }

    @GetMapping
    public List<GifBoard> findAll() {
        log.info("findAll() called");
        return gifManager.findAll();
    }


    @PostMapping
    public GifBoard create(@RequestBody GifPostDto gifPostDto, Authentication authentication) { // second parm : 인가
        // @RequestBody: 클라이언트에서 전송한 xml이나 json 등등 데이터를 컨트롤러에서  DOM객체나 자바 객체로 변환해서 송수신 해줌
        // 이때 변환시에(Convert할때) HttpMessageConverter를 사용
        // 이 어노테이션이 붙은 파라미터에는 http 요청의 본문(body)이 그대로 전달됨.
        // 일반적으로 GET/POST 방식에서는 사용할 일이 거의 없지만, 현재까지는 페이지에 view부분도 없고, 반응형도 아니어서,
        // test하기위해 사용함.
        // ** BindinResult 파라미터는 @Validated annotation이 부여된 파라미터 바로 뒤에 작성해야됨.
        log.info("-- @RequestBody Gif: {}", gifPostDto);


        // 가입된 유저가 headr에 Authorization jwt을 가지고 있을 경우에만 글을 쓸수 있도록 변경 > 권한 객체 : authentication
        gifPostDto.setUser(authentication.getName());
        return gifManager.create(gifPostDto.toEntity());
    }



    @DeleteMapping("/{id}")
    public List<GifBoard> deleteGif(@RequestParam("id") Long deleteGifID) {
        // @RequestParam("쿼리스트링에서 사용할 변수명") String id(Java에서 쿼리스트링을 통해 받았을 때 사용할 지역 변수 이름)
        // In Servlet, HttpServletRequest requst
        // request.getParameter("id"); 가 간소화된 형태
        log.info("deleteUser() called");
        log.info("-- @RequestParam id: {}", deleteGifID);
        return gifManager.delete(deleteGifID);
    }






}
