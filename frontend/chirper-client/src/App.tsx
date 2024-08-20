import { CssBaseline } from '@mui/material';
import UserProvider from './services/contexts/UserContext';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';
import { ReactNode } from 'react';

export default function App({ outlet }: AppProps) {
  return (
    <>
      <CssBaseline />
      <UserProvider>
        <Navbar />
        {outlet ?? <Outlet />}
      </UserProvider>
    </>
  );
}

type AppProps = {
  outlet?: ReactNode;
};
