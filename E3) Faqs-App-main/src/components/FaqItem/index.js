// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {isClicked: false}

  displayFaqAnswer = () => {
    this.setState(prev => ({isClicked: !prev.isClicked}))
  }

  getImageToClickAndDisplay = () => {
    const {isClicked} = this.state

    const imageUrl = isClicked
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

    const altText = isClicked ? 'minus' : 'plus'

    return (
      <button type="button" onClick={this.displayFaqAnswer}>
        <img src={imageUrl} alt={altText} />
      </button>
    )
  }

  getFaqAnswer = () => {
    const {details} = this.props

    const {answerText} = details

    const {isClicked} = this.state

    if (isClicked) {
      return (
        <div>
          <hr />
          <p className="faq-answer">{answerText}</p>
        </div>
      )
    }
    return ''
  }

  render() {
    const {details} = this.props

    const {questionText} = details

    return (
      <li>
        <div className="question-container">
          <h1 className="faq-question">{questionText}</h1>
          {this.getImageToClickAndDisplay()}
        </div>

        <div>{this.getFaqAnswer()}</div>
      </li>
    )
  }
}

export default FaqItem
