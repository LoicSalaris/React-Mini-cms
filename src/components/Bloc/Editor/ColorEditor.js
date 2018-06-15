import React from 'react';
import PropTypes from 'prop-types';
import { SketchPicker } from 'react-color';

const BlocColorEditor = ({ color, onColorPicked }) => (
  <SketchPicker
    className="app-colorEditor"
    color={color}
    onChangeComplete={onColorPicked}
    disableAlpha
  />
);

BlocColorEditor.propTypes = {
  color: PropTypes.string,
  onColorPicked: PropTypes.func.isRequired,
};

BlocColorEditor.defaultProps = {
  color: '#000',
};

export default BlocColorEditor;
