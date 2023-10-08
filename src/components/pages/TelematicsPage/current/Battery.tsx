import { Grid, Typography } from '@mui/joy';
import {
  FaBatteryEmpty,
  FaBatteryFull,
  FaBatteryHalf,
  FaBatteryQuarter,
  FaBatteryThreeQuarters,
} from 'react-icons/fa6';

type Props = {
  level: number;
  temperature: number;
};

const Battery = ({ level, temperature }: Props) => {
  return (
    <Grid data-testid="Battery" container alignItems="center">
      <Grid height={40} xs={3}>
        {(function () {
          if (level < 20) {
            return (
              <FaBatteryEmpty style={{ fontSize: 40 }} className="MyIcon" />
            );
          } else if (level < 40) {
            return (
              <FaBatteryQuarter style={{ fontSize: 40 }} className="MyIcon" />
            );
          } else if (level < 60) {
            return (
              <FaBatteryHalf style={{ fontSize: 40 }} className="MyIcon" />
            );
          } else if (level < 80) {
            return (
              <FaBatteryThreeQuarters
                style={{ fontSize: 40 }}
                className="MyIcon"
              />
            );
          } else {
            return (
              <FaBatteryFull style={{ fontSize: 40 }} className="MyIcon" />
            );
          }
        })()}
      </Grid>

      <Grid xs={4}>
        <Typography textAlign="center" fontSize={25} level="body-lg">
          {level * 2} km
        </Typography>
      </Grid>
      <Grid xs={4}>
        <Typography textAlign="center" fontSize={25} level="body-lg">
          {temperature}ºC
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Battery;
