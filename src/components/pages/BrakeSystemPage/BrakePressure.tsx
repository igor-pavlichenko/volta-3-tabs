import { LinearProgress, Typography } from '@mui/joy';
import { BrakeUnit } from '~/app/api/brake-system/status/route';

type Props = Pick<BrakeUnit, 'pressure' | 'max_pressure'>;

const BrakePressure = ({ pressure, max_pressure }: Props) => {
  return (
    <LinearProgress
      size="lg"
      determinate
      thickness={24}
      sx={{
        '--LinearProgress-radius': '5px',
        '--LinearProgress-thickness': '24px',
      }}
      value={(pressure / max_pressure) * 100}
    >
      <Typography
        level="body-xs"
        fontWeight="xl"
        textColor="common.white"
        sx={{ mixBlendMode: 'difference' }}
      >
        Pressure (bar)
      </Typography>
    </LinearProgress>
  );
};

export default BrakePressure;
