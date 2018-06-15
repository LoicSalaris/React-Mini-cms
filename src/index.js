import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';

import App from '~/components/App';

// Ajout de l'élément virtuel dans le DOM du navigateur (mount/render) :
// - équivalent logique de cible.appendChild(quoiajouter)
document.addEventListener('DOMContentLoaded', () => {
  const rootComponent = <App text="Salut React !" />;
  const targetNode = document.getElementById('root');
  render(rootComponent, targetNode);
});

