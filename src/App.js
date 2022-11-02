import './App.css';
import Header from './Components/Header/Header';
import MainVideo from './Components/MainVideo/MainVideo';
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
          <MainVideo />
        </div>

        <section className='bottom-container'>

            <div className='main-left'> 
              <MainVideoInfo />  
              <Comments />
            </div>

            <aside className='main-right'> 
            <SideVideos />
            </aside>

        </section>   
    </main>
    </>
  );
}

export default App;
