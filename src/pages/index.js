import React from "react"
import heroImage from "../images/20210220185430_IMG_2248.jpg"

import Layout from "../components/layout"

const indexPage = () => {
  return (
    <Layout>
      <div className="header">
        <div className="header-container">
          <h1>
            Reza Prasetya
            <br />
            Photographer
            <br />
            &nbsp;&nbsp;Programmer
          </h1>
        </div>
      </div>

      <div className="hero-image">
        <div className="hero-image-container">
          <img src={heroImage} />
        </div>
      </div>

      <div className="whitespace"></div>

      <div className="section-header">
        <div className="section-header-container">
          <div className="section-title">about</div>
          <div className="section-order">/001</div>
        </div>
      </div>

      <div className="divider"></div>

      <section className="about">
        <div className="about-container">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            tempore blanditiis esse quod mollitia sit voluptatum odit nisi
          </p>
          <p>
            repellendus laudantium facere fugiat tempora, nam quia! Debitis
            dignissimos voluptas doloremque nisi?
          </p>
        </div>
      </section>

      <div className="whitespace"></div>

      <div className="section-header">
        <div className="section-header-container">
          <div className="section-title">projects</div>
          <div className="section-order">/002</div>
        </div>
      </div>

      <div className="divider"></div>

      <section className="project">
        <div className="project-container">
          <div>
            <nav className="menu">
              <div className="menu__item">
                <a className="menu__item-link">/ street</a>
                <img
                  className="menu__item-img"
                  src="./assets/images/project-one.jpeg"
                />
                <div className="marquee">
                  <div className="marquee__inner">
                    <span>street</span>
                    <span>street</span>
                    <span>street</span>
                    <span>street</span>
                  </div>
                </div>
              </div>

              <div className="divider"></div>

              <div className="menu__item">
                <a className="menu__item-link">/ Portrait</a>
                <img
                  className="menu__item-img"
                  src="./assets/images/project-two.jpeg"
                />
                <div className="marquee">
                  <div className="marquee__inner">
                    <span>Portrait</span>
                    <span>Portrait</span>
                    <span>Portrait</span>
                    <span>Portrait</span>
                  </div>
                </div>
              </div>

              <div className="divider"></div>

              <div className="menu__item">
                <a className="menu__item-link">/ Nature</a>
                <img
                  className="menu__item-img"
                  src="./assets/images/project-three.jpeg"
                />
                <div className="marquee">
                  <div className="marquee__inner">
                    <span>Nature</span>
                    <span>Nature</span>
                    <span>Nature</span>
                    <span>Nature</span>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </section>

      <div className="whitespace"></div>

      <div className="section-header">
        <div className="section-header-container">
          <div className="section-title">socials</div>
          <div className="section-order">/004</div>
        </div>
      </div>

      <div className="divider"></div>

      <section className="socials">
        <div className="socials-container">
          <div className="socials-id dr">
            <a href="">dribble</a>
          </div>
          <div className="socials-id ln">
            <a href="">linkedin</a>
          </div>
          <div className="socials-id ig">
            <a href="">instagram</a>
          </div>
          <div className="socials-id tw">
            <a href="">twitter</a>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default indexPage
