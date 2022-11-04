import './MainVideoInfo.scss';
import Views from '../../ Assets/Images/Icons/views.svg';
import Likes from '../../ Assets/Images/Icons/likes.svg'

function MainVideoInfo({id, title, channel, image, description, views, likes, video, timestamp}){
    return(

        <div className='main-video'>
            <h1 className='main-video__title'>{title}</h1>
            <div className='main-video__info'>

                    <div className='main-video__info--left'>
                        <h2 className='main-video__info--author'>{channel}</h2>
                        <p className='main-video__info--date'>{timestamp}</p>
                    </div>

                    <div className='main-video__info--right'>
                        <div className='main-video__info--views'>
                            <img className="main-video__info--icon" src={Views} alt='icon'></img>
                            <p className='main-video__info--views_number'>{views}</p>
                        </div>

                        <div className='main-video__info--likes'>
                            <img className="main-video__info--icon" src={Likes} alt='icon'></img>
                            <p className='main-video__info--likes_number'>{likes}</p>
                        </div>
                    </div>
                    
                </div>
                <p className='main-video__intro'>{description}</p>
        </div>
    )
}












export default MainVideoInfo;