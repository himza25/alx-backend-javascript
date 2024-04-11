// 10-car.js
const carClassSymbol = Symbol('carClass');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
    this[carClassSymbol] = Car; // Store the class reference using a Symbol
  }

  cloneCar() {
    return new this[carClassSymbol]();
  }
}
