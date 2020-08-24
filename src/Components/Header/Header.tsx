import React from 'react';
import { Typography } from '@material-ui/core';
import './Header.scss';

const Header: React.FC = () => {
  return (
    <div className="Header-container">
      <Typography className="Header-logo" variant="h5">
        Shop
      </Typography>
    </div>
  );
};

export default Header;
