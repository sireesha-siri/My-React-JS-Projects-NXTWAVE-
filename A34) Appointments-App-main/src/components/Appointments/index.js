// Write your code here
import {Component} from 'react'
import {format} from 'date-fns'
import {v4 as uniqueId} from 'uuid'
import AppointmentItem from '../AppointmentItem'

import './index.css'

class Appointments extends Component {
  state = {title: '', date: '', appointmentList: []}

  titleInput = event => {
    this.setState({title: event.target.value})
  }

  dateInput = event => {
    this.setState({date: event.target.value})
  }

  addAppointment = event => {
    event.preventDefault()
    const {title, date} = this.state

    const newAppointment = {
      id: uniqueId(),
      title,
      date: format(new Date(date), 'dd MMMM yyyy, EEEE'),
      isStarred: false,
    }

    this.setState(prev => ({
      appointmentList: [...prev.appointmentList, newAppointment],
      title: '',
      date: '',
    }))
  }

  markedAppointment = id => {
    this.setState(prevState => ({
      appointmentList: prevState.appointmentList.map(eachAppointment => {
        if (id === eachAppointment.id) {
          return {...eachAppointment, isStarred: !eachAppointment.isStarred}
        }
        return eachAppointment
      }),
    }))
  }

  onStarredIcon = () => {
    this.setState(prev => ({
      appointmentList: prev.appointmentList.filter(
        each => each.isStarred === true,
      ),
    }))
  }

  render() {
    const {title, date, appointmentList} = this.state

    return (
      <div className="main-container">
        <div className="sub-container">
          <div className="container">
            <div className="appointment-container">
              <h1 className="appointment-heading">Add Appointment</h1>

              <form className="form-style" onSubmit={this.addAppointment}>
                <div className="input-container">
                  <label htmlFor="title">TITLE</label>
                  <input
                    id="title"
                    type="text"
                    onChange={this.titleInput}
                    value={title}
                  />
                </div>

                <div className="input-container">
                  <label htmlFor="date">DATE</label>
                  <input
                    id="date"
                    type="date"
                    onChange={this.dateInput}
                    value={date}
                  />
                </div>

                <div>
                  <button type="submit" className="add-btn">
                    Add
                  </button>
                </div>
              </form>
            </div>

            <div className="appointments-image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="appointments"
                className="appointments-image"
              />
            </div>
          </div>

          <hr />

          <div className="bottom-container">
            <h1 className="appointment-sub-heading">Appointments</h1>
            <button
              type="button"
              className="starred-btn"
              onClick={this.onStarredIcon}
            >
              Starred
            </button>
          </div>

          <ul className="appointments-list-container">
            {appointmentList.map(each => (
              <AppointmentItem
                key={each.id}
                appointmentDetails={each}
                markedAppointment={this.markedAppointment}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments
