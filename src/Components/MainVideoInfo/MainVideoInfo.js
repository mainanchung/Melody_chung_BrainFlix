import './MainVideoInfo.scss';
import Views from '../../ Assets/Images/Icons/views.svg';
import Likes from '../../ Assets/Images/Icons/likes.svg'

function MainVideoInfo({currentVideo}){
    return(

        <div className='main-video'>
            <h1 className='main-video__title'>{currentVideo.title}</h1>
            <div className='main-video__info'>

                    <div className='main-video__info--left'>
                        <h2 className='main-video__info--author'>by {currentVideo.channel}</h2>
                        <p className='main-video__info--date'>{currentVideo.timestamp}</p>
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