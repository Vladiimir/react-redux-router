const ERROR_TYPE = {
  error: 'Error',
  warning: 'Warning',
};

class CustomError extends Error {
  constructor ({
    type = ERROR_TYPE.error, source = '', code = '', status = '', message = '',
  }) {
    super();

    this.type = type;
    this.source = source;
    this.code = code;
    this.status = status;
    this.message = message;
  }

  getMessage () {
    return this._renderMessage(true);
  }

  getPopupMessage () {
    return this._renderMessage();
  }

  _renderMessage (withType = false) {
    const {
      type, source, code, status, message,
    } = this;

    const typePart = withType ? `${type} ` : '';
    const messagePart = message ? `\n ${message}` : '';
    const messageDivider = typePart || source ? ':' : '';

    return `${typePart}${source}${messageDivider} ${code} ${status} ${messagePart}`;
  }
}

export { CustomError, ERROR_TYPE };
