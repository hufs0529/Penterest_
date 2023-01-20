package com.example.Swagger.core.post.domain;

import io.swagger.annotations.ApiModelProperty;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

@Getter @Setter
@Entity
@AllArgsConstructor
@ToString
@Builder
public class Posting {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    @ApiModelProperty(value = "GIF 파일 URL 주소", example = "/url", required = true)
    private String gifURL;

    private LocalDate dateTime; // 자동으로 생성시간이 추가되도록

    @Column(nullable = false)
    @ApiModelProperty(value = "Post 제목", example = "고양이 귀여워", required = true)
    private String Text;

    // 수정시간이 추가되도록

    public Posting() {
        System.out.println("Posting() called");
    }
}
