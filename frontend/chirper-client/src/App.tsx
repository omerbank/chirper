import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { FC, ReactNode } from 'react';
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import { UserProvider } from './services/contexts/UserContext';
import { Navbar } from './components/Navbar';
import { Outlet } from 'react-router-dom';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      throwOnError: true,
      retry: false,
    },
  },
});

export const App: FC<AppProps> = ({ customOutlet }) => {
  return (
    <>
      <CssBaseline />
      <UserProvider>
        <QueryClientProvider client={queryClient}>
          <StyledEngineProvider injectFirst>
            <Navbar />
            {customOutlet ?? <Outlet />}
          </StyledEngineProvider>
        </QueryClientProvider>
      </UserProvider>
    </>
  );
};

type AppProps = {
  customOutlet?: ReactNode;
};
