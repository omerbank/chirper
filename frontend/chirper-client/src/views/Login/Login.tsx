import { useStyles } from './styles';
import { useForm } from 'react-hook-form';
import { LoginCredentials } from './types';
import { useLogin } from '../../services/users/hooks/useLogin';
import {
  Alert,
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
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import { LoadingSpinner } from '../../components/LoadingSpinner';

export const Login = () => {
  const classes = useStyles();

  const { register, handleSubmit } = useForm<LoginCredentials>();
  const { mutate, isPending, isError, error } = useLogin();

  return (
    <Grid container direction="column" alignItems="center" gap={3}>
      <Typography variant="h4">Login</Typography>
      <Box className={classes.fieldsAndSubmit}>
        <Divider />
        <Box className={classes.inputFields}>
          <FormControl className={classes.inputField}>
            <FormLabel>Username</FormLabel>
            <TextField
              {...register('username')}
              placeholder="Enter your username"
              autoComplete="off"
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
              {...register('password')}
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
          onClick={handleSubmit((data) => mutate(data))}
          variant="contained"
          size="large"
          className={classes.submitBtn}
          disableElevation
        >
          Login
        </Button>
        {isError && <Alert severity="error">{error.message}</Alert>}
      </Box>
      {isPending && <LoadingSpinner />}
    </Grid>
  );
};
