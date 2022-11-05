
function CommentList({id, timestamp, name, comment }){
    let convertTimstamp = new Intl.DateTimeFormat('en-US', { day: '2-digit', month: '2-digit', year:'numeric'}).format(timestamp)
    return(
        <div className='comments__box'> 
            <div className="comments__box--avatar"></div>
             <div className="comments__box--content">
                <div className="comments__box--top">
                    <h3 className="comments__box--name">{name}</h3>
                    <p className="comments__box--date">{convertTimstamp}</p>
                </div>
                <p className="comments__box--text">{comment}</p>
            </div> 
        </div>  
    )
}
export default CommentList;