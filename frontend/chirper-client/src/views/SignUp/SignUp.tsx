import { useStyles } from '../styles';
import { useForm } from 'react-hook-form';
import { SignUpCredentials } from './types';
import { useState } from 'react';
import { useSignUp } from '../../services/users/hooks/useSignUp';
import {
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
import {
  getAvatarInputProps,
  getConfirmPasswordProps,
  getPasswordSignUpInputProps,
  getUsernameSignUpInputProps,
} from './utils';

export const SignUp = () => {
  const classes = useStyles();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<SignUpCredentials>();
  const [showPassword, setShowPassword] = useState(false);
  const { mutate, isPending } = useSignUp();

  return (
    <Grid container direction="column" alignItems="center" gap={3}>
      <Typography variant="h4">Sign Up</Typography>
      <Box className={classes.fieldsAndSubmit}>
        <Divider />
        <Box className={classes.inputFields}>
          <FormControl className={classes.inputField}>
            <FormLabel>Username</FormLabel>
            <TextField {...getUsernameSignUpInputProps(register, errors)} />
          </FormControl>
          <FormControl className={classes.inputField}>
            <FormLabel>Password</FormLabel>
            <TextField
              {...getPasswordSignUpInputProps(
                register,
                errors,
                showPassword,
                setShowPassword
              )}
            />
          </FormControl>
          <FormControl className={classes.inputField}>
            <FormLabel>Confirm Password</FormLabel>
            <TextField
              {...getConfirmPasswordProps(
                register,
                errors,
                watch,
                showPassword,
                setShowPassword
              )}
            />
          </FormControl>
          <FormControl className={classes.inputField}>
            <FormLabel>Profile Picture URL (Optional)</FormLabel>
            <TextField {...getAvatarInputProps(register)} />
          </FormControl>
        </Box>
        <Button
          onClick={handleSubmit((data) => mutate(data))}
          variant="contained"
          size="large"
          className={classes.submitBtn}
          disableElevation
        >
          Sign Up
        </Button>
      </Box>
      {isPending && <CircularProgress />}
    </Grid>
  );
};
