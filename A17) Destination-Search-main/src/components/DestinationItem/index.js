// Write your code here
import './index.css'

const DestinationItem = props => {
  const {name, image} = props

  return (
    <li className="destination-card">
      <img src={image} alt={name} className="destination-image" />
      <p className="destination-place">{name}</p>
    </li>
  )
}

export default DestinationItem
