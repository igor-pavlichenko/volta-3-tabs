import { NextResponse } from 'next/server';

export type BoardName = 'BRAKE_SYSTEM' | 'NAVIGATION' | 'TELEMATICS';

const availableBoards: Array<BoardName> = ['BRAKE_SYSTEM', 'NAVIGATION', 'TELEMATICS'];

export async function GET(request: Request) {
  return NextResponse.json(availableBoards);
}
