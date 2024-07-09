// Write your code here
import './index.css'

const SuggestionItem = props => {
  // eslint-disable-next-line no-unused-vars
  const {suggestion, id, key, updateSearch} = props

  const fixSearch = () => {
    updateSearch(suggestion)
  }

  return (
    <li className="search-item">
      <p>{suggestion}</p>
      <button type="button" className="button-style" onClick={fixSearch}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-design"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
