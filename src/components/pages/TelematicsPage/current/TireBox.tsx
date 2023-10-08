import { Box, Typography } from '@mui/joy';

type Props = {
  pressure: number;
};

const TireBox = ({ pressure }: Props) => {
  return (
    <Box
      sx={{
        width: 30,
        height: 50,
        bgcolor: pressure > 7 ? 'success.softBg' : 'warning.softBg',
        borderRadius: 6,
        textAlign: 'center',
        paddingY: '0.7rem',
      }}
    >
      <Typography level="title-md" fontWeight={600}>
        {pressure}
      </Typography>
    </Box>
  );
};

export default TireBox;
