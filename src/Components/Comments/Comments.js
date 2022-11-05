import './Comments.scss';
import CommentForm from '../CommentForm/CommentForm';
import CommentList from '../CommentList/CommentList';

function Comments({ currentVideo}){
   
    return (
        <div className='comments'>
            <h3 className='comments__title'>{currentVideo.comments.length} Comments</h3>
                <div className='comments__form-container'>
                    <div className='comments__avatar'></div>
                        <CommentForm /> 
                </div>

                <div className='comments__list'>
                {currentVideo.comments.map((ele) => {
                  return(   
                    <CommentList 
                    key={ele.id}
                    id={ele.id}
                    name={ele.name}
                    comment={ele.comment}
                    timestamp={ele.timestamp}
                    />
                    )
                })
                }
                </div>
        </div>

    )
}

export default Comments;