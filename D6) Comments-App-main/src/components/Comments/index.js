import {Component} from 'react'
import {v4 as uniqueId} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {name: '', comment: '', commentList: []}

  nameInput = event => {
    this.setState({name: event.target.value})
  }

  commentInput = event => {
    this.setState({comment: event.target.value})
  }

  addComment = event => {
    event.preventDefault()

    const {name, comment} = this.state

    const initialContainerBackgroundClassName =
      initialContainerBackgroundClassNames[
        Math.ceil(Math.random() * initialContainerBackgroundClassNames.length)
      ]

    const newComment = {
      id: uniqueId(),
      name,
      comment,
      initialContainerBackgroundClassName,
      isLiked: false,
      date: new Date(),
    }

    this.setState(prevState => ({
      commentList: [...prevState.commentList, newComment],
      name: '',
      comment: '',
    }))
  }

  toggleIsFavorite = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  deleteComment = commentId => {
    const {commentList} = this.state

    this.setState({
      commentList: commentList.filter(comment => comment.id !== commentId),
    })
  }

  render() {
    const {name, comment, commentList} = this.state

    return (
      <div className="main-container">
        <div className="sub-container">
          <div className="comments-container">
            <h1 className="comments-heading">Comments</h1>
            <p className="comments-description">
              Say something about 4.0 Technologies
            </p>

            <form className="inputs-container" onSubmit={this.addComment}>
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={this.nameInput}
              />
              <textarea
                placeholder="Your Comment"
                onChange={this.commentInput}
                value={comment}
              />
              <button type="submit" className="add-comment-btn">
                Add Comment
              </button>
            </form>
          </div>

          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
            />
          </div>
        </div>

        <hr />

        <div className="comments-count-container">
          <p className="comments-count">{commentList.length}</p>
          <p className="comments-description">Comments</p>
        </div>

        <ul>
          {commentList.map(each => (
            <CommentItem
              key={each.id}
              commentDetails={each}
              toggleIsFavorite={this.toggleIsFavorite}
              deleteComment={this.deleteComment}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
