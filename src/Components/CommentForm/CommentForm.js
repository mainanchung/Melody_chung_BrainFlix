import { useState, useRef } from "react";

function CommentForm(){
   
    const [ commentValid, setCommentValid] = useState(true);
    const comment = useRef();

    const isCommentValid = () => {
        if(comment.current.value === ""){
            comment.current.value="";
            setCommentValid(false)
        }else{
            comment.current.value =""
            setCommentValid(true)
        }  
    }
    
    const handleChangeComment = (event) => {
        event.preventDefault()
        if(commentValid === false){
            setCommentValid(true)
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
                <button onClick={isCommentValid} className='comments-form__btn' type='submit' >COMMENT</button>
        </div>
    )
}
export default CommentForm;