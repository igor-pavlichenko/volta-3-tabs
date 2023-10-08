'use client';
import { Stack } from '@mui/joy';
import { useCallback, useState } from 'react';
import LoadingIndicator from '~/components/LoadingIndicator';
import { useAddClimateControlLog } from '../climateHooks';
import FanControl from './FanControl';

const ClimateControl = () => {
  const { mutate, isLoading } = useAddClimateControlLog();
  const [fanLevel, setFanLevel] = useState(2);

  const increaseFan = useCallback(() => {
    if (fanLevel < 4) {
      setFanLevel((prev) => prev + 1);
    }
  }, [fanLevel]);

  const decreaseFan = useCallback(() => {
    if (fanLevel > 0) {
      setFanLevel((prev) => prev - 1);
    }
  }, [fanLevel]);

  return (
    <Stack gap={4} alignItems="center">
      <LoadingIndicator loading={isLoading} />
      <Stack gap={10} width="100%">
        <FanControl
          onDecrease={decreaseFan}
          onIncrease={increaseFan}
          fanLevel={fanLevel}
        />
      </Stack>
    </Stack>
  );
};

export default ClimateControl;
