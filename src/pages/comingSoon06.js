import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ReactSVG } from "react-svg";
import Countdown from "react-countdown";
import Renderer from "../components/countdown/Renderer";
import SubscribeEmail from "../components/newsletter/SubscribeEmail";

const ComingSoon06 = () => {
  return (
    <Fragment>
      <Helmet>
        <style>
          {`
          
          @font-face {
              font-family: "Perpetua Bold";
              font-weight: bold;
              font-style: normal;
          
              src: url(${process.env.PUBLIC_URL +
                "/assets/fonts/Perpetua-Bold/Perpetua-Bold.eot"});
              src: url(${process.env.PUBLIC_URL +
                "/assets/fonts/Perpetua-Bold/Perpetua-Bold.eot?#iefix"}) format("embedded-opentype"),
              url(${process.env.PUBLIC_URL +
                "/assets/fonts/Perpetua-Bold/Perpetua-Bold.woff2"}) format("woff2"),
              url(${process.env.PUBLIC_URL +
                "/assets/fonts/Perpetua-Bold/Perpetua-Bold.woff"}) format("woff"),
              url(${process.env.PUBLIC_URL +
                "/assets/fonts/Perpetua-Bold/Perpetua-Bold.ttf"}) format("truetype"),
              url(${process.env.PUBLIC_URL +
                "/assets/fonts/Perpetua-Bold/Perpetua-Bold.svg#Perpetua-Bold"}) format("svg");
          }

          @font-face {
            font-family: "Perpetua";
            font-weight: 500;
            font-style: normal;
            src: url(${process.env.PUBLIC_URL +
              "/assets/fonts/Perpetua/Perpetua.eot"});
            src: url(${process.env.PUBLIC_URL +
              "/assets/fonts/Perpetua/Perpetua.eot?#iefix"}) format('embedded-opentype'),
                url(${process.env.PUBLIC_URL +
                  "/assets/fonts/Perpetua/Perpetua.woff2"}) format('woff2'),
                url(${process.env.PUBLIC_URL +
                  "/assets/fonts/Perpetua/Perpetua.woff"}) format('woff'),
                url(${process.env.PUBLIC_URL +
                  "/assets/fonts/Perpetua/Perpetua.ttf"}) format('truetype'),
                url(${process.env.PUBLIC_URL +
                  "/assets/fonts/Perpetua/Perpetua.svg#Perpetua"}) format('svg');
            
        }
        
          `}
        </style>
      </Helmet>
      <div
        className="cs-06-page-wrapper h-100 bg-img d-flex flex-column justify-content-between"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL +
            "/assets/img/backgrounds/coming-soon-06.jpg"})`
        }}
      >
        {/*====================  header ====================*/}
        <header className="cs-06-header space-pt--30 space-pb--30">
          <div className="container">
            <div className="row">
              <div className="col-4">
                {/* logo */}
                <div className="cs-06-logo">
                  <Link to={process.env.PUBLIC_URL + "/"}>
                    <img
                      src={
                        process.env.PUBLIC_URL + "/assets/img/logo/logo-06.png"
                      }
                      className="img-fluid"
                      alt=""
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/*====================  End of header  ====================*/}
        {/*====================  content ====================*/}
        <div className="cs-06-content">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 className="cs-06-content__title">
                  We are coming soon <br />
                  something new!!
                </h2>
                {/* countdown */}
                <div className="cs-06-countdown space-mt--50">
                  <Countdown
                    date={new Date("July 07, 2020 12:12:00")}
                    renderer={Renderer}
                  />
                </div>
                <div className="cs-06-subscription-wrapper space-mt--50">
                  {/* subscribe email */}
                  <SubscribeEmail mailchimpUrl="https://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====================  End of content  ====================*/}
        {/*====================  footer ====================*/}
        <footer className="cs-06-footer space-pt--25 space-pb--25">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 col-md-6">
                {/* copyright */}
                <div className="cs-06-copyright">
                  &copy; {new Date().getFullYear() + " "}
                  <a
                    href="https://hasthemes.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    HasThemes
                  </a>
                  , all rights reserved
                </div>
              </div>
              <div className="col-12 col-md-6">
                {/* social icons */}
                <ul className="cs-06-social-icons d-flex align-items-center justify-content-center justify-content-md-end">
                  <li>
                    <a
                      href="http://www.facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ReactSVG
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/img/icons/facebook-04.svg"
                        }
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://www.twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ReactSVG
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/img/icons/twitter-04.svg"
                        }
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://www.linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ReactSVG
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/img/icons/linkedin-04.svg"
                        }
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://www.youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ReactSVG
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/img/icons/youtube-04.svg"
                        }
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
        {/*====================  End of footer  ====================*/}
      </div>
    </Fragment>
  );
};

export default ComingSoon06;
