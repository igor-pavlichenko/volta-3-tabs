import { IconButton, Sheet, Stack } from '@mui/joy';
import { useContext } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa6';
import { PiFanFill } from 'react-icons/pi';
import stylesheet from './FanControl.module.css';
import { ClimateControlContext } from './climateControlContext';

function getFanRotationClass(fanLevel: number) {
  if (fanLevel === 1) return stylesheet.fanRotation1;
  if (fanLevel === 2) return stylesheet.fanRotation2;
  if (fanLevel === 3) return stylesheet.fanRotation3;
  if (fanLevel === 4) return stylesheet.fanRotation4;
  return '';
}

const FanControl = () => {
  const { fanLevel, handleIncreaseFan, handleDecreaseFan } = useContext(
    ClimateControlContext,
  );

  return (
    <Sheet>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <IconButton
          size="lg"
          sx={{ width: 64, height: 64 }}
          variant="soft"
          onClick={handleDecreaseFan}
        >
          <FaMinus className="MyIcon" />
        </IconButton>
        <Stack direction="row" gap={1} fontSize={30} alignItems="center">
          {fanLevel}
          <PiFanFill
            style={{ fontSize: 64 }}
            className={'MyIcon ' + getFanRotationClass(fanLevel)}
          />
        </Stack>
        <IconButton
          size="lg"
          sx={{ width: 64, height: 64 }}
          variant="soft"
          onClick={handleIncreaseFan}
        >
          <FaPlus className="MyIcon" />
        </IconButton>
      </Stack>
    </Sheet>
  );
};

export default FanControl;
