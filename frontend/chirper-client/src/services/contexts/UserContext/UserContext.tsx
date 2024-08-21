import { createContext, FC, useState } from 'react';
import { UserContextType, UserProviderProps, UserState } from './types';

export const UserContext = createContext<UserContextType>(null!);

export const UserProvider: FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UserState>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
