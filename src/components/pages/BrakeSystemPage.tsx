import { useQuery } from '@tanstack/react-query';
import { BrakeStatusData } from '~/app/api/brake-system/status/route';

type Props = {};

const BrakeSystemPage = (props: Props) => {
  const endpoint = '/api/brake-system/status';
  const { data } = useQuery<BrakeStatusData>({
    queryKey: [endpoint],
    queryFn: async () => (await fetch(endpoint)).json(),
  });
  return (
    <div>
      {data?.map((b) => (
        <div key={b.position} style={{ padding: 16 }}>
          <p>{b.position}</p>
          <p>{b.type}</p>
          <p>
            Pressure: {b.pressure}/{b.max_pressure}
          </p>
          <p>Temperature: {b.temperature}ºC</p>
        </div>
      ))}
    </div>
  );
};

export default BrakeSystemPage;
