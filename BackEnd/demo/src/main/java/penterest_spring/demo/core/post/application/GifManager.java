package penterest_spring.demo.core.post.application;

import org.springframework.stereotype.Service;
import penterest_spring.demo.core.post.domain.Gif;
import penterest_spring.demo.core.post.infrastructure.GifRepository;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class GifManager implements GifFinder,GifEditor {
    private GifRepository gifRepository;

    public GifManager(GifRepository gifRepository){
        this.gifRepository = gifRepository;
    }


    @Override
    public List<Gif> findAll() {
        // Dummy Data 테스트, DB 사용 전 -> 일단 메소드 내부에서 객체 생성 후 List<User>로 변환해서 반환
//        Gif gif1 = new Gif("1","c:\hello","2023-01-01","The man and woman are walking")
//        List<Gif> gifs = new ArrayList<>(Arrays.asList(gif1));
//
//        if (gifs.isEmpty()) return Collections.emptyList(); // immutable 불변리스트로 반환해줌.

        return gifRepository.findAll();
    }

    @Override
    public Gif findGif(String id) {
        //        if (id == null) {
//            throw NoSuchElementException(message);
//        }
//        User u = new User(id, "1234");

        String message = String.format("%s에 해당하는 Gif가 없습니다.", id);
        Gif gif = gifRepository.findById(id).orElseThrow(() -> new NoSuchElementException(message));
        return gif;
    }

    @Override
    public String create(Gif newGif) {
        if(gifRepository.findById(newGif.getId()).isPresent()) {
            String message = String.format("이미 존재하는 user id 입니다. %s", newGif.getId());
            throw new IllegalArgumentException(message);
        }
        gifRepository.save(newGif);
        return newGif.getId();
    }

    @Override
    public String delete(String id) {
        gifRepository.deleteById(id);
        return id;
    }
}
