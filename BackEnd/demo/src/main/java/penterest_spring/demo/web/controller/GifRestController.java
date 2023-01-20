package penterest_spring.demo.web.controller;

import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import penterest_spring.demo.core.post.application.GifEditor;
import penterest_spring.demo.core.post.application.GifFinder;
import penterest_spring.demo.core.post.application.GifManager;
import penterest_spring.demo.core.post.domain.Gif;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/gifs")
@CrossOrigin("*")
public class GifRestController {
    private final Logger logger = LoggerFactory.getLogger(getClass()); // getClass()에서 UserRestController를 받아오는 것임. 로거 인스턴스를 받아오는것 // 콘솔 출력문을 형식과 맞게해주기 위함
    private final GifFinder gifFinder;
    private final GifEditor gifEditor;

    public GifRestController(GifFinder gifFinder, GifEditor gifEditor){
        this.gifFinder = gifFinder;
        this.gifEditor = gifEditor;
    }

    /**
     * 전체 Todo 데이터 조회 메서드 findAll()
     *
     * 모든 메서드의 반환 타입은 List<Todo>
     */
    @GetMapping("/{id}")
    public Gif findGif(@PathVariable String id){
        // @PathVariable에 대한 추가 정보 ref) https://leeborn.tistory.com/entry/Spring-PathVariable-%EA%B8%B0%EB%B3%B8%EA%B0%92-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0
        logger.info("-- GET: localhost:8080/gifs/{}, findGif() called", id); // 빈 중괄호에 id값이 들어간 상태로 출력되게 함.

        // log 레벨 조정 - trace, debug, info, warn, error 수준 => 필요한 로그만 출력해서 보자.
        // logging 하는 이유: 부가정보출력, 좋은 가독성, 콘솔 출력만이 아닌 네트워크, 파일등으로 남길 수 있음 등등,,,
        // ref) https://dev-monkey-dugi.tistory.com/149
        logger.debug("-- @PathVariable String id: {}", id); // debug level 에서 값이 잘 들어온건지 보고 싶을때 사용할 수 있는 방법.

        return gifFinder.findGif(id);
    }

    @GetMapping
    public List<Gif> findAll() {
        log.info("findAll() called");
        return gifFinder.findAll();
    }
    @PostMapping
    public String create(@RequestBody Gif newGif){
        // @RequestBody: 클라이언트에서 전송한 xml이나 json 등등 데이터를 컨트롤러에서  DOM객체나 자바 객체로 변환해서 송수신 해줌
        // 이때 변환시에(Convert할때) HttpMessageConverter를 사용
        // 이 어노테이션이 붙은 파라미터에는 http 요청의 본문(body)이 그대로 전달됨.
        // 일반적으로 GET/POST 방식에서는 사용할 일이 거의 없지만, 현재까지는 페이지에 view부분도 없고, 반응형도 아니어서,
        // test하기위해 사용함.
        logger.info("-- POST: localhost:8080/api/users, createUser() called");
        logger.info("-- @RequestBody Gif: {}", newGif);
// ** BindinResult 파라미터는 @Validated annotation이 부여된 파라미터 바로 뒤에 작성해야됨.

        return gifEditor.create(newGif);
    }

    @DeleteMapping
    public String deleteGif(@RequestParam("id") String id){
        // @RequestParam("쿼리스트링에서 사용할 변수명") String id(Java에서 쿼리스트링을 통해 받았을 때 사용할 지역 변수 이름)
        // In Servlet, HttpServletRequest requst
        // request.getParameter("id"); 가 간소화된 형태
        logger.info("-- DELETE: localhost:8080/api/users, deleteUser() called");
        logger.info("-- @RequestParam id: {}", id);
        return gifEditor.delete(id);
    }
}
