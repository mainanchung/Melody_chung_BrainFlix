import Header from "../Components/Header/Header";
import UploadVideo from '../ Assets/Images/Upload-video-preview.jpg';
import './UploadPage.scss';

import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function UploadPage(){

    const navigate = useNavigate();
    const upload = () => {
       if(isFormValid()){
        alert("Uploading...")
        navigate("/")
        }else{
            alert("Please complete the Form.")
            navigate("/upload-page")
        }
    }
    const [videoNameInput, setVideoNameInput ] = useState("")
    const [videoNameValid, setVideoNameValid] = useState(true)
    const [descriptionInput, setDescriptionInput] = useState("")
    const [descriptionValid, setDescriptionValid] = useState(true)
   
    const isFormValid = () =>{
        let formValid = true

        if(videoNameInput === "" || descriptionInput === ""){
            setVideoNameValid(false)
            setDescriptionValid(false)
            formValid = false
            if(videoNameInput !== ""){
                setVideoNameValid(true)
            }
            if(descriptionInput !== "" ){
                setDescriptionValid(true)
            } 
         }else {
            setVideoNameValid(true)
            setDescriptionValid(true)  
            return formValid
        }
       
    }

    const ChangeVideoName = (event) => {
        event.preventDefault()
        if (videoNameValid === false ) {
            setVideoNameValid(true)
        }
        setVideoNameInput(event.target.value);
    }
    const ChangeDescription = (event) =>{
        event.preventDefault()
        if(descriptionValid === false){
            setDescriptionValid(true)
        }
        setDescriptionInput(event.target.value);   
    }

   return( 
        <>
        <Header />
        <div className="upload-video">
            <h2 className="upload-video__title">Upload Video</h2>

            <div className="upload-video__container">
                <div className="upload-video__thumbnail">
                    <label className="upload-video__subtitle">VIDEO THUMBNAIL</label>
                        <video className="upload-video__motion" poster={UploadVideo}>
                            <source src="" type=""/>
                            <source src="" type=""/>
                        </video>
                </div>

                <form className="upload-video__form">
                    <label className="upload-video__subtitle">TITLE YOUR VIDEO</label>
                    <input className={`upload-video__title-box ${videoNameValid? "" : "upload-video__title-box--invalid"} `}
                    id="video__title-box" 
                    name="video__title-box" 
                    placeholder="Add a title to your video"
                    onChange={ChangeVideoName}></input>
                    
                    <label className="upload-video__subtitle">ADD A VIDEO DESCRIPTION</label>
                    <textarea className={`upload-video__description-box ${descriptionValid? "" : "upload-video__description-box--invalid" }`}
                    id="video__title-box" 
                    name="video__title-box" 
                    placeholder="Add a description to your video"
                    onChange={ChangeDescription}></textarea>    

                </form>  
            </div>
            <div className="upload-video__btn-box">
                    <button onClick={upload} className="upload-video__btn--publish">PUBLISH</button>   
                    <button className="upload-video__btn--cancel">CANCEL</button>
                </div> 
        </div>
        </>
   )  
}

export default UploadPage;

