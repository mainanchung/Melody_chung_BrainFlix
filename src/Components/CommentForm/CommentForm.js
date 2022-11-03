
function CommentForm(){
    return(
        <div className='comments__right'>
            <form className='comments-form'>
                <label className='comments-form__title'>JOIN THE CONVERSATION</label>
                <textarea className='comments-form__area' id="commentInput" name='commentInput' placeholder='Add a new comment'></textarea>
            </form>
                <button className='comments-form__btn' type='submit'>COMMENT</button>
        </div>
    )
}
export default CommentForm;