package com.example.Swagger.core.post.application;

import com.example.Swagger.core.post.domain.Posting;
import com.example.Swagger.core.post.dto.PostingDto;
import com.example.Swagger.core.post.infrastructure.PostingRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;


@Service
public class PostingService {
    private final PostingRepository postingRepository;

    public PostingService(PostingRepository postingRepository) {
        this.postingRepository = postingRepository;
    }


    public Posting findOnePosting(Long id) {
        return postingRepository.findById(id).get();
    }


    public List<Posting> findAll() {
        return postingRepository.findAll();
    }


    public Posting findPosting(Long id) {
        Posting posting = postingRepository.findById(id).orElseThrow(() -> new NoSuchElementException("message"));
        return posting;
    }

    //DTO 적용전
//    public List<Posting> save(Posting posting) {
//        postingRepository.save(posting);
//
//        return findAll();
//    }

    //DTO 적용후
    public Posting save(PostingDto requestData) {
        Posting posting = requestData.toEntity();
        return postingRepository.save(posting);

    }


    public List<Posting> update(PostingDto newPosting){
        Posting Posting = findPosting(newPosting.toEntity().getId());

        Posting.setText(newPosting.toEntity().getText());
        postingRepository.save(Posting);

        return findAll();
    }

    public List<Posting>delete(Long id){
        postingRepository.deleteById(id);
        return findAll();
    }

}
