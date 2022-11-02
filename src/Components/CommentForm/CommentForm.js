
function CommentForm(){
    return(
        <div className='comments__right'>
            <form className='comments__form'>
                <label className='comment-form__title'>JOIN THE CONVERSATION</label>
                <textarea id="commentInput" name='commentInput' placeholder='Add a new comment'></textarea>
            </form>
                <button type='submit'>COMMENT</button>
        </div>
    )
}
export default CommentForm;