class TrapeziumFormulas {
  getArea(a, b, h) {
    return `${(1 / 2) * (a + b) * h}`;
  }

  getHeight(area, a, b) {
    return `${(2 * area) / (a + b)}`;
  }

  getBase(area, h, a) {
    return `${2 * (area / h) - a}`;
  }
}

export { TrapeziumFormulas };
