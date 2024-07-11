import React from 'react';
import "../css/header.css";
function Header(){
    return(
      <nav className="navbar navbar-expand-lg bg-transparent fixed-top z-index-99" >
      <div className="container-fluid header_class">
         
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav list_items">
            <li className="nav-item">
              <a className="nav-link list_items" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">Contact</a>
            </li>
            
            {/* <li className="nav-item">
              <a className="nav-link" href="/signup">Sign Up</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login">Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact"><img href="#" /></a>
            </li>
            <li className="nav-item">
              <button type="button" className="btn btn-primary" id="generateBtn2">Logout</button>
            </li> */}
          </ul>
          </div>
        </div>
         <hr style={{ backgroundColor:"white"}}/>
      </nav> 
    );
}

export default Header;