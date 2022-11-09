import Header from "../Components/Header/Header";
import UploadVideo from '../ Assets/Images/Upload-video-preview.jpg';
import './UploadPage.scss';

function UploadPage(){

   return(
        <>
        <Header />
        <div className="upload-video">
            <h2 className="upload-video__title">Upload Video</h2>

            <div className="upload-video__container">
                <label className="upload-video__subtitle">VIDEO THUMBNAIL</label>
                    <video className="upload-video__motion" poster={UploadVideo}>
                        <source src="" type=""/>
                        <source src="" type=""/>
                    </video>

                <form className="upload-video__form">
                    <label className="upload-video__subtitle">TITLE YOUR VIDEO</label>
                    <input className="upload-video__title-box" id="video__title-box" name="video__title-box" placeholder="Add a title to your video"></input>
                    
                    <label className="upload-video__subtitle">ADD A VIDEO DESCRIPTION</label>
                    <textarea className="upload-video__description-box" id="video__title-box" name="video__title-box" placeholder="Add a description to your video"></textarea>    
                </form>  

                <div className="upload-video__btn-box">
                    <button className="upload-video__btn--publish">PUBLISH</button>   
                    <button className="upload-video__btn--cancel">CANCEL</button>
                </div> 

            </div>

        </div>

        </>
   )  

}

export default UploadPage;

