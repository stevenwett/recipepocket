import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import homeCard from '../images/home-card.svg';

class Welcome extends Component {
  render() {
    return (
      <Container className="view welcome">
        <img className="home-card-1" src={ homeCard } />
        <img className="home-card-2" src={ homeCard } />
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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88">
                  <circle cx="44" cy="44" r="41" fill="none" stroke="#387480" stroke-width="6"/>
                  <path fill="#f16060" fill-rule="evenodd" d="M55.72 18.75l-13.1 10.18a1.21 1.21 0 00-.22 1.68 1.19 1.19 0 001.67.21l10.38-8.06L65 55.4l-27.12-.75L33 39.46l4.34-3.38a1.19 1.19 0 10-1.45-1.88L31 38l-8.87 2.91a6 6 0 00-3.84 7.53l2.48 7.72a5.92 5.92 0 007.49 3.81h.11l10.36 13.08a2.52 2.52 0 002.74.83L47.16 72a2.54 2.54 0 001.63-1.67 2.51 2.51 0 00-.43-2.29l-8.63-11 28.58.79a3.55 3.55 0 001.21-.18 3.6 3.6 0 002.31-4.52L61.31 20.46a3.58 3.58 0 00-5.59-1.71zM30.54 59.67l5.81-1.9L46 70.35a.13.13 0 010 .12.18.18 0 01-.08.09l-5.55 1.82a.11.11 0 01-.14 0z"/>
                  <path fill="#387480" d="M14.8911255 72.87005769l57.98275605-57.98275606 4.2426407 4.24264068-57.98275607 57.98275606z"/>
                </svg>
                <p>Avoid the Ads</p>
              </Col>
              <Col sm={4} className="text-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 82" height="82" width="60">
                  <path d="M57.81 0H1.56A1.56 1.56 0 000 1.56v32.81h59.38V1.56A1.57 1.57 0 0057.81 0z" fill="#387480" fill-rule="evenodd" />
                  <path d="M6.25 75H3.12v4.69a1.57 1.57 0 001.57 1.56h50a1.56 1.56 0 001.56-1.56V75z" fill="#387480" fill-rule="evenodd" />
                  <path d="M3.13 37.5H0v32.81a1.56 1.56 0 001.56 1.56h56.25a1.57 1.57 0 001.57-1.56V37.5z" fill="#387480" fill-rule="evenodd" />
                  <rect width="21" height="6" x="19.5" y="44.5" fill="#f16060" fill-rule="evenodd" stroke="#ffffff" stroke-width="3px" rx="2"/>
                  <rect width="21" height="6" x="19.5" y="7.5" fill="#f16060" fill-rule="evenodd" stroke="#ffffff" stroke-width="3px" rx="2"/>
                </svg>
                <p>Centralize Storage</p>
              </Col>
              <Col sm={4} className="text-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66 88" width="66" height="88">
                  <rect width="64" height="86" x="1" y="1" fill="#fff" stroke="#387480" stroke-width="2" rx="10"/>
                  <path fill="#387480" fill-rule="evenodd" d="M10 0h46a10 10 0 0110 10v23H0V10A10 10 0 0110 0z"/>
                  <path fill="#f16060" d="M7 40h25v4H7z"/>
                  <path d="M7 60h50v8H7zM7 49h50v8H7zM7 71h50v8H7z" fill="#d0c8cd"/>
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
