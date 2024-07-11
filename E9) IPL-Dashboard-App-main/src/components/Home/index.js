// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {isLoading: true, teamCardList: []}

  componentDidMount() {
    this.getTeamCardList()
  }

  getTeamCardList = async () => {
    const {teamCardList, isLoading} = this.state

    console.log(teamCardList)
    console.log(isLoading)

    const response = await fetch('https://apis.ccbp.in/ipl')

    const data = await response.json()

    const convertListToCamelCase = data.teams.map(each => ({
      name: each.name,
      id: each.id,
      teamImageUrl: each.team_image_url,
    }))

    this.setState({teamCardList: convertListToCamelCase, isLoading: false})
  }

  getLoader = () => (
    // eslint-disable-next-line react/no-unknown-property
    <div testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
    </div>
  )

  getTeamCardData = () => {
    const {teamCardList} = this.state

    return (
      <ul>
        {teamCardList.map(each => (
          <TeamCard key={each.id} cardDetails={each} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="app-container">
        <div className="home-container">
          <div className="logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
              className="logo-design"
            />
            <h1>IPL Dashboard</h1>
          </div>

          {isLoading ? this.getLoader() : this.getTeamCardData()}
        </div>
      </div>
    )
  }
}

export default Home
