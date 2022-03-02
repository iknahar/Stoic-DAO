import React from 'react';
import { Image } from 'react-bootstrap';
import './LogoSec.css';

const LogoSec = () => {
  return (
    <div className='logo-bg d-flex p-3 justify-content-md-center flex-wrap'>
      <div className='p-3'>
        <Image style={{width:'85px'}} src={require('../../asset/logonew/Courage.png')} />
        <span className='logotext'>Courage</span>
      </div>
      <div className='p-3'>
        <Image style={{width:'75px'}} src={require('../../asset/logonew/Justice.png')} />
        <span className='logotext'>Justice</span>
      </div>
      <div className='p-3'>
        <Image style={{width:'75px'}} src={require('../../asset/logonew/Stoic DAO.png')} />
        <span className='logotext'>Stoic DAO</span>
      </div>
      <div className='p-3'>
        <Image style={{width:'75px'}} src={require('../../asset/logonew/Temperance.png')} />
        <span className='logotext'>Temperance</span>
      </div>
      <div className='p-3'>
        <Image style={{width:'75px'}} src={require('../../asset/logonew/wisdom.png')} />
        <span className='logotext'>Courage</span>
      </div>
    </div>
  );
};

export default LogoSec;
