import React from 'react';
import Button from '@material-ui/core/Button';

import LogoPng from '../../assets/logo.png';
import './styles.scss';

function Header(props) {
  return (
    <div className='header-component'>
        <Button onClick={() => props.history.push('/')}>
            <img src={LogoPng} height='auto' width='100px'/>
        </Button>
    </div>
  );
}

export default Header;
