import React from 'react';
import PropTypes from 'prop-types';
import PaintBrushIcon from 'react-icons/lib/fa/paint-brush';
import PenIcon from 'react-icons/lib/fa/pencil';
import AlignLeftIcon from 'react-icons/lib/fa/align-left';
import AlignCenterIcon from 'react-icons/lib/fa/align-center';
import AlignRightIcon from 'react-icons/lib/fa/align-right';

import BlocAction from '~/components/Bloc/Editor/Action';
import './editor.styl';

const noop = () => {};

const BlocEditor = ({ blocId, blocActions }) => (
  <div className="app-blocEditor">
    <ul className="app-blocEditor-actions">
      <li className="app-blocEditor-action">
        <BlocAction
          title="Modifier la couleur"
          onClick={blocActions.editContentColor(blocId)}
          icon={PaintBrushIcon}
        />
      </li>
      <li className="app-blocEditor-action">
        <BlocAction
          title="modifier le texte"
          onClick={noop}
          icon={PenIcon}
        />
      </li>
      <li className="app-blocEditor-action">
        <BlocAction
          title="Aligner à gauche"
          onClick={noop}
          icon={AlignLeftIcon}
        />
      </li>
      <li className="app-blocEditor-action">
        <BlocAction
          title="Aligner au centre"
          onClick={noop}
          icon={AlignCenterIcon}
        />
      </li>
      <li className="app-blocEditor-action">
        <BlocAction
          title="Aligner à droite"
          onClick={noop}
          icon={AlignRightIcon}
        />
      </li>
    </ul>
  </div>
);

BlocEditor.propTypes = {
  blocId: PropTypes.number.isRequired,
  blocActions: PropTypes.shape({
    editContentColor: PropTypes.func.isRequired,
  }).isRequired,
};

export default BlocEditor;
