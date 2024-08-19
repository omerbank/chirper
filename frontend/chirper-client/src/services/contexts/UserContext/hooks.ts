import { useContext } from 'react';
import { UserContext, UserUpdateContext } from './UserContext';

export function useUser() {
  return useContext(UserContext);
}

export function useUserUpdate() {
  return useContext(UserUpdateContext);
}
