import './MainVideoInfo.scss'

function MainVideoInfo(){
    return(

        <div className='main-video'>
            <h1 className='main-video__title'></h1>
            <div className='main-video__info'>

                    <div className='main-video__info--left'>
                        <h2 className='main-video__info--author'>BY Red Crow</h2>
                        <p className='main-video__info--date'></p>
                    </div>

                    <div className='main-video__info--right'>
                        <div className='main-video__info--views'>
                            <img className="main-video__info--icon" src=''></img>
                            <p className='main-video__info--views_number'></p>
                        </div>

                        <div className='main-video__info--likes'>
                            <img className="main-video__info--icon" src=''></img>
                            <p className='main-video__info--likes_number'></p>
                        </div>
                    </div>

                </div>
        </div>




    )
}












export default MainVideoInfo;