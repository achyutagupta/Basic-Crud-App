import React from 'react';
import {AppBar , Toolbar , styled} from '@mui/material';
import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)`
    background:#111111
`

const Tabs = styled(NavLink)`
    font-size:20px;
    margin-right:10px;
    text-decoration:none;
    color:inherit;
    &:hover {
      color:gray;
      font-size:22px;
      transition:smooth
    }

`

const Navbar = () => {
  return (
    <Header position='static'>
      <Toolbar>
        <Tabs to='/'>Code for interview</Tabs>
        <Tabs to='/all'>All Users</Tabs>
        <Tabs to='/add'>Add User</Tabs>
      </Toolbar>
    </Header>
  )
}

export default Navbar;
