import axios from "axios";
import { useState, useRef } from "react";

function CommentForm({id,commentChange}){
   
    const [commentValid, setCommentValid] = useState(true);
    const comment = useRef();

    const isCommentValid = () => {
        if(comment.current.value === ""){
            comment.current.value="";
            setCommentValid(false)
        }else{
            comment.current.value ="";
            setCommentValid(true)
        }  
    }
    
    const handleChangeComment = (event) => {
        event.preventDefault()
        if(commentValid === false){
            setCommentValid(true)
        }
    }

    const addComment = (event) => {
        event.preventDefault();
        let newComment = {
            comment: comment.current.value
        }

        isCommentValid()
        if(!commentValid){
            console.log("comment field invalid!")
        }else{
            axios.post(`http://localhost:8080/videos/${id}/comments`, newComment).then((response) =>{
                console.log(response.data)
                axios.get(`http://localhost:8080/videos/${id}`).then((response) => {
                    commentChange(response.data)
                 })
            }).catch((error) => {
                console.log(error)
                 })
            
        }
    } 

    return(
        <div className='comments__right'>
            <form className='comments-form'>
                <label className='comments-form__title'>JOIN THE CONVERSATION</label>
                <textarea 
                ref={comment}
                className={`comments-form__area ${commentValid? " ":"comments-form__area--invalid"}`} 
                id="commentInput" 
                name='commentInput' 
                onChange={handleChangeComment} 
                placeholder='Add a new comment'></textarea>
            </form>
                <button onClick={addComment} className='comments-form__btn' type='submit' >COMMENT</button>
        </div>
    )
}
export default CommentForm;