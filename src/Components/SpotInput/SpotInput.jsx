import React from 'react'
import './SpotInput.css'
import Button from '../Buttons/Button'
import { useNavigate } from 'react-router-dom';

function SpotInput() {
    const navigate = useNavigate();
    const toAirLines = () => {
        navigate("/airlines");
      };
  return (
    <div className="spotInput wrapper">
          <div className="inputDiv">
            <select className="Inputs" placeholder="From Where?">
              <option value="" disabled selected>
                From where?
              </option>
              <option value="option1">SFO</option>
              <option value="option2">ATL</option>
              <option value="option3">LAX</option>
              <option value="option1">STL</option>
              <option value="option2">PVG</option>
              <option value="option3">MSP</option>
              <option value="option3">NRT</option>
            </select>
          </div>
          <div className="inputDiv">
            <img src="" alt="" />
            <select className="Inputs" placeholder="From Where?">
              <option value="" disabled selected>
                Where to?
              </option>
              <option value="option1">SFO</option>
              <option value="option2">ATL</option>
              <option value="option3">LAX</option>
              <option value="option1">STL</option>
              <option value="option2">PVG</option>
              <option value="option3">MSP</option>
              <option value="option3">NRT</option>
            </select>
          </div>
          <div className="inputDiv">
            <img src="" alt="" />
            <input className="Inputs" type="text" placeholder="Depart Return" />
          </div>
          <div className="inputDiv">
            <img src="" alt="" />
            <input className="Inputs" type="text" placeholder="1 Adult" />
          </div>
          <div className="SearchBut">
            <Button btnContent="Search"  btnFunction={toAirLines}  />
          </div>
        </div>
  )
}

export default SpotInput