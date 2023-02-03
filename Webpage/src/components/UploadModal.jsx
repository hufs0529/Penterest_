import { useState } from 'react'
import * as React from 'react';
import { Box, Button, Card, CardMedia, Container, Modal, Typography } from '@mui/material';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';

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

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // 모달창 모듈
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        // display: 'flex',
        width: '90%',
        height: '80vh',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const CardStyle = {
        // 왜 cover를 넣으니까 중앙정렬이 되지???
        display: 'cover',
        width: '49%',
        height: '70vh',
        bgcolor: '#ddd',
        border: '2px dashed #000',
    };

    const MediaStyle = {
        margin: 'auto'
    };

    return (
        <>
            <Button onClick={handleOpen}> 추가하기 </Button>
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
                            <button type="submit">생성</button>

                        </form>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        width: '100%',
                        justifyContent: 'space-between',
                        mt: 2
                    }}>
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

                        <Card sx={[CardStyle, { ml: 0 }]}>
                            <CardMedia
                                sx={MediaStyle}
                                component="img"
                                alt={caption}
                                image='https://penterest.s3.ap-northeast-2.amazonaws.com/gifs/sample.gif'
                            >
                                {/* <img src="https://penterest.s3.ap-northeast-2.amazonaws.com/gifs/sample.gif" alt={caption} /> */}
                            </CardMedia>
                            {/* <div>{gif}{caption}</div> */}
                            {/* <img src="../images/GifSample.gif"></img> */}

                        </Card>
                    </Box>

                </Box>
            </Modal>
        </>
    )
}