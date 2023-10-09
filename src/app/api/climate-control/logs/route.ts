import { NextResponse } from 'next/server';

export type ClimateControlInteractionData = {
  type: 'fanLevel changed' | 'targetTemp changed' | 'acModeChanged';
  value: number | string;
};
export type ClimateControlInteractionLog = ClimateControlInteractionData & {
  uuid: string;
  timestamp: string;
};

const logs: Array<ClimateControlInteractionLog> = [];

export async function GET(request: Request) {
  return NextResponse.json(logs);
}

export async function POST(request: Request) {
  const body = (await request.json()) as ClimateControlInteractionData;
  const newLog: ClimateControlInteractionLog = {
    ...body,
    uuid: crypto.randomUUID(),
    timestamp: new Date().toISOString(),
  };
  logs.unshift(newLog); // add at the beginning of array
  return NextResponse.json(newLog);
}
