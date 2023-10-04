import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  return NextResponse.json([
    {
      maintenance_date: '2021-01-05',
      maintenance_type: 'Brake Pad Replacement',
      mileage: 50000,
      mechanic: 'John Smith',
    },
    {
      maintenance_date: '2021-02-10',
      maintenance_type: 'Brake Fluid Flush',
      mileage: 60000,
      mechanic: 'Jane Doe',
    },
    {
      maintenance_date: '2021-03-15',
      maintenance_type: 'Brake Caliper Replacement',
      mileage: 70000,
      mechanic: 'Mike Johnson',
    },
    {
      maintenance_date: '2021-04-20',
      maintenance_type: 'Brake Rotor Resurfacing',
      mileage: 80000,
      mechanic: 'Sarah Wilson',
    },
    {
      maintenance_date: '2021-05-25',
      maintenance_type: 'Brake Line Inspection',
      mileage: 90000,
      mechanic: 'David Brown',
    },
    {
      maintenance_date: '2021-06-30',
      maintenance_type: 'Brake Master Cylinder Replacement',
      mileage: 100000,
      mechanic: 'Emily Davis',
    },
    {
      maintenance_date: '2021-08-05',
      maintenance_type: 'Brake Pad Replacement',
      mileage: 110000,
      mechanic: 'Michael Johnson',
    },
    {
      maintenance_date: '2021-09-10',
      maintenance_type: 'Brake Fluid Flush',
      mileage: 120000,
      mechanic: 'Jessica Smith',
    },
    {
      maintenance_date: '2021-10-15',
      maintenance_type: 'Brake Caliper Replacement',
      mileage: 130000,
      mechanic: 'Robert Wilson',
    },
    {
      maintenance_date: '2021-11-20',
      maintenance_type: 'Brake Rotor Resurfacing',
      mileage: 140000,
      mechanic: 'Olivia Johnson',
    },
    {
      maintenance_date: '2021-12-25',
      maintenance_type: 'Brake Line Inspection',
      mileage: 150000,
      mechanic: 'William Brown',
    },
    {
      maintenance_date: '2022-01-30',
      maintenance_type: 'Brake Master Cylinder Replacement',
      mileage: 160000,
      mechanic: 'Sophia Davis',
    },
    {
      maintenance_date: '2022-03-05',
      maintenance_type: 'Brake Pad Replacement',
      mileage: 170000,
      mechanic: 'Daniel Johnson',
    },
  ]);
}
