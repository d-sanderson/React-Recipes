import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const HeaderLink = ({ children, ...props }) => (
  <NavLink
    exact
    to="/"
    className="p1 mt5 rounded black text-decoration-none"
    activeClassName="bg-white"
    {...props}

  >
    {children}
  </NavLink>
);
const Header = () => (
  <header className=" flex align-center justify-between px4">
    <h1 className="h1">🍽 My Recipes</h1>
    <nav>
      <HeaderLink to="/">Home</HeaderLink>
      <HeaderLink to="/favorites">Favorites</HeaderLink>
    </nav>
  </header>
);

HeaderLink.propTypes = {
  children: PropTypes.node,
};
export default Header;
