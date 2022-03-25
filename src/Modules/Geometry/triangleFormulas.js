class TriangleFormulas {
  #semiPerimeter;

  getPerimeter(a, b, c) {
    return `${a + b + c}`;
  }

  getSemiPerimeter(a, b, c) {
    return `${(a + b + c) / 2}`;
  }

  getAreaByBaseAndHeight(base, height) {
    return `${(1 / 2) * (base * height)}`;
  }

  getAreaByHeronFormula(a, b, c) {
    this.#semiPerimeter = (a + b + c) / 2;

    let semiPerimeterFromA =
      this.#semiPerimeter * this.#semiPerimeter - this.#semiPerimeter * a;
    let semiPerimeterFromB =
      this.#semiPerimeter * this.#semiPerimeter - this.#semiPerimeter * b;
    let semiPerimeterFromC =
      this.#semiPerimeter * this.#semiPerimeter - this.#semiPerimeter * c;

    return `${Math.sqrt(
      semiPerimeterFromA * semiPerimeterFromB * semiPerimeterFromC
    )}`;
  }
}

export { TriangleFormulas };
