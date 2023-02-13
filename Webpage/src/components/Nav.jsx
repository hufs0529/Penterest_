import { Link } from "react-router-dom";
import { useState } from 'react'
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
                }}>
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

                    <Stack spacing={1} direction="row">
                        {/* <input className="temp" type="text" /> */}
                        <TextField fullWidth id="searchBox" label="검색" variant="outlined" />
                        <Button
                            variant="contained"
                            href="https://google.com"
                            style={{ ml: 1 }}
                        >
                            검색
                        </Button>
                    </Stack>
                </div>
                <div>
                </div>
                <div>
                    <Stack
                        spacing={1}
                        direction="row"
                    >
                        <Link
                            to="/Login"
                            style={{
                                flexGrow: 0,
                                flexShrink: 0,
                                flexbasis: 'auto'
                            }}
                        >
                            로그인
                        </Link>
                        {/* <Link
                            to="/Home"
                            style={{
                                flexGrow: 0,
                                flexShrink: 0,
                                flexbasis: 'auto'
                            }}
                        >
                            소개
                        </Link> */}
                    </Stack>
                </div>
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
                    {/* a태그 교체하고 프로필 사진 올라가게 할 것 */}
                    <a href="#">
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
                            }}>프로필</p>
                    </a>
                </div>
            </header>


        </>
    )
}