package com.example.Swagger.core.post.infrastructure;

import com.example.Swagger.core.post.domain.Posting;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostingRepository extends JpaRepository<Posting, Long> {
}
