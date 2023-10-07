import { BrakesMaintenanceEntry } from '~/app/api/brake-system/maintenance/route';

type Props = {
  entry: BrakesMaintenanceEntry;
};

const BrakeMaintenanceEntryRow = ({ entry }: Props) => {
  const { maintenance_type, odometer, maintenance_date, mechanic } = entry;
  return (
    <tr>
      <td>{maintenance_type}</td>
      <td>{odometer} KMs</td>
      <td>{maintenance_date}</td>
      <td>{mechanic}</td>
    </tr>
  );
};

export default BrakeMaintenanceEntryRow;
