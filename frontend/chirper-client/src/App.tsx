import { GlobalStyles } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './views/Home';

export default function App() {
  return (
    <>
      <GlobalStyles
        styles={{ body: { margin: 0, padding: 0, marginBottom: 25 } }}
      />
      <Navbar />
      <Home />
    </>
  );
}
