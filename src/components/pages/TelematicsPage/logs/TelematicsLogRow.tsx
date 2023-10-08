import { format } from 'date-fns';
import { TelematicsLog } from '~/app/api/telematics/route';

type Props = {
  log: TelematicsLog;
};

const TelematicsLogRow = ({ log }: Props) => {
  const {
    timestamp,
    coordinates: { latitude, longitude },
    speed,
    battery_level,
    battery_temperature,
    tire_pressure,
  } = log;
  return (
    <tr>
      <td>{format(new Date(timestamp), 'yyyy/MM/dd H:mm')}</td>
      <td>{`${latitude}, ${longitude}`}</td>
      <td>{speed} km/h</td>
      <td>{`${battery_level}% ${battery_temperature}ºC`}</td>
    </tr>
  );
};

export default TelematicsLogRow;
