import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  return NextResponse.json([
    {
      latitude: 37.7749,
      longitude: -122.4194,
      timestamp: '2022-01-01T08:00:00Z',
    },
    {
      latitude: 34.0522,
      longitude: -118.2437,
      timestamp: '2022-01-01T09:00:00Z',
    },
    {
      latitude: 41.8781,
      longitude: -87.6298,
      timestamp: '2022-01-01T10:00:00Z',
    },
    {
      latitude: 29.7604,
      longitude: -95.3698,
      timestamp: '2022-01-01T11:00:00Z',
    },
    {
      latitude: 39.9526,
      longitude: -75.1652,
      timestamp: '2022-01-01T12:00:00Z',
    },
    {
      latitude: 33.749,
      longitude: -84.388,
      timestamp: '2022-01-01T13:00:00Z',
    },
    {
      latitude: 32.7157,
      longitude: -117.1611,
      timestamp: '2022-01-01T14:00:00Z',
    },
    {
      latitude: 39.2904,
      longitude: -76.6122,
      timestamp: '2022-01-01T15:00:00Z',
    },
    {
      latitude: 42.3601,
      longitude: -71.0589,
      timestamp: '2022-01-01T16:00:00Z',
    },
    {
      latitude: 36.1699,
      longitude: -115.1398,
      timestamp: '2022-01-01T17:00:00Z',
    },
    {
      latitude: 38.9072,
      longitude: -77.0369,
      timestamp: '2022-01-01T18:00:00Z',
    },
    {
      latitude: 47.6062,
      longitude: -122.3321,
      timestamp: '2022-01-01T19:00:00Z',
    },
  ]);
}
