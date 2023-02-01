package com.penterest.backend.core.gif.application;


import com.penterest.backend.core.gif.domain.GifBoard;

import java.util.List;

public interface GifEditor {
    /**
     * 새로운 Gif 등록
     * 등록 완료 시 user의 id 반환
     *
     * @param newGifBoard - 새로 등록할 Gif Entity
     * @return id - 가입된 user id
     */
    GifBoard create(GifBoard newGifBoard);

    /**
     * Gif 정보 제거
     *
     * @param id - 제거할 Gif에 해당하는 id
     * @return id - 제거된 Gif id
     */
    List<GifBoard> delete(Long id);
}
