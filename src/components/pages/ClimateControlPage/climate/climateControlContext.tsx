import { PropsWithChildren, createContext, useCallback, useState } from 'react';
import { useAddClimateControlLog } from '../climateHooks';

type ClimateControlContextType = {
  fanLevel: number;
  targetTemp: number;
  acMode: 'heat' | 'cool';
  handleIncreaseFan: () => void;
  handleDecreaseFan: () => void;
  handleHeat: () => void;
  handleCool: () => void;
  handleTempChange: (
    event: Event,
    value: number | number[],
    activeThumb: number,
  ) => void;
};

export const ClimateControlContext = createContext<ClimateControlContextType>({
  fanLevel: 0,
  targetTemp: 16,
  acMode: 'cool',
  handleIncreaseFan: () => {},
  handleDecreaseFan: () => {},
  handleHeat: () => {},
  handleCool: () => {},
  handleTempChange: () => {},
});

const ClimateControlProvider = ({ children }: PropsWithChildren) => {
  const [fanLevel, setFanLevel] = useState(2);
  const [targetTemp, setTargetTemp] = useState(23);
  const [acMode, setAcMode] = useState<'heat' | 'cool'>('cool');
  const { mutate: addInteractionLog } = useAddClimateControlLog();

  const handleIncreaseFan = useCallback(() => {
    if (fanLevel < 4) {
      setFanLevel((prev) => {
        addInteractionLog({ type: 'fanLevel changed', value: prev + 1 });
        return prev + 1;
      });
    }
  }, [addInteractionLog, fanLevel]);

  const handleDecreaseFan = useCallback(() => {
    if (fanLevel > 0) {
      setFanLevel((prev) => {
        addInteractionLog({ type: 'fanLevel changed', value: prev - 1 });
        return prev - 1;
      });
    }
  }, [addInteractionLog, fanLevel]);

  const handleHeat = useCallback(() => {
    if (acMode !== 'heat') {
      setAcMode('heat');
      addInteractionLog({ type: 'acModeChanged', value: 'heat' });
    }
  }, [acMode, addInteractionLog]);
  const handleCool = useCallback(() => {
    if (acMode !== 'cool') {
      setAcMode('cool');
      addInteractionLog({ type: 'acModeChanged', value: 'cool' });
    }
  }, [acMode, addInteractionLog]);

  const handleTempChange = useCallback(
    (event: Event, value: number | number[], activeThumb: number) => {
      if (typeof value === 'number') {
        setTargetTemp(value);
        addInteractionLog({ type: 'targetTemp changed', value: `${value}ºC` });
      }
    },
    [addInteractionLog],
  );

  return (
    <ClimateControlContext.Provider
      value={{
        fanLevel,
        targetTemp,
        acMode,
        handleIncreaseFan,
        handleDecreaseFan,
        handleHeat,
        handleCool,
        handleTempChange,
      }}
    >
      {children}
    </ClimateControlContext.Provider>
  );
};
export default ClimateControlProvider;
