import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import './styles.scss';

const CustomButton = withStyles({
    root: {
      fontSize: 16,
      padding: '6px 12px',
      border: '3px solid #71c1b7',
      fontWeight: 700,
      letterSpacing: '0.2em',
      transition: 'color 0.1s ease 0.1s',
      lineHeight: 1.5,
      backgroundColor: '#FFF',
      color: '#71c1b7',
      borderRadius: 19,
      
      '&:hover': {
        backgroundColor: '#71c1b7',
        borderColor: '#71c1b7',
        color: '#FFF'
      },
    },
  })(Button);

function App(props) {
  return (
    <CustomButton onClick={() => props.onClick()}>
        {props.children}
    </CustomButton>
  );
}

export default App;
