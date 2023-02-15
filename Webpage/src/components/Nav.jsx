import { Link } from "react-router-dom";
import * as React from 'react';
import { Button, Stack, TextField } from '@mui/material';
// import UploadModal from './UploadModalOriginal';
import UploadModal from './UploadModal';

export default function Nav() {
    return (
        <>
            <header
                style={{
                    position: 'fixed',
                    top: '0',
                    width: '100%',
                    height: '80px',
                    zIndex: 999,
                    margin: 'auto',
                    backgroundColor: 'white',
                    display: 'flex',
                    flex: '1 1 auto',
                    justifycontent: 'space-between',
                    alignItems: 'center'
                }}
            >
                <div className="nav logo"
                    style={{
                        width: '70px',
                        height: '70px',
                        marginLeft: '10px',
                        borderRadius: '15px',
                        overflow: 'hidden',
                        flexGrow: 0,
                        flexShrink: 0,
                        flexbasis: 'auto'
                    }}>
                    <h1
                        style={{
                            marginTop: '4px',
                            transform: 'scale(1.8)',
                            width: '70px',
                            height: '70px',
                            backgroundSize: "cover",
                            backgroundImage: `url(../images/logo.png)`,
                            backgroundPosition: "center center",
                        }} />
                </div>

                <UploadModal />

                <div style={{
                    flexGrow: 1,
                    minWidth: '400px',
                }}>

                    <Stack spacing={1} direction="row" sx={{ mt: "6px" }}>
                        {/* <input className="temp" type="text" /> */}
                        <TextField fullWidth id="searchBox" label="검색" variant="outlined" />
                        <Button
                            variant="text"
                            href="https://google.com"
                            style={{ ml: 1, fontWeight: "bold" }}
                        >
                            검색
                        </Button>
                    </Stack>
                </div>
                <div style={{
                    flexGrow: 0,
                    flexShrink: 0,
                    flexbasis: 'auto',
                }}>

                    <Link
                        to="/Login"
                        style={{
                            marginLeft: "5px",
                            marginRight: "5px",
                            fontWeight: 'bold',
                        }}
                    >
                        로그인
                    </Link>

                </div>
                {/* 600px 이하시 나오는 메뉴뷰: 구현중... */}
                <div
                    style={{
                        marginLeft: '10px',
                        marginRight: '10px',
                        borderRadius: '30px',
                        overflow: 'hidden',
                        flexGrow: 0,
                        flexShrink: 0,
                        flexbasis: 'auto'
                    }}>
                    {/* <a href="#">
                        <p
                            style={{
                                background: 'black',
                                color: 'white',
                                border: 'transparent 0px',
                                width: '60px',
                                height: '60px',
                                fontWeight: 'bolder',
                                fontsize: '15px',
                                textAlign: 'center',
                                lineHeight: '60px'
                            }}>메뉴</p>
                    </a> */}
                </div>
            </header>


        </>
    )
}