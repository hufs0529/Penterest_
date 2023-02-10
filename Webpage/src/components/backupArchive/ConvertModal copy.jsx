import { useState } from 'react'
import * as React from 'react';
import { Box, Button, Card, CardMedia, Container, Modal, Typography } from '@mui/material';

export default function ConvertModal(props) {


    // 모달창 모듈
    const [open, setOpen] = useState(false);
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
                onClick={() => { handleOpen(); props.PhandClose(); }}
                style={{
                    flex: '0 0 auto'
                }}
            // type="submit"
            >
                생성하기
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

                    <Card sx={[CardStyle, { mt: 2 }]}>
                        <CardMedia
                            sx={MediaStyle}
                            component="img"
                            alt={props.caption}
                            // src={props.gif}

                            // 샘플 GIF
                            image='https://penterest.s3.ap-northeast-2.amazonaws.com/gifs/sample.gif'
                        // image='../images/GifSample2.gif'

                        >
                            {/* <img src="https://penterest.s3.ap-northeast-2.amazonaws.com/gifs/sample.gif" alt={props.caption} /> */}
                        </CardMedia>
                        {/* <div>{gif}{caption}</div> */}
                        {/* <img src="../images/GifSample.gif"></img> */}

                    </Card>
                </Box>
            </Modal>
        </>
    )
}