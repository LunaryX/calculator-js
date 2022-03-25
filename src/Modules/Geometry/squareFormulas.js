class SquareFormulas {
  #side
  #area
  #diagonal

  getPerimeter(sideSquare) {
    this.#side = sideSquare
    return `${4 * this.#side}`
  }

  getArea(sideSquare) {
    this.#side = sideSquare
    return `${this.#side * this.#side}`
  }

  getDiagonal(sideSquare) {
    this.#side = sideSquare
    return `${this.#side * Math.sqrt(2)}`
  }

  getSideFromArea(area) {
    this.#area = area
    return `${Math.sqrt(this.#area)}`
  }

  getSideFromDiagonal(diagonal) {
    this.#diagonal = diagonal
    return `${this.#diagonal / (2 * Math.sqrt(2))}`
  }
}

export { SquareFormulas }
