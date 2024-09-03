import { User, UserState } from '../../../services/contexts/UserContext/types';
import { Dispatch, SetStateAction } from 'react';

export type LoggedInProps = {
  user: User;
  setUser: Dispatch<SetStateAction<UserState>>;
};
