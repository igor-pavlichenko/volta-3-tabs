import { Table } from '@mui/joy';
import LoadingIndicator from '~/components/LoadingIndicator';
import { useGetClimateControlLogs } from '../climateHooks';
import ClimateControlInteractionLogRow from './ClimateControlInteractionLogRow';

const ClimateControlInteractionLogs = () => {
  const { data: logs, isFetching } = useGetClimateControlLogs();
  return (
    <>
      <LoadingIndicator loading={isFetching} />
      <Table>
        <thead>
          <tr>
            <th>Timestamp</th>
            <th>Interaction type</th>
            <th>New value</th>
          </tr>
        </thead>
        <tbody>
          {logs?.map((log) => (
            <ClimateControlInteractionLogRow key={log.uuid} log={log} />
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default ClimateControlInteractionLogs;
