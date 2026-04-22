import Currency from './3-currency.js';

export default class Pricing {
    constructor(amount, currency) {
        this.amount = amount;
        this.currency = currency;
    }

    // Getters
    get amount() {
        return this._amount;
    }

    get currency() {
        return this._currency;
    }

    // Setters
    set amount(value) {
        if (typeof value !== 'number') {
            throw new TypeError('Amount must be a number');
        } else {
            this._amount = value;
        }
    }

    set currency(value) {
        if (!(value instanceof Currency)) {
            throw new TypeError('Currency must be an instance of the Currency class');
        } else {
            this._currency = value;
        }
    }

    displayFullPrice() {
        return `${this._amount} ${this._currency.name} (${this._currency.code})`;
    }

    static convertPrice(amount, conversionRate) {
        return amount * conversionRate;
    }
}