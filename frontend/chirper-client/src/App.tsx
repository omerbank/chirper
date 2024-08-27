import { FC, ReactNode } from 'react';
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import { UserProvider } from './services/contexts/UserContext';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';

export const App: FC<AppProps> = ({ customOutlet }) => {
  return (
    <>
      <CssBaseline />
      <UserProvider>
        <StyledEngineProvider injectFirst>
          <Navbar />
          {customOutlet ?? <Outlet />}
        </StyledEngineProvider>
      </UserProvider>
    </>
  );
};

type AppProps = {
  customOutlet?: ReactNode;
};
