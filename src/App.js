import './App.scss';

// import Header from './Components/Header/Header';
// import MainVideoInfo from './Components/MainVideoInfo/MainVideoInfo';
// import Comments from './Components/Comments/Comments';
// import SideVideos from './Components/SideVideos/SideVideos';


import { useState } from 'react';
import { BrowserRouter, Navigate, NavLink, Routes, Route } from 'react-router-dom'
import UploadPage from './pages/UploadPage';
import Home from './pages/Home';



function App() {
  
  
  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/:VideoId'  element={<Home />}/>
      <Route path="/upload-page" element={<UploadPage />}/>
    </Routes>
  </BrowserRouter> 

  );
}

export default App;
