import { Link } from 'react-router-dom'
import React from 'react'
import './Login.css'

const Login = props => {
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
                    <p>계정이 없으신가요?
                        <Link className='signup_link' to="/SignupAlt"> 회원가입 </Link>
                    </p>
                </div>
                <div className="title">
                    <h1>Welcome!</h1>
                    <h2>로그인 하세요</h2>
                </div>
                <div className="word_input">
                    <form action="">
                        <label htmlFor="email">email:</label><br />
                        <input type="text" id="email" name="email" /><br /><br />
                        <label htmlFor="password">password:</label><br />
                        <input type="password" id="password" name="password" /><br /><br />
                        <input type="submit" value="Login" />
                    </form>
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

export default Login