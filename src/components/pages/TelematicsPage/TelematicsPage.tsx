'use client';
import { Stack } from '@mui/joy';
import { useEffect, useState } from 'react';
import RadioTab from '~/components/radio-tabs/RadioTab';
import RadioTabsGroup from '~/components/radio-tabs/RadioTabsGroup';
import { generateRandomTelematicsData } from '~/utils';
import { useAddTelematicsLog, useGetTelematicsLogs } from './telematicsHooks';

type TelematicsTab = 'state' | 'logs';

const TelematicsPage = () => {
  const [tab, setTab] = useState<TelematicsTab>('state');

  const { data: logs } = useGetTelematicsLogs();
  const { mutate: addLog } = useAddTelematicsLog();

  useEffect(() => {
    // in localhost this will actually trigger 2 requests... react caveat
    const interval = setInterval(() => {
      const newLog = generateRandomTelematicsData();
      addLog(newLog);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [addLog]);

  return (
    <Stack width="100%">
      <RadioTabsGroup
        value={tab}
        onChange={({ target }) => setTab(target.value as TelematicsTab)}
      >
        <RadioTab value="state" label="Current state" />
        <RadioTab value="logs" label="Logs" />
      </RadioTabsGroup>

      {tab === 'state' && <div>Vehicle state</div>}
      {tab === 'logs' && (
        <div>
          {logs?.map((log) => (
            <p key={log.timestamp}>{log.timestamp}</p>
          ))}
        </div>
      )}
    </Stack>
  );
};

export default TelematicsPage;
