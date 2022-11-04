import './SideVideos.scss';

function SideVideos({id, title, channel, image}){
    
    return(

        <div className='side-videos--box'>
            <video className='side-videos--motion' poster={image}></video>
                <div className='side-videos--content'>
                    <h3 className='side-videos--title'>{title}</h3>
                    <p className='side-videos--author'>{channel}</p>
                </div>           
        </div>
    )
 }    


export default SideVideos;