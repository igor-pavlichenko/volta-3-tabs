import { NextResponse } from 'next/server';
import { delay, randomIntFromInterval } from '~/utils';

export type BrakeUnit = {
  position: 'FRONT-LEFT' | 'FRONT-RIGHT' | 'REAR-LEFT' | 'REAR-RIGHT';
  type: 'HYDRAULIC' | 'HYDRAULIC' | 'AIR';
  temperature: number;
  max_temperature: number;
  pressure: number;
  max_pressure: number;
  health: 'OK' | 'MALFUNCTION';
};
export type BrakeStatusData = Array<BrakeUnit>;

const MAX_TEMPERATURE = 130; // ºC
const MAX_PRESSURE = 30; // bar

function randomHealth() {
  return randomIntFromInterval(1, 4) > 3 ? 'MALFUNCTION' : 'OK';
}

export async function GET(request: Request) {
  const data: BrakeStatusData = [
    {
      position: 'FRONT-LEFT',
      type: 'HYDRAULIC',
      temperature: randomIntFromInterval(10, MAX_TEMPERATURE),
      max_temperature: MAX_TEMPERATURE,
      pressure: randomIntFromInterval(0, MAX_PRESSURE),
      max_pressure: MAX_PRESSURE,
      health: randomHealth(),
    },
    {
      position: 'FRONT-RIGHT',
      type: 'HYDRAULIC',
      temperature: randomIntFromInterval(10, MAX_TEMPERATURE),
      max_temperature: MAX_TEMPERATURE,
      pressure: randomIntFromInterval(0, MAX_PRESSURE),
      max_pressure: MAX_PRESSURE,
      health: randomHealth(),
    },
    {
      position: 'REAR-LEFT',
      type: 'HYDRAULIC',
      temperature: randomIntFromInterval(10, MAX_TEMPERATURE),
      max_temperature: MAX_TEMPERATURE,
      pressure: randomIntFromInterval(0, MAX_PRESSURE),
      max_pressure: MAX_PRESSURE,
      health: randomHealth(),
    },
    {
      position: 'REAR-RIGHT',
      type: 'HYDRAULIC',
      temperature: randomIntFromInterval(10, MAX_TEMPERATURE),
      max_temperature: MAX_TEMPERATURE,
      pressure: randomIntFromInterval(0, MAX_PRESSURE),
      max_pressure: MAX_PRESSURE,
      health: randomHealth(),
    },
  ];

  await delay(1500);
  return NextResponse.json(data);
}
