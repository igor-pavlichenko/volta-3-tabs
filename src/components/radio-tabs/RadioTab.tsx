import { Radio, RadioProps } from '@mui/joy';

type Props = RadioProps;

const RadioTab = (props: Props) => {
  return (
    <Radio
      color="neutral"
      disableIcon
      size="lg"
      variant="plain"
      {...props}
      sx={{
        padding: 2,
        alignItems: 'center',
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: 600,
        flexGrow: 1,
      }}
      slotProps={{
        label: ({ checked }) => ({
          sx: {
            ...(checked && {
              color: 'primary.softColor',
              textShadow: '0 0 0.1em',
            }),
          },
        }),
        action: ({ checked }) => ({
          sx: {
            ...(checked && {
              bgcolor: 'background.surface',
              boxShadow: 'sm',
              '&:hover': {
                bgcolor: 'background.surface',
              },
            }),
          },
        }),
      }}
    />
  );
};

export default RadioTab;