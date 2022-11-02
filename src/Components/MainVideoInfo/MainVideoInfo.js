import './MainVideoInfo.scss'

function MainVideoInfo(){
    return(

        <div className='main-video'>
            <h1 className='main-video__title'>BMX RAMAGE : 2021 hightlight</h1>
            <div className='main-video__info'>

                    <div className='main-video__info--left'>
                        <h2 className='main-video__info--author'>BY Red Crow</h2>
                        <p className='main-video__info--date'>2022/01/01</p>
                    </div>

                    <div className='main-video__info--right'>
                        <div className='main-video__info--views'>
                            <img className="main-video__info--icon" src=''></img>
                            <p className='main-video__info--views_number'>1,133,033</p>
                        </div>

                        <div className='main-video__info--likes'>
                            <img className="main-video__info--icon" src=''></img>
                            <p className='main-video__info--likes_number'>110,000</p>
                        </div>
                    </div>
                    <p className='main-video__intro'>On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time</p>
                </div>
        </div>




    )
}












export default MainVideoInfo;