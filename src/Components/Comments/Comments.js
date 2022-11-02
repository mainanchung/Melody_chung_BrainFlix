import './Comments.scss';
import CommentForm from '../CommentForm/CommentForm';
import CommentList from '../CommentList/CommentList';

function Comments(){

    return (

        <div className='comments'>
            <h3 className='comments__title'>{3}Comments</h3>
                <div className='comments__form-container'>
                    <div className='commens__avatar'></div>
                        <CommentForm /> 
                </div>

                <div className='comments__list'>
                    <CommentList />
                </div>
        </div>

    )
}

export default Comments;