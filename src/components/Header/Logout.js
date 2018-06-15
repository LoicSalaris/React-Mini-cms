import React from 'react';
import PropTypes from 'prop-types';

import l10n from '~/data/l10n';

const Logout = ({
  username,
  onLogoutClick,
}) => (
  <React.Fragment>
    <span className="app-current-user">{username}</span>
    <span
      className="app-link"
      onClick={onLogoutClick}
    >
      {l10n.header.logout}
    </span>
  </React.Fragment>
);

Logout.propTypes = {
  username: PropTypes.string.isRequired,
  onLogoutClick: PropTypes.func.isRequired,
};

export default Logout;
