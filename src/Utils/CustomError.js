import chalk from "chalk";

class CustomError extends Error {
  constructor(message) {
    if (typeof message != "string" || typeof message == "undefined") return;
    super(message);
    this.message = chalk.red.bold(message);
  }
}

export { CustomError };
