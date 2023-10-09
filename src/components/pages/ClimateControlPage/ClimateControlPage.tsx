'use client';

import { Stack } from '@mui/joy';
import { useState } from 'react';
import RadioTab from '~/components/radio-tabs/RadioTab';
import RadioTabsGroup from '~/components/radio-tabs/RadioTabsGroup';
import ClimateControl from './climate/ClimateControl';
import ClimateControlProvider from './climate/climateControlContext';

type BrakeSystemTab = 'climate' | 'logs';

// climate control instead, and then log everything on each change caused by user
const ClimateControlPage = () => {
  const [tab, setTab] = useState<BrakeSystemTab>('climate');
  return (
    <Stack width="100%">
      <RadioTabsGroup
        value={tab}
        onChange={({ target }) => setTab(target.value as BrakeSystemTab)}
      >
        <RadioTab value="climate" label="Climate" />
        <RadioTab value="logs" label="Logs" />
      </RadioTabsGroup>

      <ClimateControlProvider>
        {tab === 'climate' && <ClimateControl />}
      </ClimateControlProvider>
      {tab === 'logs' && <div>logs</div>}
    </Stack>
  );
};

export default ClimateControlPage;
