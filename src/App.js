import './App.scss';
import Header from './Components/Header/Header';
import MainVideoInfo from './Components/MainVideoInfo/MainVideoInfo';
import Comments from './Components/Comments/Comments';
import SideVideos from './Components/SideVideos/SideVideos';
import { useState } from 'react';



function App() {


  
  return (
    <>
    <div className="header">
      <Header />
    </div>
    <main>
        <video className='hero-video' poster=''></video>
        <section className='bottom-container'>
            <div className='main-left'> 
              <MainVideoInfo />  
              <Comments />
            </div>

            <aside className='main-right'>
              <div className='side-videos'> 
                <h2 className='side-videos__title'>NEXT VIDEOS</h2>
                <SideVideos />
                </div>
            </aside>

        </section>   
    </main>
    </>
  );
}

export default App;
