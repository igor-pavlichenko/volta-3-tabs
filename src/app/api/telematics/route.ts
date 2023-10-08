import { NextResponse } from 'next/server';
import { TelematicsData, delay } from '~/utils';

export type TelematicsLog = TelematicsData & {
  uuid: string;
  timestamp: string;
};
const telematicsLogs: Array<TelematicsLog> = [
  {
    uuid: 'bacb55f9-408d-4e82-90ed-6cd489b54978',
    coordinates: {
      latitude: 37.7749,
      longitude: -122.4194,
    },
    speed: 65,
    battery_level: 100,
    battery_temperature: 21, // 15-30
    tire_pressure: {
      front_left: 9,
      front_right: 9,
      rear_left: 9,
      rear_right: 9,
    },
    timestamp: '2023-01-01T08:00:00Z',
  },
];

export async function GET(request: Request) {
  await delay(200);
  return NextResponse.json(
    telematicsLogs.sort(
      (a, b) =>
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime(),
    ),
  );
}

export async function POST(request: Request) {
  const body = (await request.json()) as TelematicsData;
  const newLog = {
    ...body,
    uuid: crypto.randomUUID(),
    timestamp: new Date().toISOString(),
  };
  telematicsLogs.push(newLog);
  return NextResponse.json(newLog);
}
