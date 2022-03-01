import React from 'react';
import { Button, Image } from 'react-bootstrap';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="py-5">
      <p className="title text-center">about us</p>
      <div className="dag">
        <Image src={require('../../asset/dag.png')} />
      </div>
      <p className="text2 text-center pb-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo ipsum{' '}
        <br />
        aliquet turpis elit elit natoque varius eget facilisi. Amet rhoncus
      </p>

      <div className="container d-flex align-items-center">
        <div className="row">
          <div className="col-md-6">
            <h3 className="title">What is cryptona?</h3>
            <p className="text2">
              cryptona is a private, decentralized cryptocurrency with open
              source code that allows everyone to take part in the Lymcoin
              network development. Privacy and security come naturally from
              using Lymcoin. The best solution for...
            </p>

            <ul className="text2">
              <li className="d-flex align-items-center">
                <span>Realtime Update</span>
              </li>
              <li className="d-flex align-items-center">
                <span>Excepteur sint occaecat deleniti</span>
              </li>
              <li className="d-flex align-items-center">
                <span>Corporis suscipit laboriosam cupid</span>
              </li>
              <li className="d-flex align-items-center">
                <span>Sollicitudin, lorem dolor fringilla sapien.</span>
              </li>
              <li className="d-flex align-items-center">
                <span>Pellentesque auctor nibh sit amet rhoncus.</span>
              </li>
              <li className="d-flex align-items-center">
                <span>Vivamus vulputate fermentum luctus nunc.</span>
              </li>
            </ul>

            <Button className="nav-btn">Read More</Button>
          </div>

          <div className="col-md-6">
            <Image
              className="w-100"
              src={require('../../asset/aboutusill.png')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
