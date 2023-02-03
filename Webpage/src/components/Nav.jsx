import { Link } from "react-router-dom";
import { useState } from 'react'
import * as React from 'react';
import Button from '@mui/material/Button';
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

                    <input type="text" />
                </div>
                <div className="nav src_set">
                    <a href="#"> 검색 </a>
                    <a href="#"> 필터 </a>
                </div>
                <div className="nav login">
                    <Link to="/Login"> 로그인 </Link>
                    <Link to="/Home"> 소개 </Link>
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