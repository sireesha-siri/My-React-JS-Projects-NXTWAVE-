// Write your code here
import {formatDistanceToNow} from 'date-fns'

import './index.css'

const CommentItem = props => {
  const {commentDetails} = props

  const {
    id,
    name,
    comment,
    initialContainerBackgroundClassName,
    isLiked,
    date,
  } = commentDetails

  const newDate = formatDistanceToNow(date)

  const likedImageUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const activeLikeButton = isLiked ? 'active-like-button' : ''

  const onClickFavoriteIcon = () => {
    const {toggleIsFavorite} = props
    toggleIsFavorite(id)
    console.log(isLiked)
  }

  const initialName = name ? name[0].toUpperCase() : ''

  const onDeleteComment = () => {
    const {deleteComment} = props
    deleteComment(id)
  }

  return (
    <li>
      <div className="name-container">
        <p
          className={`initial-container ${initialContainerBackgroundClassName}`}
        >
          {initialName}
        </p>
        <p className="name-style">{name}</p>
        <p className="time">{newDate}</p>
      </div>

      <p className="comment-style">{comment}</p>

      <div className="reaction-container">
        <div className="like-container">
          <img src={likedImageUrl} alt="like" className="like-image" />
          <button
            type="button"
            onClick={onClickFavoriteIcon}
            className={`like-button-style ${activeLikeButton}`}
          >
            Like
          </button>
        </div>
        <button
          type="button"
          className="delete-button-style"
          onClick={onDeleteComment}
          // eslint-disable-next-line react/no-unknown-property
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
      <hr />
    </li>
  )
}

export default CommentItem
