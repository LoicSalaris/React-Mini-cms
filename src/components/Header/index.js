import React from 'react';
import PropTypes from 'prop-types';

import Login from './Login';
import Logout from './Logout';
import './header.styl';

const Header = ({
  username,
  onLoginClick,
  onLogoutClick,
}) => (
  <nav className="app-nav">
    { username && <Logout onLogoutClick={onLogoutClick} username={username} /> }
    { !username && <Login onLoginClick={onLoginClick} /> }
  </nav>
);

Header.propTypes = {
  username: PropTypes.string,
  onLoginClick: PropTypes.func.isRequired,
  onLogoutClick: PropTypes.func.isRequired,
};

Header.defaultProps = {
  // En l'absence de session utilisateur, pas de username dans le state.
  username: '',
};

export default Header;
