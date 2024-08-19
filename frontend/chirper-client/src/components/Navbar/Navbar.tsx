import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import CustomButton from '../CustomButton';
import { CustomButtonOptions } from '../CustomButton/types';

export default function Navbar() {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: '#347380', mb: 5, pr: 2, boxShadow: 'none' }}
    >
      <Toolbar sx={{ padding: 1, display: 'flex', gap: 1 }} disableGutters>
        <img src="/chirper.svg" alt="Chirper Logo" width="75" />
        <Typography
          variant="h5"
          sx={{
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
          }}
        >
          CHIRPER
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, ml: 'auto' }}>
          <CustomButton options={logInButtonOptions}></CustomButton>
          <CustomButton options={signUpButtonOptions}></CustomButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

const logInButtonOptions: CustomButtonOptions = {
  variant: 'contained',
  size: 'large',
  textColor: 'black',
  backgroundColor: 'white',
  hoverColor: '#d9d9d9',
  text: 'Log in',
};

const signUpButtonOptions: CustomButtonOptions = {
  variant: 'contained',
  size: 'large',
  textColor: 'white',
  backgroundColor: '#164e58',
  hoverColor: '#13424b',
  text: 'Sign Up',
};
