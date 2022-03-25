class ParallelogramFormulas {
  getPerimeter(a, b) {
    return `${2 * a + 2 * b}`;
  }

  getArea(base, heigth) {
    return `${base * heigth}`;
  }

  getHeight(area, base) {
    return `${area / base}`;
  }

  getBase(area, height) {
    return `${area / height}`;
  }
}

export { ParallelogramFormulas };
