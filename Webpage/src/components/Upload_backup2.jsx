import { useEffect, useRef } from 'react';
import React from 'react'
import './Upload.css'
import { useState } from 'react';
// import Gallery from './Gallery';

const Upload = ({ modalHandler, setModalHandler }) => {

    // 모달 끄기
    const closeModal = () => {
        setModalHandler(false);
    };

    // 모달 외부 클릭시 창닫힘 처리
    // Modal 창을 useRef로 취득
    const modalRef = useRef();

    // 이벤트 핸들러 함수
    const handler = ({ target }) => {
        // mousedown 이벤트가 발생한 영역이 모달창이 아닐 때, 모달창 제거 처리
        if (modalHandler && !modalRef.current.contains(target))
            setModalHandler(false);
    };

    useEffect(() => {
        window.addEventListener("click", handler);
        return () => {
            window.removeEventListener("click", handler);
        };
    }, []);

    // const div = <div ref={modalRef} className="container">
    //     <div className='upper_container'>
    //         <button className='btn_ur save'>
    //             저장
    //         </button>
    //         <button className='btn_ur upload'>
    //             업로드
    //         </button>
    //         <button className="close"
    //             onClick={closeModal}>
    //             X
    //         </button>
    //     </div>
    //     <div className="wrap">
    //         <div className='upload_area'>
    //             <p>모달창 구현 테스트</p>

    //         </div>
    //     </div>
    // </div>;

    return (
        // 외부 클릭시 창닫힘 구현할 경우
        // <div ref={modalRef} className="container">
        // modalHandler ? div : <div></div>
        // setModalHandler &&
        <div ref={modalRef} className="container">
            <div className='upper_container'>
                <button className='btn_ur save'>
                    저장
                </button>
                <button className='btn_ur upload'>
                    업로드
                </button>
                <button className="close"
                    onClick={closeModal}>
                    X
                </button>
            </div>
            <div className="wrap">
                <div className='upload_area'>
                    <p>모달창 구현 테스트</p>

                </div>
            </div>
        </div>
    )

}

export default Upload