import { AppBar, Toolbar, Typography } from '@mui/material';

export default function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#347380', mb: 3 }}>
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
      </Toolbar>
    </AppBar>
  );
}
