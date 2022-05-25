import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Link as SmoothLink } from "react-scroll";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {
    if (this.mount) {
      this.setState({ scroll: window.scrollY });
    }
  }

  componentDidMount() {
    this.mount = true;
    const el = document.querySelector(".header-section");
    this.setState({ top: el.offsetTop, height: el.offsetHeight });
    window.addEventListener("scroll", this.handleScroll);
  }

  componentDidUpdate() {
    const heroSection = document.querySelector(".hero-section");
    this.state.scroll > this.state.top
      ? (heroSection.style.marginTop = `${this.state.height}px`)
      : (heroSection.style.marginTop = 0);
  }

  componentWillUnmount() {
    this.mount = false;
  }
  render() {
    return (
      <Fragment>
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href={process.env.PUBLIC_URL + "/assets/css/fontawesome.min.css"}
          />
          <link
            rel="stylesheet"
            href={
              process.env.PUBLIC_URL + "/assets/css/fontawesome-light.min.css"
            }
          />
        </Helmet>
        {/* header */}
        <div
          className={`header-section section ${
            this.state.scroll > this.state.top ? "sticky" : ""
          }`}
        >
          <div className="container">
            {/* <div className="row justify-content-between align-items-center">
              <div className="logo col-md-auto col-12">
                <Link to={process.env.PUBLIC_URL + "/"}>
                  <img
                    src={
                      process.env.PUBLIC_URL + "/assets/img/landing/logo.png"
                    }
                    alt=""
                  />
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/img/landing/logo-color.png"
                    }
                    alt=""
                    className="sticky"
                  />
                </Link>
              </div>
              <div className="col-md-auto col-12">
                <ul className="header-links">
                  <li>
                    <SmoothLink
                      className="smoth-scroll"
                      to="demos"
                      smooth={true}
                      duration={500}
                    >
                      Demos
                    </SmoothLink>
                  </li>
                  <li>
                    <a href="https://hasthemes.com/contact-us/">Support</a>
                  </li>
                  <li>
                    <a
                      className="btn btn-primary"
                      href="https://themeforest.net/user/codecarnival/portfolio"
                    >
                      buy Bluetoof
                    </a>
                  </li>
                </ul>
              </div>
            </div> */}
          </div>
        </div>

        {/* hero area */}
        <div
          className="hero-section section overlay"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/assets/img/landing/hero-bg.jpg"
            })`,
          }}
        >
          <div className="container">
            <div className="hero-content">
              <h2 className="title">Website is under construction</h2>
              <h2 className="title">Сайт в стадии разработки</h2>
              <h2 className="title">Վեբ կայքը մշակման փուլում է</h2>
              {/* <SmoothLink
                className="btn btn-light smoth-scroll"
                to="demos"
                smooth={true}
                duration={500}
              >
                View Demo
              </SmoothLink> */}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default LandingPage;
