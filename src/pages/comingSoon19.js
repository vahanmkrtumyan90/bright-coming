import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ReactSVG } from "react-svg";
import SubscribeEmail from "../components/newsletter/SubscribeEmail";
import CircleCountdown from "../components/countdown/CircleCountdown";

const ComingSoon19 = () => {
  return (
    <Fragment>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Roboto:wght@400;500&display=swap"
          rel="stylesheet"
        />

        <style>
          {`
            .cs-19-countdown .countdown-item{
              background-image: url(${process.env.PUBLIC_URL +
                "/assets/img/icons/circle.svg"})
            }
          `}
        </style>
      </Helmet>
      <div
        className="cs-19-page-wrapper h-100 bg-img d-flex flex-column justify-content-between"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL +
            "/assets/img/backgrounds/coming-soon-19.jpg"})`
        }}
      >
        {/*====================  header ====================*/}
        <header className="cs-19-header space-pt--30 space-pb--30" />
        {/*====================  End of header  ====================*/}
        {/*====================  content ====================*/}
        <div className="cs-19-content">
          <div className="container">
            <div className="row">
              <div className="col-6 ml-auto mr-auto">
                {/* logo */}
                <div className="cs-19-logo text-center space-mb--35">
                  <Link to={process.env.PUBLIC_URL + "/"}>
                    <img
                      src={
                        process.env.PUBLIC_URL + "/assets/img/logo/logo-19.png"
                      }
                      className="img-fluid"
                      alt=""
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 ml-auto mr-auto">
                <h2 className="cs-19-content__title text-center space-mb--20">
                  WE ARE COMING VERY SOON
                </h2>
                <p className="cs-19-content__text text-center space-mb--50">
                  Army are the broken pieces of the artist and director Lucas
                  Camargo. He haunts coffee shops with his sketchbook, cursed to
                  draw obsessively.
                </p>
                {/* countdown */}
                <div className="cs-19-countdown">
                  <CircleCountdown
                    timeTillDate="07 07 2020, 6:00 am"
                    timeFormat="MM DD YYYY, h:mm a"
                  />
                </div>
                <div className="cs-19-subscription-wrapper space-mt--70 text-center">
                  {/* subscribe email */}
                  <SubscribeEmail mailchimpUrl="https://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====================  End of content  ====================*/}
        {/*====================  footer ====================*/}
        <footer className="cs-19-footer space-pt--25 space-pb--25">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12">
                {/* social icons */}
                <ul className="cs-19-social-icons d-flex align-items-center justify-content-center space-mb--30">
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
                <div className="cs-19-copyright text-center">
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

export default ComingSoon19;
