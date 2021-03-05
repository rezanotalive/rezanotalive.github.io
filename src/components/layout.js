import React from "react"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const layout = props => {
  return (
    <div className="wrapper">
      <div className="container">
        <Header />
        {props.children}
        <Footer />
      </div>
    </div>
  )
}

export default layout
