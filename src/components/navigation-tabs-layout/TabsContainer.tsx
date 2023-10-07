'use client';

import { Box, Sheet, Stack } from '@mui/joy';
import { useQuery } from '@tanstack/react-query';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import BrakeSystemPage from '../pages/BrakeSystemPage/BrakeSystemPage';
import NavigationPage from '../pages/NavigationPage';
import TelematicsPage from '../pages/TelematicsPage';
import NavBar from './NavBar';

type Props = {};

const TabsContainer = (props: Props) => {
  const endpoint = '/api/available-boards';
  const { data } = useQuery({
    queryKey: [endpoint],
    queryFn: async () => (await fetch(endpoint)).json(),
  });

  console.log('data: ', data);
  return (
    <Box display="flex" justifyContent="center" width="100%">
      <BrowserRouter>
        <Stack
          alignItems="center"
          gap={6}
          py={{ xs: 3, md: 5 }}
          px={{ xs: 3, md: 6 }}
          overflow="auto"
          flexGrow={1}
          minWidth={500}
          maxWidth={600}
        >
          <NavBar />

          <Sheet
            variant="plain"
            sx={{ width: '100%', padding: 3, borderRadius: 8, minHeight: 700 }}
          >
            <Routes>
              <Route path="/" element={<Navigate to="/telematics" replace />} />
              <Route path="/brake-system" element={<BrakeSystemPage />} />
              <Route path="/telematics" element={<TelematicsPage />} />
              <Route path="/navigation" element={<NavigationPage />} />
            </Routes>
          </Sheet>
        </Stack>
      </BrowserRouter>
    </Box>
  );
};

export default TabsContainer;
