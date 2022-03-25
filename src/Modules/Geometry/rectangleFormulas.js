class RectangleFormulas {
  getPerimeter(length, width) {
    return `${2 * (length + width)}`;
  }

  getArea(length, width) {
    return `${length * width}`;
  }

  getDiagonal(length, width) {
    return `${Math.sqrt(length * length + width * width)}`;
  }
}

export { RectangleFormulas };
