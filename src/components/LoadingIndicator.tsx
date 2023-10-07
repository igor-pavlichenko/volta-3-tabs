import { Box, LinearProgress } from '@mui/joy';

type Props = {
  loading: boolean;
};

const LoadingIndicator = ({ loading }: Props) => {
  return (
    <Box
      sx={{
        marginTop: 1,
        width: '100%',
        opacity: loading ? 1 : 0,
      }}
    >
      <LinearProgress />
    </Box>
  );
};

export default LoadingIndicator;
