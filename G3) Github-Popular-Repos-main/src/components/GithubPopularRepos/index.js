import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

const repoState = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class GithubPopularRepos extends Component {
  state = {
    popularRepos: [],
    popularId: 'ALL',
    apiStatus: repoState.initial,
  }

  componentDidMount() {
    this.getPopularRepos()
  }

  getPopularId = id => {
    this.setState({popularId: id}, this.getPopularRepos)
  }

  getPopularRepos = async () => {
    this.setState({apiStatus: repoState.inProgress})
    const {popularId} = this.state
    const url = `https://apis.ccbp.in/popular-repos?language=${popularId}`

    const response = await fetch(url)
    const data = await response.json()

    if (response.ok) {
      const formattedData = data.popular_repos.map(each => ({
        avatarUrl: each.avatar_url,
        forksCount: each.forks_count,
        id: each.id,
        issuesCount: each.issues_count,
        name: each.name,
        starsCount: each.stars_count,
      }))

      this.setState({popularRepos: formattedData, apiStatus: repoState.success})
    } else if (response.status === 401) {
      this.setState({apiStatus: repoState.failure})
    }
  }

  successView = () => {
    const {popularRepos} = this.state

    return (
      <ul>
        {popularRepos.map(each => (
          <RepositoryItem key={each.id} repoDetails={each} />
        ))}
      </ul>
    )
  }

  failureView = () => (
    <div className="failure-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
        className="failure-image"
      />
      <p className="failure-message">Something Went Wrong</p>
    </div>
  )

  inProgressView = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
    </div>
  )

  getAllViews = () => {
    const {apiStatus} = this.state
    let view = null

    switch (apiStatus) {
      case repoState.success:
        view = this.successView()
        break
      case repoState.inProgress:
        view = this.inProgressView()
        break
      case repoState.failure:
        view = this.failureView()
        break
      default:
        view = null
    }
    return view
  }

  render() {
    const {popularId} = this.state

    return (
      <div className="github-popular-repos-container">
        <h1>Popular</h1>

        <ul>
          {languageFiltersData.map(each => (
            <LanguageFilterItem
              key={each.id}
              data={each}
              getPopularId={this.getPopularId}
              isActive={each.id === popularId}
            />
          ))}
        </ul>

        {this.getAllViews()}
      </div>
    )
  }
}

export default GithubPopularRepos
