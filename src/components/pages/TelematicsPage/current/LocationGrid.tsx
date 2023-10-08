import { Grid, Typography } from '@mui/joy';
import { TelematicsData } from '~/utils';

type Props = {
  value: TelematicsData['coordinates'];
};

const LocationGrid = ({ value: { latitude, longitude } }: Props) => {
  return (
    <Grid
      data-testid="LocationGrid"
      container
      justifyContent="flex-end"
      alignItems="center"
    >
      <Grid xs={6}>
        <Typography textAlign="end" fontSize={25} level="body-lg">
          {latitude}
        </Typography>
      </Grid>
      <Grid xs={6}>
        <Typography textAlign="end" fontSize={25} level="body-lg">
          {longitude}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default LocationGrid;
