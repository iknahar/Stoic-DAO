import React from 'react';
import { Button, Image } from 'react-bootstrap';
import './ProductDetails.css';

const ProductDetails = () => {
  return (
    <div className='mb-5'>
      <p className="title text-center">Product Details</p>
      <div className="dag">
        <Image src={require('../../asset/dag.png')} />
      </div>
      <p className="text2 text-center pb-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo ipsum{' '}
        <br />
        aliquet turpis elit elit natoque varius eget facilisi. Amet rhoncus
      </p>
      {/* tab section  */}
      <div className="m-5  d-flex justify-content-center">
        <div>
          <a href="/" className="text-decoration-none text-dark pe-5">
            One
          </a>
          <hr className="w-20" />
        </div>
        <div>
          <a href="/" className="text-decoration-none text-dark ps-5">
            Two
          </a>
          <hr className="w-20 ms-5" />
        </div>
        <div>
          <a href="/" className="text-decoration-none text-dark ps-5">
            Three
          </a>
          <hr className="w-20 ms-5" />
        </div>
      </div>
      <div className="container d-flex justify-content-center">
        <div className="row">
          <div className="col-md-6">
            <h3 className="title">
              Quality management system QMS software solution
            </h3>
            <p className="text2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio
              ipsum proin sagittis consectetur nisi at dolor. Pharetra maecenas
              est nibh egestas vitae malesuada tempor nam. Natoque enim, in
              molestie nisl. Mauris diam volutpat urna sed luctus sem a
              consequat... <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio
              ipsum proin sagittis consectetur nisi at dolor...
            </p>

            <Button className="nav-btn">Read More</Button>
          </div>

          <div className="col-md-6">
            <Image
              className="w-100"
              src={require('../../asset/Group 8177.png')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
