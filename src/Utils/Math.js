export function kineticEnergy(mass, velocity) {
  let KineticEnergy;

  KineticEnergy = 0.5 * mass * velocity * velocity;

  return KineticEnergy;
}

export function getPI() {
  return `${Math.PI}`;
}
