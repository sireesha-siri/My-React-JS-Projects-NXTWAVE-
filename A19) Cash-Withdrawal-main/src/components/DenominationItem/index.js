// Write your code here
import './index.css'

const DenominationItem = props => {
  // eslint-disable-next-line no-unused-vars
  const {denomination, key, updateBalance} = props
  const {value} = denomination

  // eslint-disable-next-line no-shadow
  const withdrawAmount = () => {
    updateBalance(value)
  }

  return (
    <li className="button-container">
      <button type="button" className="button-style" onClick={withdrawAmount}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
