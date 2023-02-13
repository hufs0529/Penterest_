// import { Link } from "react-router-dom";
import { useState } from 'react'
import * as React from 'react';
import { Box, Button, Card, CardMedia, Container, Modal, Typography } from '@mui/material';
import ConvertModal from '../ConvertModal';

import axios from "axios";

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
        height: '550px',

        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 2,

        // 임시 저장용 수치: 완성본에서는 지울 것
        // display: 'flex',
        // width: '100%',
        // justifyContent: 'space-between',
    };

    const CardStyle = {
        // cover를 넣으니까 중앙정렬이 됨: 이유는 모르겠다
        display: 'cover',
        width: '100%',
        // height: '70vh',
        height: '480px',

        bgcolor: '#ddd',
        border: '2px dashed #000',
        mt: 2
    };

    const MediaStyle = {
        margin: 'auto'
    };

    return (
        <>
            <Button
                onClick={handleOpen}
                style={{
                    flex: '0 0 auto',
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
                    {/* <Typography id="modal-modal-title" variant="h6" component="h2">
                                Text in a modal
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                            </Typography> */}


                    <form onSubmit={submitVideo} encType="multipart/form-data">
                        <Button>
                            <ConvertModal
                                gif={gif}
                                caption={caption}
                                changeVideo={changeVideo}
                                submitVideo={submitVideo}
                                file={file}

                            />
                        </Button>

                        <input id="file" type="file" accept="video/mp4,video/mkv, 
video/x-m4v,video/*" onChange={changeVideo} />
                        {/* <button type="submit">생성</button> */}
                        <Button type='submit'> 생성하기 </Button>

                    </form>

                    <Card sx={[CardStyle, { mt: 2 }]}>
                        <CardMedia
                            sx={MediaStyle}
                            component="img"
                            alt={caption}
                            src={gif}

                        // 샘플 GIF
                        // image='https://penterest.s3.ap-northeast-2.amazonaws.com/gifs/sample.gif'
                        // image='../images/GifSample2.gif'

                        >
                            {/* <img src="https://penterest.s3.ap-northeast-2.amazonaws.com/gifs/sample.gif" alt={caption} /> */}
                        </CardMedia>
                        {/* <div>{gif}{caption}</div> */}
                        {/* <img src="../images/GifSample.gif"></img> */}

                    </Card>

                </Box>
            </Modal>
        </>
    )
}