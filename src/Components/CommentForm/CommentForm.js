import { useState } from "react";

function CommentForm(){
    const [ commentInput, setCommentInput] = useState("");
    const [ commentValid, setCommentValid] = useState(true)

    const isCommentValid = () => {
        if(commentInput === ""){
            setCommentInput("");
            setCommentValid(false)
            
        }else{
            setCommentInput("");
            setCommentValid(true)
        }  
    }
    
    const handleChangeComment = (event) => {
        event.preventDefault()
        if(commentValid === false){
            setCommentValid(true)
        }
        setCommentInput(event.target.value);
    }

    return(
        <div className='comments__right'>
            <form className='comments-form'>
                <label className='comments-form__title'>JOIN THE CONVERSATION</label>
                <textarea className={`comments-form__area ${commentValid? " ":"comments-form__area--invalid"}`} id="commentInput" name='commentInput' onChange={handleChangeComment} placeholder='Add a new comment' value={commentInput} ></textarea>
            </form>
                <button onClick={isCommentValid} className='comments-form__btn' type='submit' >COMMENT</button>
        </div>
    )
}
export default CommentForm;