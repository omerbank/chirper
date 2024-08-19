import { createContext, useState } from 'react';
import {
  UserContextType,
  UserProviderProps,
  UserUpdateContextType,
} from './types';

export const UserContext = createContext<UserContextType>(null);
export const UserUpdateContext = createContext<UserUpdateContextType>(
  {} as UserUpdateContextType
);

export default function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<UserContextType>(null);

  return (
    <UserContext.Provider value={user}>
      <UserUpdateContext.Provider value={setUser}>
        {children}
      </UserUpdateContext.Provider>
    </UserContext.Provider>
  );
}
