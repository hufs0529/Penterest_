package penterest_spring.demo.core.post.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;


import java.time.LocalDate;

@NoArgsConstructor
@Setter
@Getter
@Entity
public class Gif {
    @Id
    @NotBlank
    private String id;
    @NotBlank
    private String url;
    @NotBlank
    private String caption;
    @NotBlank
    private LocalDate date;


}
