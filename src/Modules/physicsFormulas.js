import { getPI, kineticEnergy } from "../Utils/Math.js";

class PhysicsFormulas {
  averageSpeed(distance, time) {
    return `The result is: S = ${distance / time}`;
  }

  acceleration(finalVelocity, initialVelocity, time) {
    return `The result is: a = ${(finalVelocity - initialVelocity) / time}`;
  }

  density(mass, volume) {
    return `The result is: p = ${mass / volume} `;
  }

  forceNewtonsLaw(mass, acceleration) {
    return `The result is: F = ${mass * acceleration}`;
  }

  power(work, time) {
    return `The result is: P = ${work / time}`;
  }

  weigth(mass, accelerationGravity) {
    return `The result is: W = ${mass * accelerationGravity}`;
  }

  pressure(force, totalArea) {
    return `The result is: P = ${force / totalArea}`;
  }

  kineticEnergy(mass, velocity) {
    return `The result is: E = ${kineticEnergy(mass, velocity)}`;
  }

  voltageOhmsLaw(current, resistance) {
    return `The result is: V = ${current * resistance}`;
  }

  frequencyFormula1(velocity, waveLength) {
    return `The result is: f = ${velocity / waveLength} Hz`;
  }

  frequencyFormula2(time) {
    return `The result is: f = ${1 / time} Hz`;
  }

  //   frequencyFormula3(angularFrequency) {
  //     return `The result is: f = ${angularFrequency / (2 * getPI())} Hz`;
  //   }
}

export { PhysicsFormulas };
