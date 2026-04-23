import Building from './5-building.js';

export default class SkyHighBuilding extends Building {
    constructor(sqft, floors) {
        super(sqft);
        this.floors = floors;
    }

    evacuationWarningMessage() {
        throw new Error('In the event of an emergency, all occupants of the SkyHigh Building should exit via the stairs.');
    }

    // Getter
    get floors() {
        return this._floors;
    }

    // Setter
    set floors(value) {
        if (typeof value !== 'number') {
            throw new TypeError('Number of floors must be a number');
        } else {
            this._floors = value;
        }
    }
}