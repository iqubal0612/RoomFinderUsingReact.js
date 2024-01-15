import React from 'react';
import './Header.css'

const Header = () => {
  return (
    <section className="h-wrapper">
      <div className=" flexStart paddings innerWidth h-container">
        <img src="./logo.png" alt="logo" width={100} />

        <div className="flexCenter h-menu">
          <a href="">
            Properties
          </a>
          {/* <a href="">Our Value</a> */}
          <a href="">Contact Us</a>
          <a href="">Add Property</a>
          <button className="button">
          <a href="">Login</a>
          </button>
          
        </div>
      </div>
    </section>
  )
}

export default Header