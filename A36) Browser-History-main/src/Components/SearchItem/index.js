import './index.css'

const SearchItem = props => {
  // eslint-disable-next-line no-unused-vars
  const {history, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = history

  const removeHistory = () => {
    deleteHistory(id)
  }

  return (
    <li>
      <div className="list-design">
        <p className="time">{timeAccessed}</p>
        <div className="domain-container">
          <img src={logoUrl} alt="domain logo" className="domain-logo" />
          <p className="title-style">{title}</p>
          <p className="domain-url-style">{domainUrl}</p>
        </div>
      </div>

      <div>
        <button
          type="button"
          className="delete-button-container"
          data-testid="button"
          data-testid="delete"
          onClick={removeHistory}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default SearchItem
