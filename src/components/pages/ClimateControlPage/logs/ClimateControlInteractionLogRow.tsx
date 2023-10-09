import { format } from 'date-fns';
import { ClimateControlInteractionLog } from '~/app/api/climate-control/logs/route';

type Props = {
  log: ClimateControlInteractionLog;
};

const ClimateControlInteractionLogRow = ({ log }: Props) => {
  const { type, value, uuid, timestamp } = log;
  return (
    <tr>
      <td>{format(new Date(timestamp), 'yyyy/MM/dd H:mm:ss')}</td>
      <td>{type}</td>
      <td>{value}</td>
    </tr>
  );
};

export default ClimateControlInteractionLogRow;
