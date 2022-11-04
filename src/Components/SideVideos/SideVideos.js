import './SideVideos.scss';

function SideVideos({videoContent, selectHandler}){
    
    return(

        <div className='side-videos--box' onClick={() =>selectHandler(videoContent.id)}>
            <video className='side-videos--motion' poster={videoContent.image}></video>
                <div className='side-videos--content'>
                    <h3 className='side-videos--title'>{videoContent.title}</h3>
                    <p className='side-videos--author'>{videoContent.channel}</p>
                </div>           
        </div>
    )
 }    

export default SideVideos;