import React from 'react'
import { Link } from 'react-router-dom'
import jackson from "../../assets/about-BgAkqdr2.jpg"
import style from './SideNav.module.css'


const SideNav = () => {
  return (
    <nav className={`navbar navbar-expand-lg bg-body-tertiary position-fixed p-0 ${style.navv} `} style={{zIndex:"2"}}>
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className={`nav flex-column ${style.icons}`}>
            <li className="nav-item">
              <img src={jackson} alt="" style={{
                width: "150px",height:"150px" ,borderRadius:"50%"}} />
            </li>
            <li>
              <h4>Jackson Ford</h4>
            </li>
            <li>
              <p><span>UI/UX/DESIGNER</span> IN PHILIPPINIES</p>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/home">HOME</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" >ABOUT</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/skills">SKILLS</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/experiences">EXPERIENCES</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/work">WORK</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default SideNav

