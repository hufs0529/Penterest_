package com.example.Swagger.core.post.dto;

import com.example.Swagger.core.post.domain.Posting;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;


@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class PostingDto {
    private Posting posting;

    // DTO에서 필요한 부분을 Entity로 만드는 메서드
    public Posting toEntity() {
        return posting;
    }





}
