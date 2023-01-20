package penterest_spring.demo.core.post.application;

import penterest_spring.demo.core.post.domain.Gif;

import java.util.List;

public interface GifFinder {
    /**
     * DB에 등록된 모든 User 리스트 반환
     * 하나도 없을 경우 비어있는 리스트 반환
     * @return List<Gif> gifs
     */
    List<Gif> findAll();

    /**
     * 전달된 id와 일치하는 하나의 User 반환
     * DB에 등록된 user 반환
     * 하나도 없을 경우 null 반환
     * @param id
     * @return Gif gif
     * @throws NoSuchElementException - User의 id가 유효하지 않을때
     */
    Gif findGif(String id);
}
