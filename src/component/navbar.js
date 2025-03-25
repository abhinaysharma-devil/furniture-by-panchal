import React from 'react';
import '../assests/css/navbar.css'
import { Link } from 'react-router-dom';
import { serviceDetails } from '../../src/data/dataset';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export const Header = () => {

  const [serviceState] = useState(serviceDetails)
  const navigate = useNavigate()

  function gotoServices(item) {
    navigate("/services/x", { state: { data: item } })
  }

  return (
    <>
    
      <nav className="navbar navbar-expand-lg navbar-light" style={{ boxShadow: "0px 0px 3px 0px gray" }}>

        <img src="fbp-logo.JPEG" alt="" width="300px" />

        <div className="first-div" >

          <ul className="navbar-nav mr-auto" id="navbar-ul" >
            <li className="nav-item active">
              <Link className="nav-link " to="/">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact-us">Contact US</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/home" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Services
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                {serviceState.map((item, index) => {
                  return (
                    <>
                      <a className="dropdown-item" href="/home" key={index} onClick={() => { gotoServices(item) }}>{item.service_title}</a>
                    </>
                  )
                })}
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="/home">About Us</a>
            </li>
          </ul>

        </div>
       
      </nav>
      
    </>
  )
};