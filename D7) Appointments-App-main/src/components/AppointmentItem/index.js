// Write your code here
import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails, markedAppointment} = props
  const {id, title, date, isStarred} = appointmentDetails

  const onClickFavoriteIcon = () => {
    markedAppointment(id)
  }

  const imageUrl = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  return (
    <li>
      <div className="top-container">
        <p className="title">{title}</p>
        <button
          type="button"
          onClick={onClickFavoriteIcon}
          className="star-button"
          data-testid="star"
        >
          <img src={imageUrl} alt="star" />
        </button>
      </div>
      <p className="date-style">Date: {date}</p>
    </li>
  )
}

export default AppointmentItem
