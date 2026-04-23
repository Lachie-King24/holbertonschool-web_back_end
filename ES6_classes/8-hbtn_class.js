export default class HolbertonClass {
    constructor(size, location) {
        this.size = size;
        this.location = location;
    }

    // Getters
    get size() {
        return this._size;
    }

    get location() {
        return this._location;
    }

    set size(value) {
        if (typeof value !== 'number') {
            throw new TypeError('Size must be a number');
        } else {
            this._size = value;
        }
    }

    set location(value) {
        if (typeof value !== 'string') {
            throw new TypeError('Location must be a string');
        } else {
            this._location = value;
        }
        }

        valueOf() {
            return this._size;
        }

        toString() {
            return this._location;
        }
    }