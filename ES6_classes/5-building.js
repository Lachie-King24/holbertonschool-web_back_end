export default class Building {
    constructor(sqft) {
        if (new.target === Building) {
            throw new Error('Building is an abstract class and cannot be instantiated directly');
        }
        this.sqft = sqft;
    }

    evacuationWarningMessage() {
        throw new Error('Class extending Building must override evacuationWarningMessage');
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