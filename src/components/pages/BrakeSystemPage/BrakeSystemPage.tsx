'use client';

import { Stack } from '@mui/joy';
import { useState } from 'react';
import RadioTab from '~/components/radio-tabs/RadioTab';
import RadioTabsGroup from '~/components/radio-tabs/RadioTabsGroup';
import BrakeSystemMaintenance from './maintenance/BrakeSystemMaintenance';
import BrakeSystemStatus from './status/BrakeSystemStatus';

type BrakeSystemTab = 'status' | 'maintenance';
type Props = {};

const BrakeSystemPage = (props: Props) => {
  const [tab, setTab] = useState<BrakeSystemTab>('status');
  return (
    <Stack width="100%">
      <RadioTabsGroup
        value={tab}
        onChange={({ target }) => setTab(target.value as BrakeSystemTab)}
      >
        <RadioTab value="status" label="Status" />
        <RadioTab value="maintenance" label="Maintenance" />
      </RadioTabsGroup>

      {tab === 'status' && <BrakeSystemStatus />}
      {tab === 'maintenance' && <BrakeSystemMaintenance />}
    </Stack>
  );
};

export default BrakeSystemPage;
