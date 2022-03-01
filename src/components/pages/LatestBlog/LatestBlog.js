import React from 'react';
import { Image } from 'react-bootstrap';

const LatestBlog = () => {
  return (
    <div className="container mb-5">
      <p className="title text-center">Latest Blog Posts on Cryptocurrency</p>
      <div className="dag">
        <Image src={require('../../asset/dag.png')} />
      </div>
      <p className="text2 text-center pb-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo ipsum{' '}
        <br />
        aliquet turpis elit elit natoque varius eget facilisi. Amet rhoncus
      </p>

      <div className='d-flex justify-content-between mx-5'>
      <div className="card " style={{ width: '320px' }}>
        <Image
          src={require('../../asset/card/blenderfileeblenderproject-2curencies-symboltree-currencies-moneybag-symbols-coinsblend.png')}
          alt="card image"
        />
        <div className="card-body">
          <small>23 Feb 2022</small>
          <p className="card-text pt-3">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <svg
            width="41"
            height="23"
            viewBox="0 0 41 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.89639 13.1674H34.7928L28.8171 19.1432C27.1006 20.8596 29.6753 23.4342 31.3918 21.7178L36.834 16.267L40.467 12.6283C41.1711 11.92 41.1711 10.7761 40.467 10.0678L31.3918 0.981955C31.0465 0.627152 30.5712 0.428074 30.0761 0.432192C28.4415 0.432397 27.6394 2.42328 28.8171 3.55673L34.807 9.5325H2.80241C0.285053 9.6574 0.473013 13.2927 2.89639 13.1674Z"
              fill="#4FD3D3"
            />
          </svg>
        </div>
      </div>
      <div className="card" style={{ width: '320px' }}>
        <Image
          src={require('../../asset/card/bit-coin-icon-design-3d-rendering.png')}
          alt="card image"
        />
        <div className="card-body">
          <small>23 Feb 2022</small>
          <p className="card-text pt-3">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <svg
            width="41"
            height="23"
            viewBox="0 0 41 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.89639 13.1674H34.7928L28.8171 19.1432C27.1006 20.8596 29.6753 23.4342 31.3918 21.7178L36.834 16.267L40.467 12.6283C41.1711 11.92 41.1711 10.7761 40.467 10.0678L31.3918 0.981955C31.0465 0.627152 30.5712 0.428074 30.0761 0.432192C28.4415 0.432397 27.6394 2.42328 28.8171 3.55673L34.807 9.5325H2.80241C0.285053 9.6574 0.473013 13.2927 2.89639 13.1674Z"
              fill="#4FD3D3"
            />
          </svg>
        </div>
      </div>
      <div className="card" style={{ width: '320px' }}>
        <Image
          src={require('../../asset/card/hashtag-coin-raining-crypto-umbrella-abundant-wealth-isolated-3d-illusration-render.png')}
          alt="card image"
        />
        <div className="card-body">
          <small>23 Feb 2022</small>
          <p className="card-text pt-3">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <svg
            width="41"
            height="23"
            viewBox="0 0 41 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.89639 13.1674H34.7928L28.8171 19.1432C27.1006 20.8596 29.6753 23.4342 31.3918 21.7178L36.834 16.267L40.467 12.6283C41.1711 11.92 41.1711 10.7761 40.467 10.0678L31.3918 0.981955C31.0465 0.627152 30.5712 0.428074 30.0761 0.432192C28.4415 0.432397 27.6394 2.42328 28.8171 3.55673L34.807 9.5325H2.80241C0.285053 9.6574 0.473013 13.2927 2.89639 13.1674Z"
              fill="#4FD3D3"
            />
          </svg>
        </div>
      </div>
      </div>
    </div>
  );
};

export default LatestBlog;
