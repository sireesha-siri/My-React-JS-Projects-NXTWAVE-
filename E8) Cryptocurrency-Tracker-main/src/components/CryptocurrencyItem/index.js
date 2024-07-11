// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {currencyDetails} = props

  const {currencyName, usdValue, euroValue, currencyLogo} = currencyDetails

  return (
    <li>
      <div className="currencies-container">
        <img src={currencyLogo} alt={currencyName} className="logo" />
        <p>{currencyName}</p>
      </div>
      <div className="currencies-container">
        <p>{usdValue}</p>
        <p>{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
