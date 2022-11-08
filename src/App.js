import './App.scss';
import Header from './Components/Header/Header';
import MainVideoInfo from './Components/MainVideoInfo/MainVideoInfo';
import Comments from './Components/Comments/Comments';
import SideVideos from './Components/SideVideos/SideVideos';
import videos from './Data/videos.json';
import videosDetail from './Data/video-details.json';
import { useState } from 'react';
import { BrowserRouter, Navigate, NavLink, Routes, Route } from 'react-router-dom'



function App() {
  
  const sideVideos = videos
  const [currentVideo, setCurrentVideo] = useState(videosDetail[0])
  
  //function to change current video//
  const changeCurrentVideo = (id) => {
    setCurrentVideo(videosDetail.find(video => video.id === id))
  } 

  return (
    
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

            <aside className='main-right'>
              <div className='side-videos'> 
                <h2 className='side-videos__title'>NEXT VIDEOS</h2>
                {sideVideos.filter(ele => ele.id !== currentVideo.id).map((video) => {
                 return( <SideVideos 
                  key={video.id}
                  video = {video}
                  selectHandler={changeCurrentVideo}
                  />
                  )
                 })
                }
                </div>
            </aside>

        </section>   
    </main>
    </>
  );
}

export default App;
