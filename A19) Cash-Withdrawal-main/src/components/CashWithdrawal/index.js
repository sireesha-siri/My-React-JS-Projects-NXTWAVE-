// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  updateBalance = value => {
    this.setState(prevState => ({amount: prevState.amount - value}))
  }

  render() {
    const {amount} = this.state
    const {denominationsList} = this.props
    const name = 'Sarah Williams'
    const logo = name.slice(0, 1)

    return (
      <div className="cash-withdrawal-container">
        <div className="cash-withdrawal-card">
          <div className="profile-name-container">
            <p className="logo">{logo}</p>
            <h1 className="name">{name}</h1>
          </div>

          <div className="balance-container">
            <p className="balance-heading">Your Balance</p>
            <div>
              <p className="amount">{amount}</p>
              <p className="currency-heading">In Rupees</p>
            </div>
          </div>

          <div className="withdrawal-container">
            <p className="withdraw-heading">Withdraw</p>
            <p className="rupees-heading">CHOOSE SUM (IN RUPEES)</p>
          </div>

          <ul className="buttons-container">
            {denominationsList.map(each => (
              <DenominationItem
                key={each.id}
                denomination={each}
                updateBalance={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
