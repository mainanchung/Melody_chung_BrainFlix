
function CommentList(){
    return(
        <div className='comments__box'>
            <div className="comments__box--avatar"></div>
             <div className="comments__box--content">
                <div className="comments__box--top">
                    <h3 className="comments__box--name">Michel</h3>
                    <p className="comments__box--date">2022/11/23</p>
                </div>
                <p className="comments__box--text">They BLEW the ROOF off at their last event, once everyone started figuring out they were going.</p>
            </div> 
        </div>
    )
}
export default CommentList;