import React from 'react';
import PropTypes from 'prop-types';

const BlocAction = ({
  title,
  onClick,
  icon: Icon,
}) => (
  /* eslint-disable-next-line */
  <a
    title={title}
    onClick={onClick}
  >
    <Icon />
  </a>
);

BlocAction.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.any.isRequired, // FIXME: trouver ce que c'est
};

export default BlocAction;
