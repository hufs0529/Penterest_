import { useState, useEffect } from "react";
// import { Gallery } from "react-grid-gallery";
import React from 'react'
import './Gallery.css'

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const listItems = numbers.map((content) => {
//     return content;
// });

const Gallery = props => {

    const [contents, setContents] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    //API Calling

    // useEffect(() => {


    // }, [contents]);

    return (
        <div className="main">
            <h2>갤러리 사진 출력 테스트</h2>
            {contents.map(content =>
                <div className="main_contents">
                    <img
                        // key={listItems.index}
                        className='main_content'
                        src={`../images/gallery/${content}.jpeg`}
                    // alt={content.name}
                    />
                </div>
            )}

        </div>
    )
}

export default Gallery