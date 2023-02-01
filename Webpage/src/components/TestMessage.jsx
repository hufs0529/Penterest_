import React, { useState } from 'react'

const TestMessage = () => {
    return (
        <div>
            <h1> Hello world! </h1>
            <p> 복습 중 </p>
            <h2>현재 시간: {new Date().toLocaleTimeString()}</h2>
        </div>
    )
}

export default TestMessage