import './App.scss';
import Header from './Components/Header/Header';
import MainVideoInfo from './Components/MainVideoInfo/MainVideoInfo';
import Comments from './Components/Comments/Comments';
import SideVideos from './Components/SideVideos/SideVideos';
import videos from './Data/videos.json';
import videosDetail from './Data/video-details.json';
import { useState } from 'react';



function App() {
  
  const [sideVideos, setSideVideos] = useState(videos)
  const [currentVideo, setCurrentVideo] = useState(videosDetail[0])
  const currentComments = currentVideo.comments;

  return (
    
    <>
    <div className="header">
      <Header />
    </div>
    <main>
        <video className='hero-video' poster={currentVideo.image}></video>
        <section className='bottom-container'>
            <div className='main-left'> 
              <MainVideoInfo
              key={currentVideo.id}
              id={currentVideo.id}
              title={currentVideo.title}
              channel={currentVideo.channel}
              description={currentVideo.description}
              views={currentVideo.views}
              likes={currentVideo.likes}
              video={currentVideo.video}
              timestamp={currentVideo.timestamp}
              /> 
              <Comments 
                key={currentComments.id}    
                id={currentComments.id}
                name={currentComments.name}
                allComment={currentComments}
                comment={currentComments.comment}
                numberOfComment={currentComments.length}
                timestamp={currentComments.timestamp}
                />
   
            </div>

            <aside className='main-right'>
              <div className='side-videos'> 
                <h2 className='side-videos__title'>NEXT VIDEOS</h2>
                {sideVideos.map((video) => {
                 return( <SideVideos 
                  id={video.id}
                  key={video.id}
                  title={video.title}
                  channel={video.channel}
                  image={video.image}
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
