import Building from './5-building.js';

export default class SkyHighBuilding extends Building {
    constructor(sqft, floors) {
        super(sqft);
        this.floors = floors;
    }

    evacuationWarningMessage() {
        return `Evacuate slowly the ${this._floors} floors`;
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