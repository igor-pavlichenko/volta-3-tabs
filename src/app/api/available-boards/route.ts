import { NextResponse } from 'next/server';

export type BoardName = 'brake-system' | 'climate-control' | 'telematics';

// in a real world scenario this endpoint would probably return the
// endpoints for each board, instead of them being hardcoded in FE
const availableBoards: Array<BoardName> = [
  'brake-system',
  'climate-control',
  'telematics',
];

export type AvailableBoardsData = Array<BoardName>;
export async function GET(request: Request) {
  return NextResponse.json(availableBoards);
}
