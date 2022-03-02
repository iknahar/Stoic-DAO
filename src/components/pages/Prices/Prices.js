import React from 'react';
import {
  Button,
  ButtonGroup,
  Image,
} from 'react-bootstrap';
import './Prices.css';
import bitcoin from '../../asset/logicsection/bitcoin.svg';
import dash from '../../asset/logicsection/DASH.svg';
import ethereum from '../../asset/logicsection/ETHEREUM.svg';
import lite from '../../asset/logicsection/LITECOIN.svg';

const Prices = () => {
  const HandleResultBTC = (e) => {
    const itemText = document.getElementById('cryp');
    let cryptoText = 'BTC';
    itemText.innerText = cryptoText;
    const item = document.getElementById('result');
    let text = '15200.35';
    let textParse = parseFloat(text);
    item.innerText = textParse;
    return {
      textParse,
      item,
    };
  };
  const HandleResultETH = () => {
    const itemText = document.getElementById('cryp');
    let cryptoText = 'ETH';
    itemText.innerText = cryptoText;
    const item = document.getElementById('result');
    let text = '2950.45';
    let textParse = parseFloat(text);
    item.innerText = textParse;
    return textParse;
  };
  const HandleResultXMR = () => {
    const itemText = document.getElementById('cryp');
    let cryptoText = 'XMR';
    itemText.innerText = cryptoText;
    const item = document.getElementById('result');
    let text = '179.35';
    let textParse = parseFloat(text);
    item.innerText = textParse;
    return textParse;
  };
  const HandleResultZEC = () => {
    const itemText = document.getElementById('cryp');
    let cryptoText = 'ZEC';
    itemText.innerText = cryptoText;
    const item = document.getElementById('result');
    let text = '119.00';
    let textParse = parseFloat(text);
    item.innerText = textParse;
    return textParse;
  };
  const HandleResultETC = () => {
    const itemText = document.getElementById('cryp');
    let cryptoText = 'ETC';
    itemText.innerText = cryptoText;
    const item = document.getElementById('result');
    let text = '11.22';
    let textParse = parseFloat(text);
    item.innerText = textParse;
    return textParse;
  };
  const HandleResultDASH = () => {
    const itemText = document.getElementById('cryp');
    let cryptoText = 'DASH';
    itemText.innerText = cryptoText;
    const item = document.getElementById('result');
    let text = '98.46';
    let textParse = parseFloat(text);
    item.innerText = textParse;
    return textParse;
  };
  const HandleResultLTC = () => {
    const itemText = document.getElementById('cryp');
    let cryptoText = 'LTC';
    itemText.innerText = cryptoText;
    const item = document.getElementById('result');
    let text = '113.11';
    let textParse = parseFloat(text);
    item.innerText = textParse;
    return {
      textParse,
      cryptoText,
    };
  };

  const handleCalc = () => {
    const field = document.getElementById('input-field');
    let fieldValue = field.value;
    let fieldparse = parseFloat(fieldValue);
    let getItem = HandleResultBTC();
    let getNum = getItem.textParse;
    let result = getNum * fieldparse;
    let changabelText = getItem.item;
    let setText = result;
    changabelText.innerText = setText;
  };
  /*  const handleCalc=()=>{
        const field=document.getElementById('input-field');
        let fieldValue=field.value ;
        let fieldparse=parseFloat(fieldValue);
        let getItem=HandleResult();
        let result=getItem * fieldparse;
        console.log(result);
    }
    const handleCalc=()=>{
        const field=document.getElementById('input-field');
        let fieldValue=field.value ;
        let fieldparse=parseFloat(fieldValue);
        let getItem=HandleResultBTC();
        let result=getItem * fieldparse;
        console.log(result);
    }
    const handleCalc=()=>{
        const field=document.getElementById('input-field');
        let fieldValue=field.value ;
        let fieldparse=parseFloat(fieldValue);
        let getItem=HandleResultBTC();
        let result=getItem * fieldparse;
        console.log(result);
    }
    const handleCalc=()=>{
        const field=document.getElementById('input-field');
        let fieldValue=field.value ;
        let fieldparse=parseFloat(fieldValue);
        let getItem=HandleResultBTC();
        let result=getItem * fieldparse;
        console.log(result);
    }
    const handleCalc=()=>{
        const field=document.getElementById('input-field');
        let fieldValue=field.value ;
        let fieldparse=parseFloat(fieldValue);
        let getItem=HandleResultBTC();
        let result=getItem * fieldparse;
        console.log(result);
    }
    const handleCalc=()=>{
        const field=document.getElementById('input-field');
        let fieldValue=field.value ;
        let fieldparse=parseFloat(fieldValue);
        let getItem=HandleResultBTC();
        let result=getItem * fieldparse;
        console.log(result);
    } */
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
      <div className="m-5  d-flex justify-content-center flex-wrap">
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

      <div className="d-flex border p-4 justify-content-between align-items-center flex-wrap">
        <ButtonGroup aria-label="Basic example">
          <Button className="btn-group1 active" onClick={HandleResultBTC}>
            BTC
          </Button>
          <Button className="btn-group1" onClick={HandleResultETH}>
            ETH
          </Button>
          <Button className="btn-group1" onClick={HandleResultXMR}>
            XMR
          </Button>
          <Button className="btn-group1" onClick={HandleResultZEC}>
            ZEC
          </Button>
          <Button className="btn-group1" onClick={HandleResultETC}>
            ETC
          </Button>
          <Button className="btn-group1" onClick={HandleResultDASH}>
            DASH
          </Button>
          <Button className="btn-group1" onClick={HandleResultLTC}>
            LTC
          </Button>
        </ButtonGroup>
        {/* 
        <InputGroup style={{ width: '160px' }} id='input-field'>
          <FormControl
            aria-label="Default"
            
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup> */}
        <input
          type="text"
          style={{ width: '160px' }}
          placeholder="Enter Amount"
          id="input-field"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />

        <ButtonGroup aria-label="Basic example">
          <Button className="btn-group1">EUR</Button>
          <Button className="btn-group1">USD</Button>
        </ButtonGroup>

        <div className="pe-3">
          <Button className="nav-btn" onClick={handleCalc}>
            Convert
          </Button>
        </div>
      </div>

      {/* ---------Main Calculation Result---------------- */}
      <h2 className="CalcRes ">
        <span>
          1 <span id="cryp"> BTC</span> =$
        </span>{' '}
        <span id="result">15200.35</span>
      </h2>

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
          <p className="cardLtext1 m-1">Best Price of 1 LITECOIN</p>
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
