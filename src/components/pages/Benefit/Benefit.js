import React from 'react';
import { Image } from 'react-bootstrap';
import './Benefit.css';

const benefit = () => {
  return (
    <div className="container mb-5">
      <p className="title text-center">Benefits of Using Our Solution</p>
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
            Business
          </a>
          <hr className="w-20" />
        </div>
        <div>
          <a href="/" className="text-decoration-none text-dark ps-5">
            Menu
          </a>
          <hr className="w-20 ms-5" />
        </div>
      </div>
      <div>
        <div className='d-flex justify-content-between flex-wrap'>
          <div className="benefit-div p-3 m-3 text-center" style={{backgroundColor:'#0A164B',color:'white'}}>
            <img src={require('../../asset/Vector (1).png')} alt='' />
            <p style={{color:'#9683DE'}}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit Leo ipsum
              aliquet turpis elit elit natoque varius eget facilisi. Amet
              rhoncus
            </p>
            <hr></hr>
            <h6>SMART MANAGEMENT</h6>
          </div>
          <div className="benefit-div p-3 m-3 text-center">
            <img src={require('../../asset/Vector (2).png')} alt='' />
            <hr></hr>
            <h6>Ethereum Platform</h6>
          </div>
          <div className="benefit-div p-3 m-3 text-center">
          <img src={require('../../asset/Union (1).png')} alt='' />
            <hr></hr>
            <h6>TRANSPARENCY</h6>
          </div>
          <div className="benefit-div p-3 m-3 text-center">
          <img src={require('../../asset/Group (3).png')} alt='' />
            <hr></hr>
            <h6>COMPLIANCE</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default benefit;
