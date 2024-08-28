import {
  Box,
  Button,
  Divider,
  FormControl,
  FormLabel,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import { useStyles } from './styles';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';

export const Login = () => {
  const classes = useStyles();

  return (
    <Grid container direction="column" alignItems="center" gap={3}>
      <Typography variant="h4">Login</Typography>
      <Box className={classes.fieldsAndSubmit}>
        <Divider />
        <Box className={classes.inputFields}>
          <FormControl className={classes.inputField}>
            <FormLabel>Username</FormLabel>
            <TextField
              placeholder="Enter your username"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon></PersonIcon>
                  </InputAdornment>
                ),
              }}
            />
          </FormControl>
          <FormControl className={classes.inputField}>
            <FormLabel>Password</FormLabel>
            <TextField
              type="password"
              placeholder="Enter your password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon></LockIcon>
                  </InputAdornment>
                ),
              }}
            />
          </FormControl>
        </Box>
        <Button
          variant="contained"
          size="large"
          className={classes.submitBtn}
          disableElevation
        >
          Login
        </Button>
      </Box>
    </Grid>
  );
};
