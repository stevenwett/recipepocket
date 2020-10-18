import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import homeCard from '../images/home-card.svg';

class Welcome extends Component {
  componentDidMount = () => {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <Container className="view welcome">
        <img className="home-card-1" src={ homeCard } alt="" />
        <img className="home-card-2" src={ homeCard } alt="" />
        <Row>
          <Col sm={12} md={7} lg={5}>
            <h1 className="greetings-line">Organize your favorite recipes all in one place</h1>
            <p>Recipepocket is a super simple, centralized storage place for your most loved recipes.</p>
            <Link to="/signup" className="btn btn-primary">Get Started</Link>
            <Link to="/signin" className="btn btn-outline-primary">Sign In</Link>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={7} lg={6}>
            <Row className="welcome-icons">
              <Col sm={4} className="text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="88"
                      height="88"
                      viewBox="0 0 88 88"
                    >
                      <circle
                        cx="44"
                        cy="44"
                        r="41"
                        fill="none"
                        stroke="#387480"
                        strokeWidth="6"
                      ></circle>
                      <path
                        fill="#f16060"
                        fillRule="evenodd"
                        d="M55.72 18.75l-13.1 10.18a1.21 1.21 0 00-.22 1.68 1.19 1.19 0 001.67.21l10.38-8.06L65 55.4l-27.12-.75L33 39.46l4.34-3.38a1.19 1.19 0 10-1.45-1.88L31 38l-8.87 2.91a6 6 0 00-3.84 7.53l2.48 7.72a5.92 5.92 0 007.49 3.81h.11l10.36 13.08a2.52 2.52 0 002.74.83L47.16 72a2.54 2.54 0 001.63-1.67 2.51 2.51 0 00-.43-2.29l-8.63-11 28.58.79a3.55 3.55 0 001.21-.18 3.6 3.6 0 002.31-4.52L61.31 20.46a3.58 3.58 0 00-5.59-1.71zM30.54 59.67l5.81-1.9L46 70.35a.13.13 0 010 .12.18.18 0 01-.08.09l-5.55 1.82a.11.11 0 01-.14 0z"
                      ></path>
                      <path
                        fill="#387480"
                        d="M14.891 72.87l57.983-57.983 4.243 4.243-57.983 57.983z"
                      ></path>
                    </svg>
                <p>Avoid the Ads</p>
              </Col>
              <Col sm={4} className="text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="60"
                      height="82"
                      viewBox="0 0 60 82"
                    >
                      <path
                        fill="#387480"
                        fillRule="evenodd"
                        d="M57.81 0H1.56A1.56 1.56 0 000 1.56v32.81h59.38V1.56A1.57 1.57 0 0057.81 0zM6.25 75H3.12v4.69a1.57 1.57 0 001.57 1.56h50a1.56 1.56 0 001.56-1.56V75zM3.13 37.5H0v32.81a1.56 1.56 0 001.56 1.56h56.25a1.57 1.57 0 001.57-1.56V37.5z"
                      ></path>
                      <rect
                        width="21"
                        height="6"
                        x="19.5"
                        y="44.5"
                        fill="#f16060"
                        fillRule="evenodd"
                        stroke="#fff"
                        strokeWidth="3"
                        rx="2"
                      ></rect>
                      <rect
                        width="21"
                        height="6"
                        x="19.5"
                        y="7.5"
                        fill="#f16060"
                        fillRule="evenodd"
                        stroke="#fff"
                        strokeWidth="3"
                        rx="2"
                      ></rect>
                    </svg>
                <p>Centralize Storage</p>
              </Col>
              <Col sm={4} className="text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="66"
                      height="88"
                      viewBox="0 0 66 88"
                    >
                      <rect
                        width="64"
                        height="86"
                        x="1"
                        y="1"
                        fill="#fff"
                        stroke="#387480"
                        strokeWidth="2"
                        rx="10"
                      ></rect>
                      <path
                        fill="#387480"
                        fillRule="evenodd"
                        d="M10 0h46a10 10 0 0110 10v23H0V10A10 10 0 0110 0z"
                      ></path>
                      <path fill="#f16060" d="M7 40h25v4H7z"></path>
                      <path fill="#d0c8cd" d="M7 60h50v8H7zm0-11h50v8H7zm0 22h50v8H7z"></path>
                    </svg>
                <p>Simple Layout</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Welcome;
