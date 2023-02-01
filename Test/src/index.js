import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import reportWebVitals from './reportWebVitals';

// 시간흐르는 기능(임시)
// setInterval(() => {
//   const root = ReactDOM.createRoot(document.getElementById('root'));
//   root.render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   );
// }, 1000);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <App /> */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Home' element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
