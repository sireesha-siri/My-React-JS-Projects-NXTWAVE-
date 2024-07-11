// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, isTabActive, updateTab} = props
  const {tabId, displayText} = tabDetails

  const activeTabClassName = isTabActive ? 'active-tab-btn' : ''

  const activeTab = () => {
    updateTab(tabId)
  }

  return (
    <li className="tab-item-container">
      <button
        type="button"
        className={`tab-btn ${activeTabClassName}`}
        onClick={activeTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
