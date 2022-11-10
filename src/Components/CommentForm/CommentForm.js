import { useState } from "react";

function CommentForm(){
    const [ commentInput, setCommentInput] = useState("");

    const handleChangeComment = (event) => {
        setCommentInput = event.target.value;
    }

    const isCommentValid = () => {
        if(commentInput === ""){
            return false
         }
        return true
    }

    const isFormValid= () =>{
        if(!isCommentValid()){
            return false
        }
    return true
    }

    return(
        <div className='comments__right'>
            <form className='comments-form'>
                <label className='comments-form__title'>JOIN THE CONVERSATION</label>
                <textarea className={`comments-form__area ${isCommentValid()? "":"comments-form__area--invalid"}`} id="commentInput" name='commentInput' onChange={handleChangeComment} placeholder='Add a new comment' value={commentInput} ></textarea>
            </form>
                <button className='comments-form__btn' type='submit' disabled={!isFormValid()}>COMMENT</button>
        </div>
    )
}
export default CommentForm;