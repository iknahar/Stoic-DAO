import React from 'react';
import { Image } from 'react-bootstrap';
import './LogoSec.css';

const LogoSec = () => {
  return (
    <div className='logo-bg d-flex '>
      <div>
        <Image style={{width:'176.31px'}} src={require('../../asset/logo/Courage.png')} />
      </div>
      <div>
        <Image style={{width:'176.31px'}} src={require('../../asset/logo/Justice.png')} />
      </div>
      <div>
        <Image style={{width:'176.31px'}} src={require('../../asset/logo/Stoic DAO.png')} />
      </div>
      <div>
        <Image style={{width:'176.31px'}} src={require('../../asset/logo/Temperance.png')} />
      </div>
      <div>
        <Image style={{width:'176.31px'}} src={require('../../asset/logo/wisdom.png')} />
      </div>
    </div>
  );
};

export default LogoSec;
