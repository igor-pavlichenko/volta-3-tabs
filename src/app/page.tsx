'use client';
import { CssBaseline, CssVarsProvider, GlobalStyles } from '@mui/joy';
import { QueryClientProvider } from '@tanstack/react-query';
import TabsContainer from '~/components/navigation-tabs-layout/TabsContainer';
import { queryClient } from '~/queryClient';

export default function Home() {
  return (
    <CssBaseline>
      <CssVarsProvider defaultMode="dark">
        <GlobalStyles
          styles={{
            // We recommend using a class over a tag if possible.
            '.RadixIcon': {
              color: 'var(--Icon-color)',
              margin: 'var(--Icon-margin)',
              fontSize: 'var(--Icon-fontSize, 20px)',
              width: '1em',
              height: '1em',
            },
          }}
        />
        <QueryClientProvider client={queryClient}>
          <TabsContainer />
        </QueryClientProvider>
      </CssVarsProvider>
    </CssBaseline>
  );
}
