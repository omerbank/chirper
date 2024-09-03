import { FieldErrors, UseFormRegister, UseFormWatch } from 'react-hook-form';
import { SignUpCredentials } from './types';
import { DEFAULT_PASSWORD_PROPS, DEFAULT_USERNAME_PROPS } from '../constants';
import { Dispatch, SetStateAction } from 'react';
import { InputAdornment } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';

export const getUsernameSignUpInputProps = (
  register: UseFormRegister<SignUpCredentials>,
  errors: FieldErrors<SignUpCredentials>
) => ({
  ...DEFAULT_USERNAME_PROPS,
  ...register('username', { required: 'Username is required' }),
  placeholder: 'Enter a username',
  error: !!errors.username,
  helperText: errors.username?.message,
});

export const getPasswordSignUpInputProps = (
  register: UseFormRegister<SignUpCredentials>,
  errors: FieldErrors<SignUpCredentials>,
  showPassword: boolean,
  setShowPassword: Dispatch<SetStateAction<boolean>>
) => ({
  ...DEFAULT_PASSWORD_PROPS(showPassword, setShowPassword),
  ...register('password', { required: true, minLength: 8 }),
  placeholder: 'Enter a password',
  error: !!errors.password,
  helperText: errors.password && 'Password must be at least 8 characters',
});

export const getConfirmPasswordProps = (
  register: UseFormRegister<SignUpCredentials>,
  errors: FieldErrors<SignUpCredentials>,
  watch: UseFormWatch<SignUpCredentials>,
  showPassword: boolean,
  setShowPassword: Dispatch<SetStateAction<boolean>>
) => ({
  ...DEFAULT_PASSWORD_PROPS(showPassword, setShowPassword),
  ...register('confirmPassword', {
    required: true,
    validate: (value: string) => watch('password') === value,
  }),
  placeholder: 'Confirm the password',
  error: !!errors.confirmPassword,
  helperText: errors.confirmPassword && 'Passwords do not match',
});

export const getAvatarInputProps = (
  register: UseFormRegister<SignUpCredentials>
) => ({
  ...register('avatarUrl'),
  placeholder: 'Enter a profile picture URL',
  autoComplete: 'off',
  InputProps: {
    startAdornment: (
      <InputAdornment position="start">
        <ImageIcon />
      </InputAdornment>
    ),
  },
});
