class CubeFormulas {
  getArea(a) {
    return `${6 * (a * a)}`;
  }

  getVolume(a) {
    return `${a * a * a}`;
  }

  getEdge(volume) {
    return `${(1 / 3) * volume}`;
  }

  getSpaceDiagonal(side) {
    return `${side * Math.sqrt(3)}`;
  }
}

export { CubeFormulas };
