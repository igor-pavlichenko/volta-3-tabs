'use client';

import { useQuery } from '@tanstack/react-query';

type Props = {};

const TabsContainer = (props: Props) => {
  const { data } = useQuery({
    queryKey: ['available-boards'],
    queryFn: async () => (await fetch('/api/available-boards')).json(),
  });

  console.log('data: ', data);
  return (
    <main>
      <div data-testid="company_logo">Volta</div>
      {/* {data?.map((b) => (
              <div key={b.position} style={{ padding: 16 }}>
                <p>{b.position}</p>
                <p>{b.type}</p>
                <p>
                  Pressure: {b.pressure}/{b.max_pressure}
                </p>
                <p>Temperature: {b.temperature}ºC</p>
              </div>
            ))} */}
    </main>
  );
};

export default TabsContainer;
