import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ReactSVG } from "react-svg";
import Countdown from "react-countdown";
import Renderer from "../components/countdown/Renderer";
import SubscribeEmail from "../components/newsletter/SubscribeEmail";

const ComingSoon09 = () => {
  return (
    <Fragment>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        />
        <style>
          {`
            @font-face {
              font-family: "Rockwell Bold";
              font-weight: bold;
              font-style: normal;
          
              src: url(${process.env.PUBLIC_URL +
                "/assets/fonts/Rockwell-Bold/Rockwell-Bold.eot"});
              src: url(${process.env.PUBLIC_URL +
                "/assets/fonts/Rockwell-Bold/Rockwell-Bold.eot?#iefix"}) format("embedded-opentype"),
              url(${process.env.PUBLIC_URL +
                "/assets/fonts/Rockwell-Bold/Rockwell-Bold.woff2"}) format("woff2"),
              url(${process.env.PUBLIC_URL +
                "/assets/fonts/Rockwell-Bold/Rockwell-Bold.woff"}) format("woff"),
              url(${process.env.PUBLIC_URL +
                "/assets/fonts/Rockwell-Bold/Rockwell-Bold.ttf"}) format("truetype"),
              url(${process.env.PUBLIC_URL +
                "/assets/fonts/Rockwell-Bold/Rockwell-Bold.svg#Rockwell-Bold"}) format("svg");
          }

          @font-face {
            font-family: 'Rockwell';
            font-weight: normal;
            font-style: normal;
            src: url(${process.env.PUBLIC_URL +
              "/assets/fonts/Rockwell/Rockwell.eot"});
            src: url(${process.env.PUBLIC_URL +
              "/assets/fonts/Rockwell/Rockwell.eot?#iefix"}) format('embedded-opentype'),
                url(${process.env.PUBLIC_URL +
                  "/assets/fonts/Rockwell/Rockwell.woff2"}) format('woff2'),
                url(${process.env.PUBLIC_URL +
                  "/assets/fonts/Rockwell/Rockwell.woff"}) format('woff'),
                url(${process.env.PUBLIC_URL +
                  "/assets/fonts/Rockwell/Rockwell.ttf"}) format('truetype'),
                url(${process.env.PUBLIC_URL +
                  "/assets/fonts/Rockwell/Rockwell.svg#Rockwell"}) format('svg');
          }
          
          `}
        </style>
      </Helmet>
      <div
        className="cs-09-page-wrapper h-100 bg-img d-flex flex-column justify-content-between"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL +
            "/assets/img/backgrounds/coming-soon-09.jpg"})`
        }}
      >
        {/*====================  header ====================*/}
        <header className="cs-09-header space-pt--30 space-pb--30" />
        {/*====================  End of header  ====================*/}
        {/*====================  content ====================*/}
        <div className="cs-09-content">
          <div className="container">
            <div className="row">
              <div className="col-6 ml-auto mr-auto">
                {/* logo */}
                <div className="cs-09-logo text-center space-mb--35">
                  <Link to={process.env.PUBLIC_URL + "/"}>
                    <img
                      src={
                        process.env.PUBLIC_URL + "/assets/img/logo/logo-09.png"
                      }
                      className="img-fluid"
                      alt=""
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-10 ml-auto mr-auto">
                <h2 className="cs-09-content__title text-center">
                  WE ARE COMING SOON
                </h2>
                {/* countdown */}
                <div className="cs-09-countdown space-mt--50">
                  <Countdown
                    date={new Date("July 07, 2020 12:12:00")}
                    renderer={Renderer}
                  />
                </div>
                <div className="cs-09-subscription-wrapper space-mt--50 text-center">
                  {/* subscribe email */}
                  <SubscribeEmail mailchimpUrl="https://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====================  End of content  ====================*/}
        {/*====================  footer ====================*/}
        <footer className="cs-09-footer space-pt--25 space-pb--25">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12">
                {/* social icons */}
                <ul className="cs-09-social-icons d-flex align-items-center justify-content-center space-mb--30">
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
                {/* copyright */}
                <div className="cs-09-copyright text-center">
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
            </div>
          </div>
        </footer>
        {/*====================  End of footer  ====================*/}
      </div>
    </Fragment>
  );
};

export default ComingSoon09;
