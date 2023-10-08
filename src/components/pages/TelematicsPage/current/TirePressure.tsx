import { Stack, Typography } from '@mui/joy';
import { TelematicsData } from '~/utils';
import TireBox from './TireBox';

type Props = {
  value: TelematicsData['tire_pressure'];
};

const TirePressure = ({ value }: Props) => {
  const { front_left, front_right, rear_left, rear_right } = value;
  return (
    <Stack alignItems="center" gap={2}>
      <Typography textAlign="center" fontSize={25} level="body-lg">
        Tire pressure ( bar ):
      </Typography>
      <Stack gap={7}>
        <Stack direction="row" gap={4}>
          <TireBox pressure={front_left} />
          <TireBox pressure={front_right} />
        </Stack>
        <Stack direction="row" gap={4}>
          <TireBox pressure={rear_left} />
          <TireBox pressure={rear_right} />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default TirePressure;
