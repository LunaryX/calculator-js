import { getPI } from "../../Utils/Math.js";

class ConeFormulas {
  #PI = getPI();
  #result;

  getSlandHeight(height, radius) {
    return `${Math.sqrt(height * height + radius * radius)}`;
  }

  getVolume(radius, height) {
    this.#result = (1 / 3) * this.#PI * (radius * radius) * height;
    return `${this.#result.toFixed(2)}`;
  }

  getTotalSurfaceArea(radius, slantHeight) {
    return `${this.#PI * radius * (radius + slantHeight)}`;
  }

  getCurvedSurfaceArea(radius, slantHeight) {
    return `${this.#PI * radius * slantHeight}`;
  }

  getBaseArea(radius) {
    return `${this.#PI * radius * radius}`;
  }
}

export { ConeFormulas };
