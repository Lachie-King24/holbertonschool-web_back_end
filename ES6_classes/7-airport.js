export default class Airport {
    constructor(name, code) {
        this.name = name;
        this.code = code;
    }

        toString() {
            return `${this._name} (${this._code})`;
        }

    // Getters

    get name() {
        return this._name;
    }

    get code() {
        return this._code;
    }

    //Setters

    set name(value) {
        if (typeof value !== 'string') {
            throw new TypeError('Name must be a string');
        } else {
            this._name = value;
        }
    }

    set code(value) {
        if (typeof value !== 'string') {
            throw new TypeError('Code must be a string');
        } else {
            this._code = value;
        }
    }
}