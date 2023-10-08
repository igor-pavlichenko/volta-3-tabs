import { Stack, Typography } from '@mui/joy';

type Props = {
  value: number;
};

const Speed = ({ value }: Props) => {
  return (
    <Stack direction="column" marginX="auto" alignItems="center" gap={0}>
      <Typography textAlign="center" level="h1" fontSize={100}>
        {value}
      </Typography>
      <Typography textAlign="center" level="h4" fontSize={30}>
        km/h
      </Typography>
    </Stack>
  );
};

export default Speed;
