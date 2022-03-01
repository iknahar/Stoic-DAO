import React from 'react';
import { Container, Image } from 'react-bootstrap';

const Trending = () => {
  return (
    <div className='m-5'>
      <p className="title text-center">Cryptocurrency Trading Updates</p>
      <div className="dag">
        <Image src={require('../../asset/dag.png')} />
      </div>
      <p className="text2 text-center pb-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo ipsum{' '}
        <br />
        aliquet turpis elit elit natoque varius eget facilisi. Amet rhoncus
      </p>
      <Container>
      <div className='w-75 my-5'>
          <Image src={require('../../asset/chart.png')} alt='' />
      </div>
      </Container>
    </div>
  );
};

export default Trending;
