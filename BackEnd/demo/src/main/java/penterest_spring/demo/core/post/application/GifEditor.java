package penterest_spring.demo.core.post.application;

import penterest_spring.demo.core.post.domain.Gif;

public interface GifEditor {
    /**
     * 새로운 Gif 등록
     * 등록 완료 시 user의 id 반환
     * @param newGif - 새로 등록할 Gif Entity
     * @return id - 가입된 user id
     */
    String create(Gif newGif);

    /**
     * Gif 정보 제거
     * @param id - 제거할 Gif에 해당하는 id
     * @return id - 제거된 Gif id
     */
    String delete(String id);
}
