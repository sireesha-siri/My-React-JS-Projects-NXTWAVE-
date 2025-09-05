// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeContent = () => {
        onToggleShowContent()
      }

      const onChangeLeftNavbar = () => {
        onToggleShowLeftNavbar()
      }

      const onChangeRightNavbar = () => {
        onToggleShowRightNavbar()
      }

      return (
        <div className="configuration-controller-background">
          <h1 className="layout-heading">Layout</h1>

          <div className="check-box-container">
            <input
              type="checkbox"
              id="content"
              checked={showContent}
              onChange={onChangeContent}
            />
            <label htmlFor="content">Content</label>
          </div>

          <div className="check-box-container">
            <input
              type="checkbox"
              id="left-navbar"
              checked={showLeftNavbar}
              onChange={onChangeLeftNavbar}
            />
            <label htmlFor="left-navbar">Left Navbar</label>
          </div>

          <div className="check-box-container">
            <input
              type="checkbox"
              id="right-navbar"
              checked={showRightNavbar}
              onChange={onChangeRightNavbar}
            />
            <label htmlFor="right-navbar">Right Navbar</label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
