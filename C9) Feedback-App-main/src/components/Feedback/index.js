// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {
    emojiClicked: false,
  }

  IsEmojiClicked = () => {
    this.setState(prev => ({emojiClicked: !prev.emojiClicked}))
  }

  emojiContainer = () => {
    const {resources} = this.props
    const {emojis} = resources
    return (
      <div>
        <h1 className="heading">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="emojis-container">
          {emojis.map(each => (
            <li key={each.id}>
              <button type="button" onClick={this.IsEmojiClicked}>
                <img src={each.imageUrl} alt={each.name} />
              </button>
              <p>{each.name}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  feedbackContainer = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="feedback-container">
        <img src={loveEmojiUrl} alt="love emoji" />
        <h1 className="heading">Thank You!</h1>
        <p>
          We will use our feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    const {emojiClicked} = this.state
    return (
      <div className="background-container">
        <div className="feedback-container">
          {emojiClicked ? this.feedbackContainer() : this.emojiContainer()}
        </div>
      </div>
    )
  }
}

export default Feedback
