import { ReactNode } from 'react';

export type User = {
  id: string;
  username: string;
  avatarUrl?: string;
};

export type UserContextType = User | null;
export type UserUpdateContextType = React.Dispatch<
  React.SetStateAction<UserContextType>
>;
export type UserProviderProps = { children: ReactNode };
