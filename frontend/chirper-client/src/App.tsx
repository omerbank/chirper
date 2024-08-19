import { CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './views/Home';
import UserProvider from './services/contexts/UserContext';

export default function App() {
  return (
    <UserProvider>
      <CssBaseline />
      <Navbar />
      <Home />
    </UserProvider>
  );
}
