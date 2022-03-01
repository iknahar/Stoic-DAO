import React from 'react';
import { Container, Image } from 'react-bootstrap';
import './Token.css';

const Token = () => {
  return (
    <div className='token-bg'>
      <div className='pt-5'>
      <p className="title text-center">Token Distribution</p>
      <div className="dag">
        <Image src={require('../../asset/dag.png')} />
      </div>
      <p className="text2 text-center pb-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo ipsum{' '}
        <br />
        aliquet turpis elit elit natoque varius eget facilisi. Amet rhoncus
      </p>
      <Container>
        <div className="my-5 text-center">
          <Image src={require('../../asset/token.png')} alt="" className='w-65 pb-5' />
        </div>
      </Container>
      </div>
    </div>
  );
};

export default Token;
