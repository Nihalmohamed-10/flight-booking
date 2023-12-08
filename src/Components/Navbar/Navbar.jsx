import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Navbar.css'
import Button from '../Buttons/Button';
import { mainLogo } from '../../images/Images';

function Navbar() {
    const navigate = useNavigate();
    const toSignUp = () => {
        navigate("/signup");
      };
  return (
    <div className="navbar">
          <div className="logo">
            <a href="/">
              <img src={mainLogo} alt="logo" />
            </a>
          </div>
          <div className="nav">
            {/* <input type="checkbox" className="toggle-menu" />
            <div className="hamburger"></div> */}
            <div className="navList">
              <ul>
                <li>
                  <a href="#">Flights</a>
                </li>
                <li>
                  <a href="#">Hotels</a>
                </li>
                <li>
                  <a href="#">Packages</a>
                </li>
                <li>
                  <a href="/signin">Sign in</a>
                </li>
              </ul>
              <div className="SignupBut">
                <Button btnContent="Sign Up" btnFunction={toSignUp} />
              </div>
            </div>
          </div>
        </div>
  )
}

export default Navbar