import { getPI } from "../../Utils/Math.js";

class CylinderFormulas {
  #PI = getPI();

  getTotalSurfaceArea(radius, height) {
    return `${
      2 * this.#PI * (radius * height) + 2 * this.#PI * (radius * radius)
    } `;
  }

  getCurvedSurfaceArea(radius, height) {
    return `${2 * this.#PI * radius * height}`;
  }

  getVolume(radius, height) {
    return `${this.#PI * (radius * radius) * height}`;
  }

  getBaseArea(radius) {
    return `${this.#PI * (radius * radius)}`;
  }

  getRadius(volume, height) {
    return `${Math.sqrt(volume / (this.#PI * height))}`;
  }
}

export { CylinderFormulas };
