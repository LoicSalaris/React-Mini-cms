import React from 'react';
import PropTypes from 'prop-types';

import l10n from '~/data/l10n';

const Login = ({ onLoginClick }) => (
  <a
    className="app-link"
    onClick={onLoginClick}
  >
    {l10n.header.login}
  </a>
);

Login.propTypes = {
  onLoginClick: PropTypes.func.isRequired,
};

export default Login;
