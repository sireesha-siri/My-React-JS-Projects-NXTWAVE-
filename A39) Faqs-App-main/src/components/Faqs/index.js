// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem'

import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props

    return (
      <div className="main-container">
        <div className="questions-container">
          <h1 className="faqs-heading">FAQs</h1>

          <ul>
            {faqsList.map(each => (
              <FaqItem key={each.id} details={each} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
