import l10n from '~/data/l10n';

export default {
  success: {
    // Keys map to server routes.
    login: {
      // Where to head the user back to.
      view: 'homepage',
    },
  },
  error: {
    login: {
      view: 'login',
      // L10n key of an error message to display upon error.
      error: l10n.error.badCredentials,
    },
  },
};
