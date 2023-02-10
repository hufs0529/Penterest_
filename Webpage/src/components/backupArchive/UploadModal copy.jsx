// import { Link } from "react-router-dom";
import { useState } from 'react'
import * as React from 'react';
import { Box, Button, Card, CardMedia, Container, Modal, Typography } from '@mui/material';
import ConvertModal from './ConvertModal';

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
        width: '99%',
        maxWidth: '600px',
        height: '80vh',
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
        height: '70vh',
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

                    <Box>
                        <form onSubmit={submitVideo} encType="multipart/form-data">

                            <input id="file" type="file" accept="video/mp4,video/mkv, 
          video/x-m4v,video/*" onChange={changeVideo} />
                            {/* <button type="submit">생성</button> */}
                            <Button
                                type='submit'
                            >
                                <ConvertModal
                                    gif={gif}
                                    caption={caption}
                                // PhandClose={handleClose}
                                />
                            </Button>

                        </form>
                    </Box>
                    <Card sx={[CardStyle, { mr: 0 }]}>
                        <CardMedia
                            sx={MediaStyle}
                            component='video'
                            autoPlay
                            muted
                            loop
                            src={file.url}

                        >
                            {/* <video muted autoPlay loop id="video"></video> */}
                            {/* {file.video && <video muted autoPlay loop src={file.url} />} */}
                        </CardMedia>
                    </Card>

                </Box>
            </Modal>
        </>
    )
}