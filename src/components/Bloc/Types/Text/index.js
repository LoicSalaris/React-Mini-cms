import React from 'react';
import PropTypes from 'prop-types';
import { Box, Content } from 'react-bulma-components';

import BlocEditor from '~/components/Bloc/Editor';

const Text = ({
  id,
  content,
  color,
  admin,
  blocActions,
}) => {
  // En mode admin, le bloc doit être dans un .box ;
  // sinon, on utilise un <div> tout simple (<Content> pour react-bulma).
  const Wrapper = admin ? Box : Content;
  return (
    <Wrapper
      className="app-bloc app-bloc--text"
    >
      { admin && <BlocEditor blocId={id} blocActions={blocActions} /> }
      <div style={{ color }} dangerouslySetInnerHTML={{ __html: content }} />
    </Wrapper>
  );
};

Text.propTypes = {
  id: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  color: PropTypes.string,
  admin: PropTypes.bool.isRequired,
  blocActions: PropTypes.any.isRequired,
};

Text.defaultProps = {
  color: '#000',
};

export default Text;
