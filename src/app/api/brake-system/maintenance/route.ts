import { NextResponse } from 'next/server';
import { delay } from '~/utils';

export type BrakesMaintenanceEntry = {
  maintenance_date: string;
  maintenance_type: string;
  odometer: number;
  mechanic: string;
};

export type BrakesMaintenanceData = {
  next_maintenance: string;
  history: Array<BrakesMaintenanceEntry>;
};

export async function GET(request: Request) {
  const data: BrakesMaintenanceData = {
    next_maintenance: '2023-01-12',
    history: [
      {
        maintenance_date: '2021-01-05',
        maintenance_type: 'Brake Pad Replacement',
        odometer: 50000,
        mechanic: 'John Smith',
      },
      {
        maintenance_date: '2021-02-10',
        maintenance_type: 'Brake Fluid Flush',
        odometer: 60000,
        mechanic: 'Jane Doe',
      },
      {
        maintenance_date: '2021-03-15',
        maintenance_type: 'Brake Caliper Replacement',
        odometer: 70000,
        mechanic: 'Mike Johnson',
      },
      {
        maintenance_date: '2021-04-20',
        maintenance_type: 'Brake Rotor Resurfacing',
        odometer: 80000,
        mechanic: 'Sarah Wilson',
      },
      {
        maintenance_date: '2021-05-25',
        maintenance_type: 'Brake Line Inspection',
        odometer: 90000,
        mechanic: 'David Brown',
      },
      {
        maintenance_date: '2021-06-30',
        maintenance_type: 'Brake Master Cylinder Replacement',
        odometer: 100000,
        mechanic: 'Emily Davis',
      },
      {
        maintenance_date: '2021-08-05',
        maintenance_type: 'Brake Pad Replacement',
        odometer: 110000,
        mechanic: 'Michael Johnson',
      },
      {
        maintenance_date: '2021-09-10',
        maintenance_type: 'Brake Fluid Flush',
        odometer: 120000,
        mechanic: 'Jessica Smith',
      },
      {
        maintenance_date: '2021-10-15',
        maintenance_type: 'Brake Caliper Replacement',
        odometer: 130000,
        mechanic: 'Robert Wilson',
      },
      {
        maintenance_date: '2021-11-20',
        maintenance_type: 'Brake Rotor Resurfacing',
        odometer: 140000,
        mechanic: 'Olivia Johnson',
      },
      {
        maintenance_date: '2021-12-25',
        maintenance_type: 'Brake Line Inspection',
        odometer: 150000,
        mechanic: 'William Brown',
      },
      {
        maintenance_date: '2022-01-30',
        maintenance_type: 'Brake Master Cylinder Replacement',
        odometer: 160000,
        mechanic: 'Sophia Davis',
      },
      {
        maintenance_date: '2022-03-05',
        maintenance_type: 'Brake Pad Replacement',
        odometer: 170000,
        mechanic: 'Daniel Johnson',
      },
    ],
  };

  await delay(1500);
  return NextResponse.json(data);
}
