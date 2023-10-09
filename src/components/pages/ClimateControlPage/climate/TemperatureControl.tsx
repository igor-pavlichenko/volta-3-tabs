import { IconButton, Slider, Stack, Typography } from '@mui/joy';
import { useContext } from 'react';
import { BsSnow, BsSunFill } from 'react-icons/bs';
import { ClimateControlContext } from './climateControlContext';

const TemperatureControl = () => {
  const { targetTemp, acMode, handleHeat, handleCool, handleTempChange } =
    useContext(ClimateControlContext);

  return (
    <>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <IconButton
          size="lg"
          sx={{ width: 160, height: 160, opacity: '0.7' }}
          variant="outlined"
          {...(acMode === 'cool' && {
            variant: 'soft',
            color: 'primary',
          })}
          onClick={handleCool}
        >
          <BsSnow className="MyIcon" style={{ fontSize: 64 }} />
        </IconButton>

        <Typography fontSize={80}>{targetTemp}ºC</Typography>

        <IconButton
          size="lg"
          sx={{ width: 160, height: 160, opacity: '0.7' }}
          variant="outlined"
          {...(acMode === 'heat' && {
            variant: 'soft',
            color: 'warning',
          })}
          onClick={handleHeat}
        >
          <BsSunFill className="MyIcon" style={{ fontSize: 64 }} />
        </IconButton>
      </Stack>

      <Slider
        size="lg"
        color={acMode === 'cool' ? 'primary' : 'warning'}
        value={targetTemp}
        onChange={handleTempChange}
        step={1}
        marks
        min={16}
        max={30}
        sx={{
          opacity: 0.4,
          '--Slider-trackSize': '40px',
          '--Slider-markSize': '4px',
          '--Slider-thumbSize': '40px',
        }}
      />
    </>
  );
};

export default TemperatureControl;
