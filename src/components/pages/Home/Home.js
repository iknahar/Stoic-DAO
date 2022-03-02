import React from 'react';
import './Home.css';
import { Container, Navbar, Nav, Image, Button } from 'react-bootstrap';
import LogoSec from '../LogoSec/LogoSec';
import AboutUs from '../AboutUs/AboutUs';
import Benefit from '../Benefit/Benefit';
import Footer from '../Footer/Footer';
import LatestBlog from '../LatestBlog/LatestBlog';
import ProductDetails from '../ProductDetails/ProductDetails';
import Expert from '../Expert/Expert';
import Trending from '../Trending/Trending';
import Token from '../Token/Token';
import Roadmap from '../Roadmap/Roadmap';
import Contact from '../Contact/Contact';
import Prices from '../Prices/Prices';

const Home = () => {
  return (
    <div>
      <div className="hero-bg">
      <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">
              <Image
                src={require('../../asset/logo.png')}
                style={{ width: '244.91px' }}
              />{' '}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#home">About</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#features">Product</Nav.Link>
                <Nav.Link href="#pricing">Roadmap</Nav.Link>
                <Nav.Link href="#pricing">Team</Nav.Link>
                <Nav.Link href="#pricing">Token</Nav.Link>
                <Nav.Link href="#pricing">Blog</Nav.Link>
                <Nav.Link href="#pricing">Contact</Nav.Link>
                <Button className="nav-btn">Buy Token</Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Hero section  */}
        <div className="content-bg">
          <small>Trade crypto like it's meant to be</small>
          <h1>
            Buy And sell <br /> Digital Currency
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo ipsum
            aliquet <br />
            turpis elit elit natoque varius eget facilisi. Amet rhoncus sed
            nulla tristique
            <br />
            aenean viverra urna nec. Dapibus nascetur amet lacinia et placerat
            nibh.
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
      <Expert />
      <Token />
      <Prices />
      <Trending />

      <LatestBlog />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
