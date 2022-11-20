import Header from "../Components/Header/Header";
import UploadVideo from '../ Assets/Images/Upload-video-preview.jpg';
import './UploadPage.scss';

import { useNavigate } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'
import axios from "axios";

function UploadPage(){

    const navigate = useNavigate();
    const title = useRef();
    const description = useRef();

    const [titleError, setTitleError] = useState(false);
    const [descriptionError, setDescriptionError] = useState(false);

    const isFormValid = (title, description) => {
        if (title === "" || description === ""){
            setTitleError(true)
            setDescriptionError(true)
            if(title !== ""){
                setTitleError(false)
            }
            if(description !== ""){
                setDescriptionError(false)
            }
            return false
        }else{
            setTitleError(false)
            setDescriptionError(false)
            return true
        }
    }
    
    const addtitle = () =>{
        if(title.current.value !== ""){
            setTitleError(false) 
        }
    }

    const addDescription = () =>{
        if(description.current.value !== ""){
            setDescriptionError(false)
        }
    }
    
    const addVideo = (event) =>{
        event.preventDefault();
        let titleInput = title.current.value
        let descriptionInput = description.current.value
        let newVideo = {
            title:titleInput,
            description: descriptionInput
        };

        if(!isFormValid(titleInput, descriptionInput )){
           alert("Please complete the form.")
           navigate("/upload-page")  
        }else{
            axios.post('http://localhost:8080/videos', newVideo).then((response) => {
            console.log(response.data)
            alert("Uploading...")
            navigate("/")
          }).catch((error) => {
            console.log(error)
             })
            }
            titleInput = ""
            descriptionInput = ""
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

                <form  className="upload-video__form">
                    <label className="upload-video__subtitle">TITLE YOUR VIDEO</label>
                    <input onChange={addtitle} className={`upload-video__title-box ${!titleError? "" : "upload-video__title-box--invalid"} `}
                    id="video__title-box" 
                    name="title" 
                    placeholder="Add a title to your video"
                    ref={title}></input>
                    
                    <label className="upload-video__subtitle">ADD A VIDEO DESCRIPTION</label>
                    <textarea onChange={addDescription} className={`upload-video__description-box ${!descriptionError? "" : "upload-video__description-box--invalid" }`} 
                    id="video__title-box" 
                    name="description" 
                    placeholder="Add a description to your video"
                    ref={description}></textarea>    

                </form>  
            </div>
            <div className="upload-video__btn-box">
                    <button onClick={addVideo} className="upload-video__btn--publish">PUBLISH</button>   
                    <button className="upload-video__btn--cancel">CANCEL</button>
                </div> 
        </div>
        </>
   )  
}

export default UploadPage;

