import { RadioGroup, RadioGroupProps } from '@mui/joy';

type Props = RadioGroupProps;

const RadioTabsGroup = (props: Props) => {
  return (
    <RadioGroup
      orientation="horizontal"
      {...props}
      sx={{
        gap: '0.5rem',
        minHeight: 48,
        padding: '0.5rem',
        borderRadius: '12px',
        bgcolor: 'neutral.softBg',
        flexGrow: 1,
        justifyContent: 'stretch',
        '--RadioGroup-gap': '4px',
        '--Radio-actionRadius': '8px',
      }}
    />
  );
};

export default RadioTabsGroup;
