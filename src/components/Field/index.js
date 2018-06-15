import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './field.styl';

const Field = ({
  type,
  name,
  placeholder,
  value,
  handleChange,
}) => {
  const fieldClassNames = classNames(
    'app-field',
    {
      'app-field--has-value': value !== '',
    },
  );

  return (
    // Un input contrôlé (par React).
    <div className={fieldClassNames}>
      <input
        id={name}
        value={value} // La valeur d'affichage est forcée, et contrôlée par le state
        onChange={handleChange} // On permet les modifications, en mémorisant au passage
        className="app-field-input"
        type={type}
        name={name}
        placeholder={placeholder}
      />
      {/* eslint-disable jsx-a11y/label-has-for */}
      <label
        htmlFor={name}
        className="app-field-label"
      >
        {placeholder}
      </label>
    </div>
  );
};

Field.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  type: PropTypes.oneOf(['text', 'password', 'email', 'num']),
};

Field.defaultProps = {
  type: 'text', // type par défaut => <input type="text" />
  value: '', // valeur par défaut => <input value="" />
};

export default Field;
