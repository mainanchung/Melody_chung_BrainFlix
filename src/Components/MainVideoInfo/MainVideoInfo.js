import './MainVideoInfo.scss';
import Views from '../../ Assets/Images/Icons/views.svg';
import Likes from '../../ Assets/Images/Icons/likes.svg'

function MainVideoInfo({currentVideo}){
    let convertTimstamp = new Intl.DateTimeFormat('en-US', { day: '2-digit', month: '2-digit', year:'numeric'}).format(currentVideo.timestamp)
    return(
        <div className='main-video'>
            <h1 className='main-video__title'>{currentVideo.title}</h1>
            <div className='main-video__info'>

                    <div className='main-video__info--left'>
                        <h2 className='main-video__info--author'>by {currentVideo.channel}</h2>
                        <p className='main-video__info--date'>{convertTimstamp}</p>
                    </div>

                    <div className='main-video__info--right'>
                        <div className='main-video__info--views'>
                            <img className="main-video__info--icon" src={Views} alt='icon'></img>
                            <p className='main-video__info--views_number'>{currentVideo.views}</p>
                        </div>

                        <div className='main-video__info--likes'>
                            <img className="main-video__info--icon" src={Likes} alt='icon'></img>
                            <p className='main-video__info--likes_number'>{currentVideo.likes}</p>
                        </div>
                    </div>
                    
                </div>
                <p className='main-video__intro'>{currentVideo.description}</p>
        </div>
    )
}



export default MainVideoInfo;