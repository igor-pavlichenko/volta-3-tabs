'use client';
import { Stack } from '@mui/joy';
import { useEffect, useState } from 'react';
import LoadingIndicator from '~/components/LoadingIndicator';
import RadioTab from '~/components/radio-tabs/RadioTab';
import RadioTabsGroup from '~/components/radio-tabs/RadioTabsGroup';
import { generateRandomTelematicsData } from '~/utils';
import CurrentTelematics from './current/CurrentTelematics';
import { useAddTelematicsLog, useGetTelematicsLogs } from './telematicsHooks';

type TelematicsTab = 'state' | 'logs';

const TelematicsPage = () => {
  const [tab, setTab] = useState<TelematicsTab>('state');
  const [data, setData] = useState(generateRandomTelematicsData());

  const { data: logs, isFetching: isFetchingLogs } = useGetTelematicsLogs();
  const { mutate: addLog } = useAddTelematicsLog();

  useEffect(() => {
    // in localhost this will actually trigger 2 requests... react caveat
    const interval = setInterval(() => {
      const newData = generateRandomTelematicsData();
      setData(newData);
      addLog(newData);
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

      <LoadingIndicator loading={tab === 'logs' && isFetchingLogs} />

      {tab === 'state' && data && <CurrentTelematics data={data} />}
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
