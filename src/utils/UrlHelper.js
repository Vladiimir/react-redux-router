const [PREFIX] = window.location.pathname.match(/\/[\w-]+/) || [];

const UrlHelper = {
  appendQueryParams: _appendQueryParams,
  BASE_URL: _getBaseUrl(),
};

// [2018-12-10] TODO: check sense of use URLSearchParams
function _appendQueryParams (route = '', params = {}) {
  const baseUrl = _getBaseUrl();
  const paramsArray = Object.entries(params);

  let result = baseUrl + (route.startsWith('/') ? route : `/${route}`);

  if (paramsArray.length) {
    result += '?';

    for (const [key, value] of paramsArray) {
      if (value) {
        result += `${key}=${_encodeParamValue(value)}&`;
      }
    }
    result = result.slice(0, -1);
  }

  return result;
}

function _encodeParamValue (value) {
  const isArray = Array.isArray(value);

  if (isArray) {
    const encodedValue = value.map(item => (typeof item === 'string' ? `"${item}"` : item));

    return `[${encodedValue}]`;
  }
  return encodeURI(value);
}

function _getBaseUrl () {
  // const { origin } = window.location;
  const origin = 'https://jsonplaceholder.typicode.com';

  return origin + (PREFIX || '');
}

export default UrlHelper;
