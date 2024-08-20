import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import CustomButton from '../CustomButton';
import { logInButtonOptions, signUpButtonOptions } from './styles';

export default function Navbar() {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{ background: '#347380', mb: 5, pr: 2 }}
    >
      <Toolbar sx={{ p: 1, display: 'flex', gap: 1 }} disableGutters>
        <Link to="">
          <img src="/chirper.svg" alt="Chirper Logo" width="75" />
        </Link>
        <Typography
          variant="h5"
          sx={{
            fontFamily: 'monospace',
            fontWeight: 600,
            letterSpacing: '.3rem',
          }}
        >
          CHIRPER
        </Typography>
        <Box sx={{ ml: 'auto', display: 'flex', gap: 2 }}>
          <CustomButton options={logInButtonOptions}></CustomButton>
          <CustomButton options={signUpButtonOptions}></CustomButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
