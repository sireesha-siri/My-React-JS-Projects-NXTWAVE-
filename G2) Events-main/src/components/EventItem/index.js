// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails, selectedEvent, isActive} = props

  const {id, imageUrl, name, location} = eventDetails

  const clickEvent = () => {
    selectedEvent(id)
  }

  const imageStyle = isActive ? 'event-image active' : 'event-image'

  return (
    <li className="event-item">
      <button type="button" onClick={clickEvent} className="event-button">
        <img src={imageUrl} alt="event" className={imageStyle} />
      </button>
      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}

export default EventItem
