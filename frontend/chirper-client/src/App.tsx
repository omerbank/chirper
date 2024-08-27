import { CssBaseline, StyledEngineProvider } from '@mui/material';
import UserProvider from './services/contexts/UserContext';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';
import { ReactNode } from 'react';

export default function App({ outlet }: AppProps) {
  return (
    <>
      <CssBaseline />
      <UserProvider>
        <StyledEngineProvider injectFirst>
          <Navbar />
          {outlet ?? <Outlet />}
        </StyledEngineProvider>
      </UserProvider>
    </>
  );
}

type AppProps = {
  outlet?: ReactNode;
};
