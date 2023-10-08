'use client';

import { Stack } from '@mui/joy';
import { useQuery } from '@tanstack/react-query';
import { BrakeStatusData } from '~/app/api/brake-system/status/route';
import LoadingIndicator from '~/components/LoadingIndicator';
import BrakeUnitCard from './BrakeUnitCard';

const BrakeSystemStatus = () => {
  const endpoint = '/api/brake-system/status';
  const { data, isFetching } = useQuery<BrakeStatusData>({
    queryKey: [endpoint],
    queryFn: async () => (await fetch(endpoint)).json(),
  });

  const frontLeft = data?.find((b) => b.position === 'FRONT-LEFT');
  const frontRight = data?.find((b) => b.position === 'FRONT-RIGHT');
  const rearLeft = data?.find((b) => b.position === 'REAR-LEFT');
  const rearRight = data?.find((b) => b.position === 'REAR-RIGHT');
  if (!frontLeft || !frontRight || !rearLeft || !rearRight) {
    return <LoadingIndicator loading />;
  }

  return (
    <Stack gap={4} alignItems="center">
      <LoadingIndicator loading={isFetching} />
      {data && (
        <Stack gap={10} maxWidth={600}>
          <Stack direction="row" justifyContent="center" gap={4}>
            <BrakeUnitCard unit={frontLeft} />
            <BrakeUnitCard unit={frontRight} />
          </Stack>
          <Stack direction="row" justifyContent="center" gap={4}>
            <BrakeUnitCard unit={rearLeft} />
            <BrakeUnitCard unit={rearRight} />
          </Stack>
        </Stack>
      )}
    </Stack>
  );
};

export default BrakeSystemStatus;
