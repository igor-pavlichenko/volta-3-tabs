import { Table } from '@mui/joy';
import { TelematicsLog } from '~/app/api/telematics/route';
import TelematicsLogRow from './TelematicsLogRow';

type Props = {
  logs: Array<TelematicsLog>;
};

const TelematicsLogs = ({ logs }: Props) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Timestamp</th>
          <th>Coordinates</th>
          <th>Speed</th>
          <th>Battery</th>
        </tr>
      </thead>
      <tbody>
        {logs.map((log) => (
          <TelematicsLogRow key={log.uuid} log={log} />
        ))}
      </tbody>
    </Table>
  );
};

export default TelematicsLogs;
