import { FC, ReactNode } from 'react';
import { CssBaseline } from '@mui/material';
import { UserProvider } from './services/contexts/UserContext';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';

export const App: FC<AppProps> = ({ customOutlet }) => {
  return (
    <>
      <CssBaseline />
      <UserProvider>
        <Navbar />
        {customOutlet ?? <Outlet />}
      </UserProvider>
    </>
  );
};

type AppProps = {
  customOutlet?: ReactNode;
};
