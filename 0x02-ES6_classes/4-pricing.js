import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number' && (!(currency instanceof Currency))) {
      throw new TypeError('amount must be Number and currency must be Currrency');
    }

    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(amout) {
    this._amount = amout;
  }

  get currency() {
    return this.currency;
  }

  set currency(currency) {
    this._currency = currency;
  }

  isplayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
