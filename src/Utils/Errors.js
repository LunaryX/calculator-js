import { CustomError } from "./CustomError.js";

let space = `\t\t`;

function throwParameterError(convertor, functionConvert) {
  throw new CustomError(
    `\n${space}The parameter you must use is "${convertor}" -> new Conversion(meters, "${convertor}").${functionConvert}().\n`
  );
}

function throwFactorializeError() {
  throw new CustomError(
    `\n${space}You must provide a number to factorialize and it must be greater than 2 -> new BasicFormulas().factorialize(3).\n`
  );
}

function throwMetersNaNError() {
  throw new CustomError(
    `\n${space}The first parameter must be a type of Number -> new Conversion(10, "Example").\n`
  );
}

function throwToConvertError() {
  throw new CustomError(
    `\n${space}The second parameter must be a type of String -> new Conversion(meters, "Example").\n`
  );
}

function throwDiscriminantError() {
  throw new CustomError(
    `\n${space}You must provide all arguments in order to get the discriminant -> new BasicFormulas().getDiscriminant('5x^2', '3x', '5').\n`
  );
}

export {
  throwParameterError,
  throwFactorializeError,
  throwMetersNaNError,
  throwToConvertError,
  throwDiscriminantError,
};
