export default class Car {
    constructor(brand, motor, color) {
        if (typeof brand !== 'String') {
            throw new TypeError('brand must be string')
          } else if (typeof motor !== 'String') {
            throw new TypeError('motor must be string')
        } else if (typeof color !== 'String') {
            throw new TypeError('color must be string')
        }

        this._brand = brand;
        this._motor = motor;
        this._color = color;
    }
    cloneCar () {
        return 
    }
}