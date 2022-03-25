/**
 * @param {meters} meters - Number of meters to start the conversion from.
 * @param {toConvert} ToConvert - Specify the conversion unit.
 * @returns From the number of meters given, it starts the conversion to the specified unit and returns the converted value.
 */

import {
  throwMetersNaNError,
  throwParameterError,
  throwToConvertError,
} from "../Utils/Errors.js";

class MeterConversion {
  #convert;
  #convertToLower;

  constructor(meters, toConvert) {
    this.meters = meters;
    this.toConvert = toConvert;

    this.#convert = toConvert;
    this.#convertToLower = toConvert.toLowerCase();

    if (typeof toConvert !== "string") throwToConvertError();
    if (typeof meters !== "number") throwMetersNaNError();

    let convertArray = ["dm", "cm", "mm", "dam", "hm", "km", "mi", "mile"];

    if (this.#convertToLower == convertArray[0]) this.#convert = "decimeters";
    if (this.#convertToLower == convertArray[1]) this.#convert = "centimeters";
    if (this.#convertToLower == convertArray[2]) this.#convert = "millimeters";
    if (this.#convertToLower == convertArray[3]) this.#convert = "decameters";
    if (this.#convertToLower == convertArray[4]) this.#convert = "hectometers";
    if (this.#convertToLower == convertArray[5]) this.#convert = "kilometers";
    if (
      this.#convertToLower == convertArray[6] ||
      this.#convertToLower == convertArray[7]
    )
      this.#convert = "miles";
  }

  metersToDecimeters() {
    if (this.#convert != "decimeters")
      throwParameterError("dm", "metersToDecimeters");
    return `${this.meters * 10} ${this.#convert}`;
  }

  metersToCentimeters() {
    if (this.#convert != "centimeters")
      throwParameterError("cm", "metersToCentimeters");
    return `${this.meters * 100} ${this.#convert}`;
  }

  metersToMillimeters() {
    if (this.#convert != "millimeters")
      throwParameterError("mm", "metersToMillimeters");
    return `${this.meters * 1000} ${this.#convert}`;
  }

  metersToDecameters() {
    if (this.#convert != "decameters")
      throwParameterError("dam", "metersToDecameters");
    return `${this.meters / 10} ${this.#convert}`;
  }

  metersToHectometers() {
    if (this.#convert != "hectometers")
      throwParameterError("hm", "metersToHectometers");
    return `${this.meters / 100} ${this.#convert}`;
  }

  metersToKilometers() {
    if (this.#convert != "kilometers")
      throwParameterError("km", "metersToKilometers");
    return `${this.meters / 1000} ${this.#convert}`;
  }

  metersToMiles() {
    if (this.#convert != "miles") throwParameterError("mi", "metersToMiles");
    return `${this.meters * 0.000621} ${this.#convert}`;
  }
}

export { MeterConversion };
