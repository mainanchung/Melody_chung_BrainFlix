import './App.scss';
import Header from './Components/Header/Header';
import MainVideoInfo from './Components/MainVideoInfo/MainVideoInfo';
import Comments from './Components/Comments/Comments';
import SideVideos from './Components/SideVideos/SideVideos';

function App() {
  return (
    <>
    <div className="header">
      <Header />
    </div>
    <main>
        <div className='hero-video'>
        <video></video>
        </div>
        <section className='bottom-container'>
            <div className='main-left'> 
              <MainVideoInfo />  
              <Comments />
            </div>

            <aside className='main-right'>
              <div className='side-videos'> 
                <h2 className='side-videos__title'>NEXT VIDEOS</h2>
                <SideVideos />
                </div>
            </aside>

        </section>   
    </main>
    </>
  );
}

export default App;
