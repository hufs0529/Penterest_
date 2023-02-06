import { Link } from "react-router-dom";
import { useState } from 'react'
import * as React from 'react';
import { Button, Stack, TextField } from '@mui/material';
import UploadModal from './UploadModal';
import './Nav.css'

export default function Nav() {
    return (
        <>
            <header>
                <div className="nav logo">
                    <h1
                        style={{
                            backgroundSize: "cover",
                            backgroundImage: `url(../images/logo.png)`,
                            backgroundPosition: "center center",
                        }} />
                </div>

                <UploadModal />

                <div className="nav src_field">

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
                        <Button
                            variant="text"
                        >
                            필터
                        </Button>
                    </Stack>
                </div>
                <div className="nav src_set">
                </div>
                <div className="nav login">
                    <Stack spacing={1} direction="row">
                        <Link to="/Login"> 로그인 </Link>
                        <Link to="/Home"> 소개 </Link>
                    </Stack>
                </div>
                <div className="nav prf_btn">
                    <a href="#">
                        <p>프로필</p>
                    </a>
                </div>
            </header>


        </>
    )
}