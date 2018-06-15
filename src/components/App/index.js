import React from 'react';

import Header from '~/components/Header';
import Login from '~/components/Login';
import Page from '~/components/Page';
import BlocColorEditor from '~/components/Bloc/Editor/ColorEditor';
import Server from '~/utils/server';
import l10n from '~/data/l10n';
import './app.styl';

class App extends React.Component {
  state = {
    page: undefined,
    editedBloc: undefined, // id du bloc qui est actuellement en édition
    view: undefined,
    username: undefined,
    admin: false,
    email: '',
    password: '',
    error: '',
  }

  componentDidMount() {
    this.server = new Server();
    this.serverActions.checkSession(this.pageActions.load);
  }

  pageActions = {
    load: () => {
      console.log('--> Chargement de la page…');
      this.server.api
        .get('/pages/1')
        .then((response) => {
          console.log('<-- Page chargée', response.data);
          this.setState({
            view: 'page',
            page: response.data,
          });
        });
    },
    save: () => {
      const { page } = this.state;
      this.server.api.put('/pages/1', { ...page });
    },
  }

  appActions = {
    changeView: view => () => {
      this.setState({ view });
    },
    changeInput: (evt) => {
      const { value, name } = evt.target;
      this.setState({
        [name]: value,
        error: '',
      });
    },
  }

  serverActions = {
    login: (evt) => {
      evt.preventDefault();
      const { email, password } = this.state;
      this.server.api
        .post('/login', { email, password })
        .then((response) => {
          const { username, admin } = response.data;
          this.setState({
            view: 'page',
            username,
            admin,
            email: '',
            password: '',
            error: '',
          });
        })
        .catch((error) => {
          const { response } = error;
          if (response.status === 400) {
            this.setState({
              view: 'login',
              username: undefined,
              admin: false,
              error: l10n.error.badCredentials,
              password: '',
            });
          }
          else this.server.logError(error);
        });
    },
    logout: () => {
      this.server.api
        .delete('/logout')
        .then(() => {
          this.setState({
            username: undefined,
            admin: false,
          });
        })
        .catch((error) => {
          this.server.logError(error);
        });
    },
    checkSession: (callback) => {
      this.server.api
        .get('/session')
        .then((response) => {
          const { username, admin } = response.data;
          this.setState({
            username,
            admin,
          }, callback);
        });
    },
  }

  blocActions = {
    editContentColor: blocId => () => {
      this.setState({
        editedBloc: blocId,
        editType: 'color',
      });
    },
    changeColor: ({ hex: color }) => {
      const blocs = this.state.page.blocs.map((bloc) => {
        if (bloc.id === this.state.editedBloc) {
          return {
            ...bloc,
            color,
          };
        }
        return bloc;
      });
      const page = { ...this.state.page, blocs };
      this.setState({ page }, this.pageActions.save);
    },
  }

  render() {
    const {
      page,
      editedBloc,
      editType,
      view,
      admin,
      username,
      email,
      password,
      error,
    } = this.state;

    let editor = <React.Fragment />;
    if (typeof editedBloc === 'number') {
      switch (editType) {
        case 'color': {
          const currentColor = page.blocs.find(bloc => bloc.id === editedBloc).color;
          editor = (<BlocColorEditor
            color={currentColor}
            onColorPicked={this.blocActions.changeColor}
          />);
          break;
        }
        default:
      }
    }

    return (
      <div className="app">
        <Header
          username={username}
          onLoginClick={this.appActions.changeView('login')}
          onLogoutClick={this.serverActions.logout}
        />
        { editor }
        { view === 'page' &&
          <Page
            {...page}
            admin={admin}
            blocActions={this.blocActions}
          />
        }
        { view === 'login' &&
          <Login
            email={email}
            password={password}
            error={error}
            changeInput={this.appActions.changeInput}
            onSubmit={this.serverActions.login}
          />
        }
      </div>
    );
  }
}

export default App;
