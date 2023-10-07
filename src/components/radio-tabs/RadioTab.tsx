import { Radio, RadioProps } from '@mui/joy';

type Props = RadioProps;

const RadioTab = (props: Props) => {
  return (
    <Radio
      data-testid={props.name ?? props.value}
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
            '&:active': {
              bgcolor: (theme) => theme.palette.background.body,
            },
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
