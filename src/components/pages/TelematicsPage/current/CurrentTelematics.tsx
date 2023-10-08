import { Grid, Stack, Typography } from '@mui/joy';
import { TelematicsData } from '~/utils';
import Battery from './Battery';
import Speed from './Speed';

type Props = {
  data: TelematicsData;
};

const CurrentTelematics = ({ data }: Props) => {
  return (
    <Stack gap={2}>
      <Grid container>
        <Grid xs={6}>
          <Battery
            level={data.battery_level}
            temperature={data.battery_temperature}
          />
        </Grid>
        <Grid xs={6}>
          <Typography fontSize={25} level="body-lg">
            {}
          </Typography>
        </Grid>
      </Grid>
      <Speed value={data.speed} />
    </Stack>
  );
};

export default CurrentTelematics;
