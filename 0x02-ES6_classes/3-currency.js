export default class Currency {
  constructor(code, name) {
    if (typeof code !== 'string' && typeof name !== 'string') {
      throw new TypeError('code and name must be string');
    }
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(code) {
    this._code = code;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
