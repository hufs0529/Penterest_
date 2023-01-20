package com.example.Swagger.web.controller;

import com.example.Swagger.core.post.application.PostingService;
import com.example.Swagger.core.post.domain.Posting;
import com.example.Swagger.core.post.dto.PostingDto;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * application layer :
 * view 화면 return의 목적이 있음 .
 */
@Slf4j
@RestController
@RequestMapping("/api/posts")
@CrossOrigin("*")
public class PostingController {
    private final PostingService postingService;

    public PostingController(PostingService postingService) {
        this.postingService = postingService;
    }


    @GetMapping("/{id}")
    @ResponseBody
    public Posting findOnePosting( @PathVariable("id")Long id) {
        return postingService.findOnePosting(id);
    }


    /**
     * 전체 Todo 데이터 조회 메서드 findAll()
     * <p>
     * 모든 메서드의 반환 타입은 List<Todo>
     */
    @GetMapping
    @ApiOperation(value = "전체 게시물 조회", notes = "전체 게시물에 대한 정보 출력")
    public List<Posting> findAll(){

        log.info("Get - findAll() called");
        return postingService.findAll();
    }


    @PostMapping
    @ApiOperation(value = "글 등록", notes = "글 등록 API")
    @ApiImplicitParam(name = "dateTime", value = "dateTime", required = true, example = "시간")
    public Posting save(@RequestBody PostingDto requestData ) {
        log.info("Post - save() called");
        return postingService.save(requestData);
    }






    @PutMapping
    @ApiOperation(value = "글 변경", notes = "글 조회 API")
    public List<Posting> update(@RequestBody PostingDto updateData) {
        log.info("Put - update() called");

        return postingService.update(updateData);
    }


    @DeleteMapping("/?id={id}")
    @ApiOperation(value = "글 삭제", notes = "글 삭제 API")
    public List<Posting>delete(@RequestParam("id") Long id) {
        log.info(("Delete - delete() called"));
        return postingService.delete(id);
    }

    // Dto 적용후
    @DeleteMapping
    public List<Posting>delete(@RequestBody PostingDto deleteData) {
        return postingService.delete(deleteData.toEntity().getId());
    }





}
