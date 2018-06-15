import React from 'react';
import PropTypes from 'prop-types';

import Field from '~/components/Field';
import l10n from '~/data/l10n';
import './login.styl';

const Login = ({
  email,
  password,
  error,
  changeInput,
  onSubmit,
}) => (
  <div className="app-login">
    <h1 className="app-login-title">{l10n.login.title}</h1>
    <p className="app-login-desc">{l10n.login.desc}</p>
    <form
      className="app-login-form"
      onSubmit={onSubmit}
    >
      { error && <p className="app-error">{error}</p> }
      <Field
        name="email"
        placeholder={l10n.login.form.email}
        handleChange={changeInput}
        value={email}
      />
      <Field
        type="password"
        name="password"
        placeholder={l10n.login.form.password}
        handleChange={changeInput}
        value={password}
      />
      <button className="app-login-form-submit app-login-form-submit--login">
        {l10n.login.form.submit}
      </button>
    </form>
  </div>
);

Login.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  changeInput: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Login;
