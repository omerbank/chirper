import { Dispatch, ReactNode, SetStateAction } from 'react';

type User = {
  id: string;
  username: string;
  avatarUrl: string;
};

export type UserState = User | null;

export type UserContextType = {
  user: UserState;
  setUser: Dispatch<SetStateAction<UserState>>;
};

export type UserProviderProps = { children: ReactNode };
