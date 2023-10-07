import { Card, CardContent, Stack, Typography } from '@mui/joy';
import { RxCheckCircled, RxExclamationTriangle } from 'react-icons/rx';
import { BrakeUnit } from '~/app/api/brake-system/status/route';
import BrakePressure from './BrakePressure';

type Props = {
  unit: BrakeUnit;
};

const BrakeUnitCard = ({ unit }: Props) => {
  const { position, type, pressure, max_pressure, temperature, health } = unit;
  return (
    <Card variant="outlined" sx={{ width: 150 }}>
      <CardContent sx={{ gap: 2 }}>
        <Typography level="title-sm">{position}</Typography>
        <Typography level="title-sm">{type}</Typography>
        <BrakePressure pressure={pressure} max_pressure={max_pressure} />
        <Typography level="title-sm">{temperature}ºC</Typography>
        <Stack direction="row" alignItems="center" gap={1}>
          <Typography level="title-sm">Health:</Typography>
          {health === 'OK' ? (
            <RxCheckCircled className="RadixIcon" />
          ) : (
            <RxExclamationTriangle className="RadixIcon" />
          )}
        </Stack>
      </CardContent>
    </Card>
  );
};

export default BrakeUnitCard;
