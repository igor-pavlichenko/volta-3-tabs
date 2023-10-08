import { NextResponse } from 'next/server';

export type BoardName = 'BRAKE_SYSTEM' | 'CLIMATE_CONTROL' | 'TELEMATICS';

const availableBoards: Array<BoardName> = [
  'BRAKE_SYSTEM',
  'CLIMATE_CONTROL',
  'TELEMATICS',
];

export async function GET(request: Request) {
  return NextResponse.json(availableBoards);
}
