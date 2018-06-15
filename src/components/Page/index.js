import React from 'react';
import PropTypes from 'prop-types';
import { Content } from 'react-bulma-components';

import Title from '~/components/Bloc/Types/Title';
import Text from '~/components/Bloc/Types/Text';
import './page.styl';

const tagTypes = {
  title: Title,
  text: Text,
};

const Page = ({
  id,
  blocs,
  admin,
  blocActions,
}) => {
  const blocsJSX = blocs.map((bloc) => {
    // Chaque type de bloc est rendu par son propre composant React.
    const BlocType = tagTypes[bloc.type];
    return (
      <BlocType
        key={bloc.id}
        {...bloc}
        admin={admin}
        blocActions={blocActions}
      />
    );
  });

  return (
    // La page a la classe .content au global => c'est beau !
    <Content className="app-page">
      {blocsJSX}
    </Content>
  );
};

Page.propTypes = {
  id: PropTypes.number,
  blocs: PropTypes.arrayOf(PropTypes.shape({
    content: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  admin: PropTypes.bool.isRequired,
  blocActions: PropTypes.any.isRequired,
};

export default Page;
