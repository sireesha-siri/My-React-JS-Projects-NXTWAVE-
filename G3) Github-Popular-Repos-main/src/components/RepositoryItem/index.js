// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {repoDetails} = props
  const {avatarUrl, forksCount, issuesCount, name, starsCount} = repoDetails

  return (
    <li className="repo-card">
      <img src={avatarUrl} alt={name} className="avatar-style" />
      <h1 className="repo-name">{name}</h1>

      <div className="mini-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
          className="image-style"
        />
        <p>{starsCount} stars</p>
      </div>

      <div className="mini-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
          className="image-style"
        />
        <p>{forksCount} forks</p>
      </div>

      <div className="mini-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
          className="image-style"
        />
        <p>{issuesCount} open issues</p>
      </div>
    </li>
  )
}

export default RepositoryItem
