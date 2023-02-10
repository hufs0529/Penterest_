import { Link } from 'react-router-dom'
import React from 'react'
import './SignupArch.css'

const Signup = props => {

    return (
        <div className='wrapper'>
            <div className="bimg_left"
                style={{
                    width: "33.33%",
                    height: "100vh",
                    backgroundImage: `url(../images/gallery/1.jpeg)`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "left",
                    backgroundSize: "cover",
                    overflow: "hidden"
                }} />

            <div className="center_page">
                <div className="signup">
                    <Link to="/"> 메인페이지 </Link>
                    <p> 1/2 단계 </p>
                    <p href="#">회원가입</p>
                </div>
                <div className="title">
                    <h1>회원가입 페이지</h1>
                    <h2>밑의 정보들을 적어서 제출하시면 됩니다.</h2>
                </div>
                <div className="info_input">
                    <form action="">
                        <label htmlFor="lname">성:</label><br />
                        <input type="text" id="lname" name="lname" /><br /><br />
                        <label htmlFor="fname">이름:</label><br />
                        <input type="text" id="fname" name="fname" /><br /><br />
                        <label htmlFor="E-mail">E-mail:</label><br />
                        <input type="text" id="email" name="email" /><br /><br />
                        <label htmlFor="Phone Number">전화번호:</label><br />
                        <input type="tel" id="tel_num" name="tel_num" /><br /><br />


                        <label htmlFor="password">password:</label><br />
                        <input type="password" id="password" name="password" /><br /><br />
                        <p>회원가입을 수락함으로써, 본사의 이용규약 및 개인정보정책에 동의한 것으로 간주합니다.</p>
                        <input type="button" value="회원가입하기" onClick='alert("가입을 축하합니다!")' />
                    </form>
                </div>
                <div className="login_signup">
                    <p>계정이 있으신가요?
                        <Link className='login_link' to="/Login"> 로그인</Link>
                    </p>
                </div>
            </div>

            <div className="bimg_right"
                style={{
                    width: "33.33%",
                    height: "100vh",
                    backgroundImage: `url(../images/gallery/9.jpeg)`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right",
                    backgroundSize: "cover",
                    overflow: "hidden"
                }}
            />
        </div>
    )
}

export default Signup