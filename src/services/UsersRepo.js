import RestService from './RestService';

const ENDPOINT = '/users';

class UserRepo {
  constructor () {
    this._init();
  }

  async load (params) {
    this._init();

    const { data, error } = await RestService.get(ENDPOINT, params);

    if (!error) {
      // TODO: discuss naming convention with BE
      this._data = data;
    } else {
      return error;
    }

    return this.getData();
  }

  getData () {
    return this._data;
  }

  _init () {
    this._data = [];
  }
}

const RepoInstance = new UserRepo();

export default RepoInstance;
