import {
  throwDiscriminantError,
  throwFactorializeError,
} from "../Utils/Errors.js";

class BasicFormulas {
  #sum;
  #number;
  #discriminantArg1;
  #discriminantArg2;
  #discriminantArg3;

  addition(...args) {
    this.#sum = 0;

    for (let arg of args) {
      this.#sum += arg;
    }
    return `Your result is: ${this.#sum}`;
  }

  substract(firstArgument, ...args) {
    this.#sum = firstArgument;

    for (let arg of args) {
      this.#sum -= arg;
    }
    return `Your result is: ${this.#sum}`;
  }

  multiply(...args) {
    this.#sum = 1;

    for (let arg of args) {
      this.#sum *= arg;
    }
    return `Your result is: ${this.#sum}`;
  }

  divide(firstArgument, ...args) {
    this.#sum = firstArgument;

    for (let arg of args) {
      this.#sum /= arg;
    }
    return `Your result is: ${this.#sum}`;
  }

  factorialize(number) {
    this.#number = number;

    if (typeof number !== "number" || !number) throwFactorializeError();

    if (this.#number <= 2) throwFactorializeError();

    for (let i = this.#number - 1; i >= 1; i--) {
      this.#number = this.#number * i;
    }
    return `The result is: ${this.#number}`;
  }

  getDiscriminant(argument1, argument2, argument3) {
    this.#discriminantArg1 = parseInt(argument1);
    this.#discriminantArg2 = parseInt(argument2);
    this.#discriminantArg3 = parseInt(argument3);

    if (
      !argument1 ||
      !argument2 ||
      !argument3 ||
      typeof argument1 !== "string" ||
      typeof argument2 !== "string" ||
      typeof argument3 !== "string"
    )
      throwDiscriminantError();

    return `The discriminant is: ${
      this.#discriminantArg2 * this.#discriminantArg2 -
      4 * this.#discriminantArg1 * this.#discriminantArg3
    }`;
  }
}

export { BasicFormulas };
