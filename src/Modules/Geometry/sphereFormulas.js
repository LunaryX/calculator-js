import { getPI } from "../../Utils/Math.js";

class SphereFormulas {
  #PI = getPI();

  getSurfaceArea(radius) {
    return `${4 * this.#PI * (radius * radius)}`;
  }

  getVolume(radius) {
    return `${(4 / 3) * this.#PI * (radius * radius * radius)}`;
  }

  getDiameter(radius) {
    return `${radius * radius}`;
  }
}

export { SphereFormulas };
