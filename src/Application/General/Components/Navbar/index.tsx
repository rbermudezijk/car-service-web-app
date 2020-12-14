import React from 'react';
import { IconButton } from '@material-ui/core';

import './Navbar.scss';

export const Navbar = () =>
  <nav className="nav-bar">
    <IconButton aria-label="Menu">
      <i className="icon [ fas fa-bars ]"/>
    </IconButton>
  </nav>;
