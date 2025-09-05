// Write your code here
import Popup from 'reactjs-popup'

import {Link} from 'react-router-dom'

import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import './index.css'

const Header = () => (
  <div className="nav-header">
    <div className="nav-content">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
          className="website-logo"
        />
      </Link>

      <Popup
        modal
        trigger={
          <button
            type="button"
            data-testid="hamburgerIconButton"
            className="ham-burger-icon"
            aria-label="menu"
          >
            <GiHamburgerMenu size="30" />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <div className="modal-container">
            <button
              type="button"
              className="close-button"
              aria-label="close"
              data-testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose size="30" color="#616e7c" />
            </button>

            <ul className="nav-list">
              <li>
                <Link to="/" className="nav-link" onClick={() => close()}>
                  <AiFillHome size="36" />
                  <p className="nav-item">Home</p>
                </Link>
              </li>

              <li>
                <Link to="/about" className="nav-link" onClick={() => close()}>
                  <BsInfoCircleFill size="32" />
                  <p className="nav-item">About</p>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </Popup>
    </div>
  </div>
)

export default Header
