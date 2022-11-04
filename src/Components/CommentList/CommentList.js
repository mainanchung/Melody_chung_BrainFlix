
function CommentList({id, timestamp, name, comment}){
    
    return(
        <div className='comments__box'>
            <div className="comments__box--avatar"></div>
             <div className="comments__box--content">
                <div className="comments__box--top">
                    <h3 className="comments__box--name">{name}</h3>
                    <p className="comments__box--date">{timestamp}</p>
                </div>
                <p className="comments__box--text">{comment}</p>
            </div> 
        </div>
    )
}
export default CommentList;