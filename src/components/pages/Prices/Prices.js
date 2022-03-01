import React from 'react';
import {
  Button,
  ButtonGroup,
  Col,
  Container,
  FormControl,
  Image,
  Row,
  InputGroup,
} from 'react-bootstrap';
import './Prices.css';
import bitcoin from '../../asset/logicsection/bitcoin.svg';
import dash from '../../asset/logicsection/DASH.svg';
import ethereum from '../../asset/logicsection/ETHEREUM.svg';
import lite from '../../asset/logicsection/LITECOIN.svg';

const Prices = () => {
  return (
    <div className="container mb-5">
      <p className="title text-center">Find the Best Cryptocurrency Prices</p>
      <div className="dag">
        <Image src={require('../../asset/dag.png')} />
      </div>
      <p className="text2 text-center pb-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo ipsum{' '}
        <br />
        aliquet turpis elit elit natoque varius eget facilisi. Amet rhoncus
      </p>
      <div className="m-5  d-flex justify-content-center">
        <div>
          <a href="/" className="text-decoration-none text-dark pe-5">
            BUYING RATE
          </a>
          <hr className="w-20" />
        </div>
        <div>
          <a href="/" className="text-decoration-none text-dark ps-5">
            SELLING RATE
          </a>
          <hr className="w-20 ms-5" />
        </div>
      </div>

      {/* ---------Main Calculation Part Starts---------------- */}

      <div className="d-flex border p-4 justify-content-between align-items-center">
        <ButtonGroup aria-label="Basic example">
          <Button className="btn-group1">BTC</Button>
          <Button className="btn-group1">ETH</Button>
          <Button className="btn-group1">XMR</Button>
          <Button className="btn-group1">ZEC</Button>
          <Button className="btn-group1">ETC</Button>
          <Button className="btn-group1">DASH</Button>
          <Button className="btn-group1">LTC</Button>
        </ButtonGroup>

        <InputGroup className="formstyle" style={{ width: '160px' }}>
          <FormControl
            aria-label="Default"
            placeholder="Enter Amount"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>

        <ButtonGroup aria-label="Basic example">
          <Button className="btn-group1">EUR</Button>
          <Button className="btn-group1">USD</Button>
        </ButtonGroup>

        <div className="pe-3">
          <Button className="nav-btn">Convert</Button>
        </div>
      </div>

      {/* ---------Main Calculation Result---------------- */}
      <h2 className="CalcRes">1 btc = $15,200.36</h2>

      {/* ---------Cards---------------- */}
     
      <div className="d-flex justify-content-between my-5">

           {/* ---------Bitcoin Card---------------- */}

        <div className="benefit-div p-3 m-3 text-center">
          <img src={bitcoin} alt="" />
          <p className="cardLprice mt-3">15,025.00</p>
          <p className="cardLtext1 m-1">Best Price of 1 bitcoin</p>
          <p className="cardLtext2">FOUND AT KRAEN</p>
          <svg
            width="41"
            height="23"
            viewBox="0 0 41 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.89639 13.1674H34.7928L28.8171 19.1432C27.1006 20.8596 29.6753 23.4342 31.3918 21.7178L36.834 16.267L40.467 12.6283C41.1711 11.92 41.1711 10.7761 40.467 10.0678L31.3918 0.981955C31.0465 0.627152 30.5712 0.428074 30.0761 0.432192C28.4415 0.432397 27.6394 2.42328 28.8171 3.55673L34.807 9.5325H2.80241C0.285053 9.6574 0.473013 13.2927 2.89639 13.1674Z"
              fill="#49496F"
            />
          </svg>
        </div>
           {/* ---------Ethereum Card---------------- */}

        <div className="benefit-div p-3 m-3 text-center">
          <img src={ethereum} alt="" />
          <p className="cardLprice mt-3">25,524.00</p>
          <p className="cardLtext1 m-1">Best Price of 1 ETHEREUM</p>
          <p className="cardLtext2">FOUND AT KRAEN</p>
          <svg
            width="41"
            height="23"
            viewBox="0 0 41 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.89639 13.1674H34.7928L28.8171 19.1432C27.1006 20.8596 29.6753 23.4342 31.3918 21.7178L36.834 16.267L40.467 12.6283C41.1711 11.92 41.1711 10.7761 40.467 10.0678L31.3918 0.981955C31.0465 0.627152 30.5712 0.428074 30.0761 0.432192C28.4415 0.432397 27.6394 2.42328 28.8171 3.55673L34.807 9.5325H2.80241C0.285053 9.6574 0.473013 13.2927 2.89639 13.1674Z"
              fill="#49496F"
            />
          </svg>
        </div>
           {/* --------- LITECOIN Card---------------- */}

        <div className="benefit-div p-3 m-3 text-center">
          <img src={lite} alt="" />
          <p className="cardLprice mt-3">25,000.00</p>
          <p className="cardLtext1 m-1">Best Price of 1  LITECOIN</p>
          <p className="cardLtext2">FOUND AT KRAEN</p>
          <svg
            width="41"
            height="23"
            viewBox="0 0 41 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.89639 13.1674H34.7928L28.8171 19.1432C27.1006 20.8596 29.6753 23.4342 31.3918 21.7178L36.834 16.267L40.467 12.6283C41.1711 11.92 41.1711 10.7761 40.467 10.0678L31.3918 0.981955C31.0465 0.627152 30.5712 0.428074 30.0761 0.432192C28.4415 0.432397 27.6394 2.42328 28.8171 3.55673L34.807 9.5325H2.80241C0.285053 9.6574 0.473013 13.2927 2.89639 13.1674Z"
              fill="#49496F"
            />
          </svg>
        </div>
           {/* ---------DASH Card---------------- */}

        <div className="benefit-div p-3 m-3 text-center">
          <img src={dash} alt="" />
          <p className="cardLprice mt-3">25,524.00</p>
          <p className="cardLtext1 m-1">Best Price of 1 DASH</p>
          <p className="cardLtext2">FOUND AT KRAEN</p>
          <svg
            width="41"
            height="23"
            viewBox="0 0 41 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.89639 13.1674H34.7928L28.8171 19.1432C27.1006 20.8596 29.6753 23.4342 31.3918 21.7178L36.834 16.267L40.467 12.6283C41.1711 11.92 41.1711 10.7761 40.467 10.0678L31.3918 0.981955C31.0465 0.627152 30.5712 0.428074 30.0761 0.432192C28.4415 0.432397 27.6394 2.42328 28.8171 3.55673L34.807 9.5325H2.80241C0.285053 9.6574 0.473013 13.2927 2.89639 13.1674Z"
              fill="#49496F"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Prices;
