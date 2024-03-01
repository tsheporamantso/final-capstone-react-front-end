import React from 'react';
import '../Navigation.css';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="container">
      {/* Start of Left Sidebar */}
      <div className="sidebar left-sidebar">
        <div className="header-tabs-container">
          <div className="header">
            <Link to="/"><img id="logo-img" src="../images/StaySphere.svg" alt="stay logo" /></Link>
          </div>
          <div className="tabs">
            <ul>
              <li>

                <Link to="placelist">
                  <img src="../images/Places.svg" alt="places" />
                  Places
                </Link>
              </li>
              <li>
                <Link to="/reserve">
                  <img src="../images/Reserve.svg" alt="places" />
                  Reserve
                </Link>
              </li>
              <li>
                <Link to="myreservations">
                  <img src="../images/Myreservations.svg" alt="places" />
                  My Reservations
                </Link>
              </li>
              <li>
                <Link to="addPlace">
                  <img src="../images/add.svg" alt="places" />
                  Add Place
                </Link>
              </li>
              <li>
                <Link to="/delete-place">
                  <img src="../images/delete.svg" alt="places" />
                  Delete Place
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* End of Header and Tabs Container */}

        {/* Start of Social-Icons */}
        <div className="social-icons">
          <ul>
            <li><a href="https://www.twitter.com/vespa"><img id="social-img" src="https://img.icons8.com/ios/50/000000/twitter.png" alt="twitter-icon" /></a></li>
            <li><a href="https://www.facebook.com/vespa"><img id="social-img" src="https://img.icons8.com/ios/50/000000/facebook.png" alt="facebook-icon" /></a></li>
            <li><a href="https://www.instagram.com/vespa"><img id="social-img" src="https://img.icons8.com/ios/50/000000/google.png" alt="twitter-icon" /></a></li>
            <li><a href="https://www.twitter.com/vespa"><img id="social-img" src="https://img.icons8.com/ios/50/000000/instagram-new.png" alt="instagram-icon" /></a></li>
            <li><a href="https://www.twitter.com/vespa"><img id="social-img" src="https://img.icons8.com/ios/50/000000/p.png" alt="p-icon" /></a></li>
          </ul>
          <p className="copyright">&copy; 2024 STAYSPARE HOTELS - CALIFORNIA</p>
        </div>
        {/* End of Social-Icons */}
      </div>

      {/* Start of Main  Content */}
      <div className="Center">
        {/* <h1>StaySpare</h1>
        <h4>Please select a hotel</h4> */}
        {/*
        <div className="slideshow">
          <button onClick={this.goLeft}>Left</button>
          <img src={currentImage.src} alt={currentImage.name} />
          <button onClick={this.goRight}>Right</button>
        </div>

        <h2>{currentImage.name}</h2>
        <p>{currentImage.description}</p> */}

        {/* <div className="social-icons">
          <Facebook />
          <Twitter />
          <Instagram />
        </div> */}
      </div>
      {/* End of Main Content */}
    </nav>
  );
}

export default Navigation;
