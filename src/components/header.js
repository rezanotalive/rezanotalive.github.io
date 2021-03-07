import React from "react"

const Header = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="site-title">by rezanotalive</div>
        {/* <div className="site-type">porfolio</div> */}
        <div className="site-year">
          <ul>
            <li>contact</li>
            <li>blog</li>
            <li>home</li>
          </ul>
        </div>
      </div>
      <div className="divider"></div>
    </div>
  )
}

export default Header
