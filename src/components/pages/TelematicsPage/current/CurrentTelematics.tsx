import { Grid, Stack } from '@mui/joy';
import { TelematicsData } from '~/utils';
import Battery from './Battery';
import LocationGrid from './LocationGrid';
import Speed from './Speed';

type Props = {
  data: TelematicsData;
};

const CurrentTelematics = ({ data }: Props) => {
  return (
    <Stack gap={4} marginTop={3}>
      <Grid container>
        <Grid xs={6}>
          <Battery
            level={data.battery_level}
            temperature={data.battery_temperature}
          />
        </Grid>
        <Grid xs={6}>
          <LocationGrid value={data.coordinates} />
        </Grid>
      </Grid>
      <Speed value={data.speed} />
    </Stack>
  );
};

export default CurrentTelematics;
