import { IconButton, InputAdornment } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { Dispatch, SetStateAction } from 'react';
import LockIcon from '@mui/icons-material/Lock';
import { Visibility, VisibilityOff } from '@mui/icons-material';

export const DEFAULT_USERNAME_PROPS = {
  autoComplete: 'off',
  InputProps: {
    startAdornment: (
      <InputAdornment position="start">
        <PersonIcon />
      </InputAdornment>
    ),
  },
};

export const DEFAULT_PASSWORD_PROPS = (
  showPassword: boolean,
  setShowPassword: Dispatch<SetStateAction<boolean>>
) => ({
  type: showPassword ? 'text' : 'password',
  autoComplete: 'off',
  InputProps: {
    startAdornment: (
      <InputAdornment position="start">
        <LockIcon />
      </InputAdornment>
    ),
    endAdornment: (
      <InputAdornment position="end">
        <IconButton edge="end" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? <VisibilityOff /> : <Visibility />}
        </IconButton>
      </InputAdornment>
    ),
  },
});
