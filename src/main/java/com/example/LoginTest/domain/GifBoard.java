package com.example.LoginTest.domain;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;


@Getter
@Entity
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Builder
public class GifBoard {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String gifUrl;

    private String caption;

    private LocalDateTime createdDate;

}
