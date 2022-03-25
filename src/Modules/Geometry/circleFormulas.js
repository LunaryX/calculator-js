import { getPI } from "../../Utils/Math.js";

class CircleFormulas {
  #PI = getPI();
  #radius;
  #diameter;

  getRadius(diameter) {
    this.#diameter = diameter;
    return `${this.#diameter / 2}`;
  }

  getArea(radius) {
    this.#radius = radius;
    return `${this.#PI * (this.#radius * this.#radius)}`;
  }

  getCircumference(radius) {
    this.#radius = radius;
    return `${this.#radius * (2 * this.#PI)}`;
  }

  getDiameter(radius) {
    this.#radius = radius;
    return `${this.#radius * 2}`;
  }
}

export { CircleFormulas };
