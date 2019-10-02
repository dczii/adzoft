import React from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';

import Icon from '@mdi/react'
import { mdiXboxControllerMenu } from '@mdi/js';
import { Link } from "react-router-dom";

import LogoPng from '../../assets/logo.png';
import './styles.scss';

function Header(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
      <div className='header-component'>
        <Link to="/staging">
          <Button>
              <img src={LogoPng} height='auto' width='100px'alt='logo' />
          </Button>
        </Link>

        <div className='icon-container'>
          <IconButton
            aria-label="more"
            aria-controls="long-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <Icon path={mdiXboxControllerMenu} size={2} color='white' />
          </IconButton>
          <Menu
            id="long-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            <Link to="/staging">
              <MenuItem onClick={handleClose}>
                WORKS
              </MenuItem>
            </Link>
            <Link to="/about">
              <MenuItem onClick={handleClose}>
                CONTACT
              </MenuItem>
            </Link>
            ))}
          </Menu>
        </div>
      </div>
  );
}

export default Header;
