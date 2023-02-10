import { useState } from 'react'
import React from 'react';
import { Box, Button, Card, CardMedia, Container, Modal, Typography } from '@mui/material';
import { display } from '@mui/system';

// const ImageDetail = (props) => {
//     return (
//         <>
//             <img
//                 src={`${props.item.img}?w=162&auto=format`}
//                 srcSet={`${props.item.img}?w=162&auto=format&dpr=2 2x`}
//                 alt={props.item.title}
//                 loading="lazy"
//                 style={{
//                     borderBottomLeftRadius: 4,
//                     borderBottomRightRadius: 4,
//                     display: 'block',
//                     width: '100%'
//                 }}
//             />

//         </>
//     )
// }

export default function ImageDetail(props) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 'max-content',
        maxWidth: '90%',
        // maxWidth: '500px',
        height: '90vh',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        // overflow: 'contain'

    };

    const CardStyle = {
        // cover를 넣으니까 중앙정렬이 됨: 이유는 모르겠다
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        height: '80vh',
        // height: 'max-content',
        bgcolor: '#ddd',
        border: '1px sprite #000',
        // overflow: 'contain'

    };

    const MediaStyle = {
        margin: 'auto'
    };



    return (
        <>
            {/* 갤러리 창에서 이미지 표시되는 부분 */}
            <img
                src={`${props.item.img}?w=162&auto=format`}
                srcSet={`${props.item.img}?w=162&auto=format&dpr=2 2x`}
                alt={props.item.title}
                loading="lazy"
                style={{
                    borderBottomLeftRadius: 4,
                    borderBottomRightRadius: 4,
                    display: 'block',
                    width: '100%',
                }}
                onClick={handleOpen}
            />

            {/* 모달창 */}
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

                    <Card sx={[CardStyle, { mr: 0 }]}>
                        {/* <CardMedia
                        >
                        </CardMedia> */}
                        <img
                            src={props.item.img}
                            srcSet={props.item.img}
                            alt={props.item.title}
                            loading="lazy"
                            style={{
                                borderBottomLeftRadius: 4,
                                borderBottomRightRadius: 4,
                                display: 'block',
                                // maxWidth: 'max-content',
                                // height: 'inherit',
                            }}
                        />
                    </Card>

                    <Box>
                        <Button onClick={handleClose}>
                            닫기
                        </Button>
                    </Box>

                </Box>
            </Modal>

        </>
    )
}
