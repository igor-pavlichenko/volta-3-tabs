export function randomIntFromInterval(min: number, max: number) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function randomLatitude() {
  return parseFloat((Math.random() * 180 - 90).toFixed(4));
}
export function randomLongitude() {
  return parseFloat((Math.random() * 360 - 180).toFixed(4));
}

export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export type TelematicsData = {
  coordinates: {
    latitude: number;
    longitude: number;
  };
  speed: number;
  battery_level: number;
  battery_temperature: number;
  tire_pressure: {
    front_left: number;
    front_right: number;
    rear_left: number;
    rear_right: number;
  };
};
export function generateRandomTelematicsData(): TelematicsData {
  const log: TelematicsData = {
    coordinates: {
      latitude: randomLatitude(),
      longitude: randomLongitude(),
    },
    speed: randomIntFromInterval(0, 120),
    battery_level: randomIntFromInterval(0, 100),
    battery_temperature: randomIntFromInterval(15, 30),
    tire_pressure: {
      front_left: randomIntFromInterval(7, 9),
      front_right: randomIntFromInterval(7, 9),
      rear_left: randomIntFromInterval(7, 9),
      rear_right: randomIntFromInterval(7, 9),
    },
  };
  return log;
}
