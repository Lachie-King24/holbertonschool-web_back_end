export default class Car {
    constructor(brand, motor, color) {
        this.brand = brand;
        this.motor = motor;
        this.color = color;
    }

    // Getters

    get brand() {
        return this._brand;
    }

    get motor() {
        return this._motor;
    }

    get color() {
        return this._color;
    }

    set brand(value) {
        if (typeof value !== 'string') {
            throw new TypeError('Brand must be a string');
        } else {
            this._brand = value;
        }
    }
}