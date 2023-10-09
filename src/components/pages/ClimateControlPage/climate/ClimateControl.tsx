'use client';
import { Stack } from '@mui/joy';
import LoadingIndicator from '~/components/LoadingIndicator';
import { useAddClimateControlLog } from '../climateHooks';
import FanControl from './FanControl';
import TemperatureControl from './TemperatureControl';

const ClimateControl = () => {
  const { mutate, isLoading } = useAddClimateControlLog();

  return (
    <Stack gap={4} alignItems="center">
      <LoadingIndicator loading={isLoading} />
      <Stack gap={10} width="100%">
        <FanControl />

        <TemperatureControl />
      </Stack>
    </Stack>
  );
};

export default ClimateControl;
