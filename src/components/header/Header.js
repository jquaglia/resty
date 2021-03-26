import React from 'react';
import './header.scss';
import { NavLink } from 'react-router-dom';


function Header() {
  return (
    <header className="App-header">
      <h1>RESTy</h1>
      <nav>
        <div><NavLink className="Nav" to="/">Home</NavLink></div>
        <div><NavLink className="Nav" to="/history">History</NavLink></div>
        <div><NavLink className="Nav" to="/help">Help</NavLink></div>
      </nav>
    </header>
  );
}


// slight syntax change from module.exports = Header
export default Header;