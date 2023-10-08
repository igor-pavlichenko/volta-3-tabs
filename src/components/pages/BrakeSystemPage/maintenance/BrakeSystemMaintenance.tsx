'use client';

import { Stack, Table } from '@mui/joy';
import { useQuery } from '@tanstack/react-query';
import { BrakesMaintenanceData } from '~/app/api/brake-system/maintenance/route';
import LoadingIndicator from '~/components/LoadingIndicator';
import BrakeMaintenanceEntryRow from './BrakeMaintenanceEntryRow';
import NextMaintenance from './NextMaintenance';

const BrakeSystemMaintenance = () => {
  const endpoint = '/api/brake-system/maintenance';
  const { data, isFetching } = useQuery<BrakesMaintenanceData>({
    queryKey: [endpoint],
    queryFn: async () => (await fetch(endpoint)).json(),
  });

  if (!data) {
    return <LoadingIndicator loading />;
  }

  const { next_maintenance, history } = data;

  return (
    <Stack gap={4} alignItems="center">
      <LoadingIndicator loading={isFetching} />
      <NextMaintenance date={next_maintenance} />

      <Table>
        <tbody>
          {history
            .sort(
              (a, b) =>
                new Date(b.maintenance_date).getTime() -
                new Date(a.maintenance_date).getTime(),
            )
            .map((entry) => (
              <BrakeMaintenanceEntryRow
                key={entry.maintenance_date}
                entry={entry}
              />
            ))}
        </tbody>
      </Table>
    </Stack>
  );
};

export default BrakeSystemMaintenance;
