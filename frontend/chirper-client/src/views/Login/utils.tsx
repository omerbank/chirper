import { UseFormRegister } from 'react-hook-form';
import { LoginCredentials } from './types';
import { DEFAULT_PASSWORD_PROPS, DEFAULT_USERNAME_PROPS } from '../constants';
import { Dispatch, SetStateAction } from 'react';

export const getUsernameLoginProps = (
  register: UseFormRegister<LoginCredentials>
) => ({
  ...DEFAULT_USERNAME_PROPS,
  ...register('username'),
  placeholder: 'Enter your username',
});

export const getPasswordLoginProps = (
  register: UseFormRegister<LoginCredentials>,
  showPassword: boolean,
  setShowPassword: Dispatch<SetStateAction<boolean>>
) => ({
  ...DEFAULT_PASSWORD_PROPS(showPassword, setShowPassword),
  ...register('password'),
  placeholder: 'Enter your password',
});
