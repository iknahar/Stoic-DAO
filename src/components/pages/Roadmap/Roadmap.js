import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import './Roadmap.css';

const Roadmap = () => {
  return (
    <div className='p-5'>
      <p className="title text-center">Roadmap to Success</p>
      <div className="dag">
        <Image src={require('../../asset/dag.png')} />
      </div>
      <p className="text2 text-center pb-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo ipsum{' '}
        <br />
        aliquet turpis elit elit natoque varius eget facilisi. Amet rhoncus
      </p>
      <div className="road-bg">
        <Container>
          <Row className='mt-5'>
            <Col lg={3} md={3} sm={3} className="text-center">
              <Image src={require('../../asset/roadmap/roadmap1.png')} className="negM" />
              <div className="text-center negM">
                <small className="sm1">Feb,2022</small>
                <h6>Platform Idea</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit.
                  Natoque viverra eget
                </p>
              </div>
            </Col>
            <Col lg={3} md={3} sm={3} className="text-center sm1">
              <Image src={require('../../asset/roadmap/roadmap2.png')} />
              <div className="text-center mt-4">
                <small>Feb,2022</small>

                <h6>Platform Idea</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit.
                  Natoque viverra eget
                </p>
              </div>
            </Col>
            <Col lg={3} md={3} sm={3} className="text-center">
              <Image src={require('../../asset/roadmap/roadmap3.png')} />
              <div className="text-center mt-4">
                <small>Feb,2022</small>

                <h6>Platform Idea</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit.
                  Natoque viverra eget
                </p>
              </div>
            </Col>
            <Col lg={3} md={3} sm={3} className="text-center sm1">
              <Image src={require('../../asset/roadmap/roadmap4.png')} />
              <div className="text-center mt-4">
                <small>Feb,2022</small>

                <h6>Platform Idea</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit.
                  Natoque viverra eget
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Roadmap;
