import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Cat from '../static/images/cat.jpeg';

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
  <header className="flex align-center justify-between px4">
    <div>
      <h1 className="h1 inline-block mr2">🍽 My Recipes</h1>
      <span className="mr1">Meow</span>
      <img src={Cat} style={{ width: 30 }} alt="cat-pic" />
    </div>
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
