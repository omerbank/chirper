import { FC, ReactNode } from 'react';
import { UserProvider } from './services/contexts/UserContext';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './query-client';
import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from '@mui/material';
import { theme } from './services/contexts/theme';
import { Navbar } from './components/Navbar';
import { Outlet } from 'react-router-dom';

export const App: FC<AppProps> = ({ customOutlet }) => {
  return (
    <>
      <UserProvider>
        <QueryClientProvider client={queryClient}>
          <CssBaseline />
          <ThemeProvider theme={theme}>
            <StyledEngineProvider injectFirst>
              <Navbar />
              {customOutlet ?? <Outlet />}
            </StyledEngineProvider>
          </ThemeProvider>
        </QueryClientProvider>
      </UserProvider>
    </>
  );
};

type AppProps = {
  customOutlet?: ReactNode;
};
