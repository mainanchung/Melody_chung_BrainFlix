import './Home.scss';

import MainVideoInfo from '../Components/MainVideoInfo/MainVideoInfo';
import Comments from '../Components/Comments/Comments';
import SideVideos from '../Components/SideVideos/SideVideos';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, NavLink} from 'react-router-dom'

function Home() {

    const [sideVideos, setSideVideos] = useState([])
    const [currentVideo, setCurrentVideo] = useState(null)
    const {VideoId} = useParams();
   
    useEffect(()=> {
    axios.get('http://localhost:8080/videos').then((response) =>{
        // console.log(response.data)
        setSideVideos(response.data)
    }).catch((error) => {
        console.log(error)
      })
    },[])

    useEffect(()=>{
        if(VideoId){
        axios.get(`http://localhost:8080/videos/${VideoId}`).then((response) => {
        const videosDetail =  response.data;  
        // console.log(videosDetail)
         setCurrentVideo(videosDetail)
         
        })} else {
            axios.get('http://localhost:8080/videos').then((response) =>{
               axios.get(`http://localhost:8080/videos/${response.data[0].id}`).then((response) => {
                    const videoDefaut = response.data;  
                    // console.log(videoDefaut)
                    setCurrentVideo(videoDefaut)
                }).catch((error) => {
                    console.log(error)
                  })
            }).catch((error) => {
                console.log(error)
              })    
        }

    },[VideoId])

    return(
        <>
        {currentVideo?
        <>
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
                    commentChange={setCurrentVideo}
                    />
                </div>
    
                <aside className='main-right'>
                  <div className='side-videos'> 
                    <h2 className='side-videos__title'>NEXT VIDEOS</h2>
                    {sideVideos.filter(ele => ele.id !== currentVideo.id).map((video) => {
                     return( <NavLink to={"/" + video.id} key={video.id} className="side-videos__link"> <SideVideos 
                      key={video.id}
                      video = {video}
                      /></NavLink>
                      )
                     })
                    }
                    </div>
                </aside>
            </section>   
        </main> </> : ""}       
        </>
    )
}

export default Home;