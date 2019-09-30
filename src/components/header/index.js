import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

import LogoPng from '../../assets/logo.png';
import './styles.scss';

function Header(props) {
  console.log(props)
  return (
      <div className='header-component'>
        <Link to="/staging">
          <Button>
              <img src={LogoPng} height='auto' width='100px'alt='logo' />
          </Button>
        </Link>
      </div>
  );
}

export default Header;
