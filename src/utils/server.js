import axios from 'axios';

const baseConfig = {
  baseURL: 'http://localhost:3000',
};

class Server {
  constructor(options = {}) {
    this.config = {
      ...baseConfig,
      ...options,
    };
    this.api = axios.create({
      baseURL: this.config.baseURL,
      withCredentials: true,
      crossDomain: true,
    });
  }

  /* eslint-disable class-methods-use-this */
  logError(error) {
    console.log('Erreur !', error, error.response);
  }
}

export default Server;
