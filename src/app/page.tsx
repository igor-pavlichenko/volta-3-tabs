'use client';
import { useEffect, useState } from 'react';
import { BrakeUnit } from './api/brake-system/status/route';

export default function Home() {
  const [data, setData] = useState<Array<BrakeUnit>>([]);

  useEffect(() => {
    fetch('/api/brake-system/status').then(async (response) => {
      const json = (await response.json()) as Array<BrakeUnit>;
      setData(json);
    });
  }, []);

  return (
    <main>
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
    </main>
  );
}
