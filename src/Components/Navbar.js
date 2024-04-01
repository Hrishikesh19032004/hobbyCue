import React from "react";
import "../Styles/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCompass, faAngleDown ,faStar ,faBookmark,faBell,faCartShopping,faUser} from "@fortawesome/free-solid-svg-icons"; // Import the necessary icons

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        {/* Navbar */}
        <div className="navbar-brand"></div>
        
        {/* Search Bar */}
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <div className="searchBar">
            <FontAwesomeIcon icon={faSearch} style={{ color: "white" }} />
          </div>
        </form>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* Drop Down */}
            <li className="nav-item dropdown">
              <div className="dropdown">
                <FontAwesomeIcon icon={faCompass} style={{color:"#8064a2"}}/>
                <span style={{ marginLeft: "5px" }}>Explore</span>
                <FontAwesomeIcon icon={faAngleDown} style={{marginLeft:"7px"}}/>
                <div className="dropdown-content">
                  <p className="dropContent">People - Community</p>
                  <hr/>
                  <p className="dropContent">People - Venues</p>
                  <hr/>
                  <p className="dropContent">Programs - Events</p>
                  <hr />
                  <p className="dropContent">Products - Stores</p>
                  <hr />
                  <p className="dropContent">Blogs</p>
                </div>
              </div>
            </li>
          </ul>


          {/* Hobby */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{marginLeft:"-15vw"}}>
            {/* Drop Down */}
            <li className="nav-item dropdown">
              <div className="dropdown">
                <FontAwesomeIcon icon={faStar} style={{ color: "#8064a2" }} />
                <span style={{ marginLeft: "5px" }}>Hobby</span>
                <FontAwesomeIcon icon={faAngleDown} style={{ marginLeft: "7px" }} />
                <div className="dropdown-content">
                  <p className="dropContent">Sports - Outdoor</p>
                  <hr />
                  <p className="dropContent">Reading - Books</p>
                  <hr />
                  <p className="dropContent">Creativity - Abstract</p>
                  <hr />
                  <p className="dropContent">Hiking - Mountains</p>
                  <hr />
                  <p className="dropContent">Playing Music</p>
                </div>
              </div>
            </li>
            <li className="bookmark"><FontAwesomeIcon icon={faBookmark} /></li>
            <li className="bookmark"><FontAwesomeIcon icon={faBell} /></li>
            <li className="bookmark"><FontAwesomeIcon icon={faCartShopping} /></li>
          </ul>

          <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{marginLeft:"-12vw"}}>
            {/* Drop Down */}
            <li className="nav-item dropdown">
              <div className="dropdown">
              <FontAwesomeIcon icon={faUser} style={{ color: "#8064a2", fontSize: "20px" }} />

                <FontAwesomeIcon icon={faAngleDown} style={{marginLeft:"7px"}}/>
                <div className="dropdown-content">
                  <p className="dropContent">Profile</p>
                  <hr/>
                  <p className="dropContent">Notifications</p>
                  <hr/>
                  <p className="dropContent">Billing Information</p>
                  <hr />
                  <p className="dropContent">Help & Support</p>
                  <hr />
                  <p className="dropContent">Security</p>
                </div>
              </div>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  );
}
