import './SideVideos.scss';

function SideVideos({video}){
    
    return(
        
        <div className='side-videos--box'>
            <video className='side-videos--motion' poster={video.image}></video>
                <div className='side-videos--content'>
                    <h3 className='side-videos--title'>{video.title}</h3>
                    <p className='side-videos--author'>{video.channel}</p>
                </div>           
        </div>
    )
 }    

export default SideVideos;