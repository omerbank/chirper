import { useStyles } from '../styles';
import { useForm } from 'react-hook-form';
import { LoginCredentials } from './types';
import { useState } from 'react';
import { useLogin } from '../../services/users/hooks/useLogin';
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Divider,
  FormControl,
  FormLabel,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import { getPasswordLoginProps, getUsernameLoginProps } from './utils';

export const Login = () => {
  const classes = useStyles();

  const { register, handleSubmit } = useForm<LoginCredentials>();
  const [showPassword, setShowPassword] = useState(false);
  const { mutate, isPending, isError, error } = useLogin();

  return (
    <Grid container direction="column" alignItems="center" gap={3}>
      <Typography variant="h4">Login</Typography>
      <Box className={classes.fieldsAndSubmit}>
        <Divider />
        <Box className={classes.inputFields}>
          <FormControl className={classes.inputField}>
            <FormLabel>Username</FormLabel>
            <TextField {...getUsernameLoginProps(register)} />
          </FormControl>
          <FormControl className={classes.inputField}>
            <FormLabel>Password</FormLabel>
            <TextField
              {...getPasswordLoginProps(
                register,
                showPassword,
                setShowPassword
              )}
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
      {isPending && <CircularProgress />}
    </Grid>
  );
};
