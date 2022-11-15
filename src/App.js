import './App.scss';
import { BrowserRouter, Navigate, NavLink, Routes, Route } from 'react-router-dom'
import UploadPage from './pages/UploadPage';
import Home from './pages/Home';

function App() {

  return (
<<<<<<< HEAD
    
    <>
    <div className="header">
      <Header />
    </div>
    <main>
        <div className='video__container'>
          <video className='hero-video' controls poster={currentVideo.image}>
          <source src={currentVideo.video} type=""/>
          <source src={currentVideo.video} type=""/>
          </video>
        </div>
        <section className='bottom-container'>
            <div className='main-left'> 
              <MainVideoInfo
              currentVideo={currentVideo}
              /> 
              <Comments 
                currentVideo={currentVideo}
                />
   
            </div>
=======
>>>>>>> upload-page

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
