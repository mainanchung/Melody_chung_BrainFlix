import '../App.scss';
import Header from '../Components/Header/Header';
import MainVideoInfo from '../Components/MainVideoInfo/MainVideoInfo';
import Comments from '../Components/Comments/Comments';
import SideVideos from '../Components/SideVideos/SideVideos';

// import videos from '../Data/videos.json';
import videosDetail from '../Data/video-details.json';
import axios from 'axios';

import { useEffect, useState } from 'react';
import { useParams, Navigate, NavLink, } from 'react-router-dom'



function Home() {

    const [sideVideos, setSideVideos] = useState([])
    const [currentVideo, setCurrentVideo] = useState(videosDetail[0])
    const {VideoId} = useParams();
    let ApiKey = "d5919928-4ca3-46f7-bf5e-f3175f260352";
   

    useEffect(()=> {
    axios.get(`https://project-2-api.herokuapp.com/videos?api_key=${ApiKey}`).then((response) =>{
        setSideVideos(response.data)
    })
    },[])

    // useEffect(()=>{
    //     axios.get(`https://project-2-api.herokuapp.com/videos/${VideoId}?api_key=${ApiKey}`).then((response) => {
    //     const videosDetail =  response.data;  
    //     console.log(videosDetail)
    //      setCurrentVideo(videosDetail)
    //     })   
    //     },[VideoId])

    //function to change current video//
    const changeCurrentVideo = (id) => {
        setCurrentVideo(videosDetail.find(video => video.id === id))
      }   

    return(
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
                     return( <NavLink to={"/" + video.id} key={video.id}> <SideVideos 
                      key={video.id}
                      video = {video}
                      selectHandler={changeCurrentVideo}
                      /></NavLink>
                      )
                     })
                    }
                    </div>
                </aside>
    
            </section>   
        </main> 
        </>









    )





}

export default Home;