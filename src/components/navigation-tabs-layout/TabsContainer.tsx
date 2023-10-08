'use client';
import { Box, CircularProgress, Sheet, Stack, Typography } from '@mui/joy';
import { useQuery } from '@tanstack/react-query';
import { MemoryRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AvailableBoardsData } from '~/app/api/available-boards/route';
import BrakeSystemPage from '../pages/BrakeSystemPage/BrakeSystemPage';
import ClimateControlPage from '../pages/ClimateControlPage/ClimateControlPage';
import TelematicsPage from '../pages/TelematicsPage/TelematicsPage';
import NavBar from './NavBar';

const TabsContainer = () => {
  const endpoint = '/api/available-boards';
  const { data, isLoading } = useQuery<AvailableBoardsData>({
    queryKey: [endpoint],
    queryFn: async () => (await fetch(endpoint)).json(),
  });
  const availableBoards = data ?? [];

  return (
    <Box display="flex" justifyContent="center" width="100%">
      <MemoryRouter>
        <Stack
          alignItems="center"
          gap={6}
          py={{ xs: 3, md: 5 }}
          px={{ xs: 3, md: 6 }}
          overflow="auto"
          flexGrow={1}
          minWidth={500}
          maxWidth={700}
        >
          <NavBar boards={availableBoards} />

          <Sheet
            variant="plain"
            sx={{
              width: '100%',
              padding: 3,
              borderRadius: 8,
              minHeight: 700,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {isLoading && (
              <Stack direction="row" justifyContent="center">
                <CircularProgress size="lg" />
              </Stack>
            )}

            {!availableBoards.length && !isLoading && (
              <Typography level="h3" textAlign="center">
                No available boards
              </Typography>
            )}

            <Routes>
              {availableBoards.length && (
                <Route
                  path="/"
                  element={<Navigate to={'/' + availableBoards[0]} replace />}
                />
              )}
              <Route path="/telematics" element={<TelematicsPage />} />
              <Route path="/brake-system" element={<BrakeSystemPage />} />
              <Route path="/climate-control" element={<ClimateControlPage />} />
            </Routes>
          </Sheet>
        </Stack>
      </MemoryRouter>
    </Box>
  );
};

export default TabsContainer;
