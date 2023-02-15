import { useState } from 'react'
import * as React from 'react';
import { Box, Button, Card, Modal, FormControl, FormLabel, ButtonGroup, Slider } from '@mui/material';
import UploadModalPreview from './UploadModalPreview';
import UploadModalConverted from './UploadModalConverted';
import { saveAs } from 'file-saver';
import axios from "axios";

// 시간지정 관련 전역함수 및 변수
// function timestamp(position) {
//     return `${position}`;
// }

export default function UploadModal() {

    // 업로드 모듈
    axios.defaults.withCredentials = true;

    // const inputFile = document.getElementById("file");
    //const inputVIdeo = document.getElementById("video");
    const [file, setFile] = useState({});
    const [video, setVideo] = useState("");
    const [gif, setGif] = useState("");
    const [caption, setCaption] = useState("");
    const [fileChanged, setFileChanged] = useState(false);


    // 
    const changeVideo = e => {
        // setVideo(() => e.target.files[0]);
        // const videoUrl = URL.createObjectURL(video);
        // console.log(videoUrl);
        // inputVIdeo.setAttribute("src", videoUrl);
        // inputVIdeo.play();
        // const file = e.target.files[0];
        // setVideo(file);
        // console.log(video);
        setFileChanged(true);
        setVideo(e.target.files[0])
        const videoTpye = e.target.files[0].type.includes('video');
        setFile({
            url: URL.createObjectURL(e.target.files[0]),
            video: videoTpye,
        })
    }

    const submitVideo = e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", video);
        console.log(video);

        if (fileChanged) {
            setFileChanged(false);
            setGif('...');
            setCaption('...');

            const config = {
                "Content-Type": 'application/json',
                withCredentials: true
            };

            axios
                .post("http://localhost:5000/upload", formData, config)
                .then(res => {
                    setGif(res.data[0]);
                    setCaption(res.data[1]);
                })
            console.log(gif);
            console.log(caption);
        }


    }


    // 이미지 저장 함수
    //URL로부터 다운로드 받는 기능: 'file-saver' 패키지 다운로드 필요
    const onDownload = () => {
        //첫 번째 인수: 가져올 URL, 두 번째 인수: 저장이름 및 형식 
        saveAs(`${gif}`, `${file.url}.gif`);
    }

    // 느리게, 뻐르게 버튼변환 관련 함수
    // 느리게 버튼
    const [slowButtonVariant, setSlowButtonVariant] = useState('outlined');

    const handleSlowButtonChange = () => {
        if (fastButtonVariant === 'outlined' && slowButtonVariant === 'outlined') {
            setSlowButtonVariant('contained');
        }
        else {
            setSlowButtonVariant('outlined');
        }
    }

    // 빠르게 버튼
    const [fastButtonVariant, setFastButtonVariant] = useState('outlined');

    const handleFastButtonChange = () => {
        if (slowButtonVariant === 'outlined' && fastButtonVariant === 'outlined') {
            setFastButtonVariant('contained');
        }
        else {
            setFastButtonVariant('outlined');
        }
    }

    // 시간지정 관련 함수
    const duration = 3600; // 영상넓이 지정 함수. 단위: 초
    const [position, setPosition] = React.useState([0, duration]);

    function formatDuration(value) {
        const minute = Math.floor(value / 60);
        const second = value - minute * 60;
        return `${minute}:${second < 10 ? `0${second}` : second}`;
    }

    const handleTimeChange = (event, newValue) => { setPosition(newValue); };

    // 보여주기창-GIF생성창 전환 함수
    // Preview 스위치
    const [previewShown, setPreviewShown] = useState(true);

    const handlePreview = event => {
        setPreviewShown(false);
    }

    // 스프링전송, 저장하기 컨트롤 함수
    const [rightButtons, setRightButtons] = useState(true);
    const handlerightButtons = () => {
        if (previewShown === true) {
            setRightButtons(false);
        } else {
            setRightButtons(true);
        }
    }

    // 모달창 모듈
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',

        // width: '99%',
        // maxWidth: '600px',
        // height: '80vh',
        width: '640px',
        height: '600px',

        bgcolor: 'background.paper',
        border: '1px transperant',
        boxShadow: 24,
        p: 2,
        borderRadius: '20px',
    };

    const CardStyle = {
        // cover를 넣으니까 중앙정렬이 됨: 이유는 모르겠다
        display: 'cover',
        width: '100%',
        // height: '70vh',
        height: '480px',

        bgcolor: '#ddd',
        border: '1px dashed #000',
        mt: 2
    };

    const MediaStyle = {
        margin: 'auto'
    };

    return (
        <>
            <Button
                variant='text'
                onClick={handleOpen}
                style={{
                    flex: '0 0 auto',
                    marginLeft: "10px",
                    marginRight: "10px",
                    fontWeight: "bold"
                }}
            >
                추가하기
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        mb: '10px'
                    }}>
                        <form
                            onSubmit={submitVideo}
                            encType="multipart/form-data"
                            style={{ width: '50%' }}
                        >
                            <ButtonGroup>
                                <input
                                    id="file"
                                    type="file"
                                    accept="video/mp4,video/mkv, video/x-m4v,video/*"
                                    onChange={changeVideo}
                                    style={{ width: '70%', display: 'none' }}
                                />
                                <Button>
                                    <label htmlfor="file">
                                        파일선택
                                    </label>
                                </Button>
                                <Button
                                    type='submit'
                                    onClick={() => { handlePreview(); handlerightButtons(); }}
                                >
                                    생성하기
                                </Button>
                            </ButtonGroup>
                        </form>
                        <ButtonGroup disabled={rightButtons}>
                            {/* <ButtonGroup> */}
                            <Button> 전송하기 </Button>
                            <Button onClick={onDownload}> 저장하기 </Button>
                        </ButtonGroup>
                    </Box>

                    <Box>
                        <FormControl sx={{ width: '30%' }}>
                            <FormLabel id="play-speed-buttons-group"> 재생속도 </FormLabel>
                            <ButtonGroup size='small'>
                                <Button
                                    variant={slowButtonVariant}
                                    onClick={handleSlowButtonChange}
                                >
                                    느리게
                                </Button>
                                <Button
                                    variant={fastButtonVariant}
                                    onClick={handleFastButtonChange}
                                >
                                    빠르게
                                </Button>
                            </ButtonGroup>
                        </FormControl>
                        <FormControl sx={{ width: '68%' }}>
                            <FormLabel id="demo-controlled-radio-buttons-group">
                                시간지정
                                <span
                                    style={{
                                        color: 'black',
                                        fontWeight: 'bolder',
                                        marginLeft: '10px'
                                    }}
                                >
                                    {formatDuration(position[0])} ~ {formatDuration(position[1])}
                                </span>
                            </FormLabel>
                            <Slider
                                getAriaLabel={() => 'Time range'}
                                value={position}
                                onChange={handleTimeChange}
                                valueLabelDisplay="off"
                                // getAriaValueText={timestamp}
                                min={0}
                                step={1}
                                max={duration}
                                disableSwap
                            />
                        </FormControl>
                    </Box>


                    <Card sx={[CardStyle, { mt: 2 }]}>
                        {previewShown && (
                            <UploadModalPreview
                                gif={gif}
                                caption={caption}
                                changeVideo={changeVideo}
                                submitVideo={submitVideo}
                                file={file}
                            />
                        )}

                        <UploadModalConverted
                            caption={caption}
                            gif={gif}
                        />

                    </Card>

                </Box>
            </Modal>
        </>
    )
}