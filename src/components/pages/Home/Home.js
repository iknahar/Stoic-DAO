import React from 'react';
import './Home.css';
import { Image, Button, Navbar, Container } from 'react-bootstrap';
import LogoSec from '../LogoSec/LogoSec';
import AboutUs from '../AboutUs/AboutUs';
import Benefit from '../Benefit/Benefit';
import Footer from '../Footer/Footer';
import LatestBlog from '../LatestBlog/LatestBlog';
import ProductDetails from '../ProductDetails/ProductDetails';
import Token from '../Token/Token';
import Roadmap from '../Roadmap/Roadmap';
import Contact from '../Contact/Contact';
import Prices from '../Prices/Prices';
import { Nav } from 'react-bootstrap';

const Home = () => {
  return (
    <div>
      <div className="hero-bg ">
        {/* <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container">
            <a class="navbar-brand" href="/">
              <Image src={require('../../asset/logo.png')} />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <a class="nav-link active" aria-current="page" href="/">
                  Home
                </a>
                <a class="nav-link" href="/">
                  Features
                </a>
                <a class="nav-link" href="/">
                  About
                </a>
                <a class="nav-link" href="/">
                  Pricing
                </a>
                <a class="nav-link" href="/">
                  Prduct
                </a>
                <a class="nav-link" href="/">
                  Roadmap
                </a>
                <a class="nav-link" href="/">
                  Token
                </a>
                <a class="nav-link" href="/">
                  Team
                </a>
                <a class="nav-link" href="/">
                  Blog
                </a>
                <a class="nav-link" href="/">
                  Contact
                </a>
                <Button className="nav-btn ms-3">Buy Token</Button>
              </div>
            </div>
            </div>
        </nav> */}

        {/* ---------------- react Navbar ---------------- */}

        <Navbar
          expand="lg"
          className="navbar navbar-expand-lg"
        >
          <Container>
            <div className="logo-div">
              <Navbar.Brand href="#home">
                <Image
                  className="pe-3"
                  src={require('../../asset/logo.png')}
                  style={{ height: '49px' }}
                />{' '}
              </Navbar.Brand>
            </div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav >
                <Nav.Link className="navlink" href="#home">Home</Nav.Link>
                <Nav.Link className="navlink" href="#home">Home</Nav.Link>
                <Nav.Link className="navlink" href="#home">About</Nav.Link>
                <Nav.Link className="navlink" href="#features">Features</Nav.Link>
                <Nav.Link className="navlink" href="#features">Product</Nav.Link>
                <Nav.Link className="navlink" href="#pricing">Roadmap</Nav.Link>
                <Nav.Link className="navlink" href="#pricing">Team</Nav.Link>
                <Nav.Link className="navlink" href="#pricing">Token</Nav.Link>
                <Nav.Link className="navlink" href="#pricing">Blog</Nav.Link>
                <Nav.Link className="navlink" href="#pricing">Contact</Nav.Link>
              <div className="ms-5">
              <Button className="nav-btn">Buy Token</Button>
              </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Hero section  */}
        <div className="container content-bg">
          <small className="text2 mt-1">
            Trade crypto like it's meant to be
          </small>
          <h1 className="title1 my-4">
            <b>
              Buy And sell <br /> Digital Currency
            </b>
          </h1>
          <p className="text2 my-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
            Leo ipsum aliquet turpis elit elit natoque varius eget facilisi.
            <br /> Amet rhoncus sed nulla tristique
            <br />
            aenean viverra urna nec. Dapibus nascetur amet <br />
            lacinia et placerat nibh.
          </p>
          <div className="d-flex">
            <div className="pe-3">
              <Button className="nav-btn">Get Started</Button>
            </div>
            <div>
              <Image
                src={require('../../asset/video-button.png')}
                style={{ width: '41px', height: '41px' }}
              />
              &nbsp; <span>Watch Video</span>
            </div>
          </div>
        </div>
      </div>
      <LogoSec />

      <AboutUs />
      <Benefit />
      <ProductDetails />
      <Roadmap />
      <Token />
      <Prices />
      <LatestBlog />
      <Contact />

      <Footer />
    </div>
  );
};

export default Home;
