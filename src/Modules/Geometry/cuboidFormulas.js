class CuboidFormulas {
  #totalSurface;
  #spaceDiagonal;

  getTotalSurfaceArea(length, base, heigth) {
    this.#totalSurface = length * base + base * heigth + length * heigth;

    return `${2 * this.#totalSurface}`;
  }

  getSpaceDiagonal(length, base, height) {
    this.#spaceDiagonal = length * length + base * base + height * height;

    return `${Math.sqrt(this.#spaceDiagonal)}`;
  }
}

export { CuboidFormulas };
