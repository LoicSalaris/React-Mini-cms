import React from 'react';
import PropTypes from 'prop-types';
import { Box, Heading } from 'react-bulma-components';

import BlocEditor from '~/components/Bloc/Editor';

const Title = ({
  id,
  content,
  color,
  admin,
  blocActions,
}) => {
  // En mode admin, le bloc doit être dans un .box ;
  // sinon, on utilise un <div> temporaire (pas monté dans le DOM au final)
  const Wrapper = admin ? Box : React.Fragment;
  return (
    <Wrapper className="app-bloc app-bloc--title">
      { admin && <BlocEditor blocId={id} blocActions={blocActions} /> }
      <Heading style={{ color }}>
        {content}
      </Heading>
    </Wrapper>
  );
};

Title.propTypes = {
  id: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  color: PropTypes.string,
  admin: PropTypes.bool.isRequired,
  blocActions: PropTypes.any.isRequired,
};

Title.defaultProps = {
  color: '#000',
};

export default Title;
