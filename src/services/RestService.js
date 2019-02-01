import { CustomError } from '../utils/CustomError';
import UrlHelper from '../utils/UrlHelper';

class RestService {
  async getParallel (urlsWithParams = []) {
    const requests = urlsWithParams.map(urlAndParams => this.get(...urlAndParams));

    return Promise.all(requests);
  }

  async get (url, params = {}) {
    const requestUrl = UrlHelper.appendQueryParams(url, params);

    return window.fetch(requestUrl)
      .then(this._parseResponse)
      .then(data => ({ data }))
      .catch(error => ({ error }));
  }

  _parseResponse (res) {
    if (res.ok) {
      const copy = res.clone();
      // Should check for parsing error in case of string response
      return res
        .json()
        .catch(err => (err instanceof SyntaxError ? copy.text() : Promise.reject(err)));
    }

    return res.text().then((text) => {
      const error = new CustomError({
        code: res.status,
        message: text,
        status: res.statusText,
      });

      return Promise.reject(error);
    });
  }
}

const RestServiceInstance = new RestService();

export default RestServiceInstance;
