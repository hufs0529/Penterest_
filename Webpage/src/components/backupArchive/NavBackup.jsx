import { Link } from "react-router-dom";
import { useState } from 'react'
import React from 'react'
// import Upload from './Upload.jsx'
import Upload_backup from './Upload_backup.jsx'
import './Nav.css'

const clickHandler = props => {
    alert('제작중!');
}

const Nav = props => {

    // const [isHovering, setIsHovering] = useState(0);

    const [modalHandler, setModalHandler] = useState(false);

    const showModal = () => {
        setModalHandler(true)
    }

    return (
        <>

            <header>
                <div className="nav logo">
                    {/* <img src="../images/logo.png" alt="" /> */}
                    <h1
                        style={{
                            backgroundSize: "cover",
                            backgroundImage: `url(../images/logo.png)`,
                            backgroundPosition: "center center",
                        }} />
                </div>
                {/* <div className="nav_title">
                    <div className="nav logo">
                        <h1
                            style={{
                                backgroundSize: "cover",
                                backgroundImage: `url(../images/logo.png)`,
                                backgroundPosition: "center center",
                            }} />
                    </div>
                    <h2> Penterest </h2>
                </div> */}
                <div className="nav add">
                    <button
                        className="add_btn"
                        onClick={showModal}
                    >
                        추가
                    </button>
                    {/* {modalHandler && <Upload setModalHandler={setModalHandler} />} */}
                    {modalHandler && <Upload_backup setModalHandler={setModalHandler} />}

                </div>
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

export default Nav