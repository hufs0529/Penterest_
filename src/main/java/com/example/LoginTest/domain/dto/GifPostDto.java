package com.example.LoginTest.domain.dto;

import com.example.LoginTest.domain.GifBoard;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import lombok.extern.slf4j.Slf4j;

import java.time.LocalDateTime;

@Getter
@Setter
@ToString
@NoArgsConstructor
@Slf4j
public class GifPostDto {
    private Long id;

    private String gifUrl;

    private String caption;

    private LocalDateTime createdDate;

    private String user;

    public GifBoard toEntity() {
        log.info("GifPostDto.toEntity() called");
        return GifBoard.builder()
                .id(id)
                .gifUrl(gifUrl)
                .caption(caption)
                .createdDate(createdDate)
                .build();

    }
}
