export default class Building {
    constructor(sqft) {
        if (new.target === Building) {
            throw new Error('Cannot instantiate Building directly');
        }
        this.sqft = sqft;
    }

    evacuationWarningMessage() {
        throw new Error('evacuationWarningMessage() must be implemented by subclasses');
    }

    // Getter
    get sqft() {
        return this._sqft;
    }

    // Setter
    set sqft(value) {
        if (typeof value !== 'number') {
            throw new TypeError('Square footage must be a number');
        } else {
            this._sqft = value;
        }
    }
}