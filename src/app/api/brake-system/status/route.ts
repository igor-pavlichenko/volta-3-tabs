import { NextResponse } from 'next/server';

export type BrakeUnit = {
  position: 'FRONT-LEFT' | 'FRONT-RIGHT' | 'REAR-LEFT' | 'REAR-RIGHT';
  type: 'HYDRAULIC' | 'DISC' | 'AIR';
  temperature: number;
  max_temperature: number;
  pressure: number;
  max_pressure: number;
};
export type BrakeStatusData = Array<BrakeUnit>;

export async function GET(request: Request) {
  const data: BrakeStatusData = [
    {
      position: 'FRONT-LEFT',
      type: 'HYDRAULIC',
      temperature: 75,
      max_temperature: 90,
      pressure: 160,
      max_pressure: 180,
    },
    {
      position: 'FRONT-RIGHT',
      type: 'HYDRAULIC',
      temperature: 75,
      max_temperature: 90,
      pressure: 160,
      max_pressure: 180,
    },
    {
      position: 'REAR-LEFT',
      type: 'HYDRAULIC',
      temperature: 75,
      max_temperature: 90,
      pressure: 160,
      max_pressure: 180,
    },
    {
      position: 'REAR-RIGHT',
      type: 'HYDRAULIC',
      temperature: 75,
      max_temperature: 90,
      pressure: 160,
      max_pressure: 180,
    },
  ];
  return NextResponse.json(data);
}
