import { useNavigate } from 'react-router-dom';
import { useUser } from '../../contexts/UserContext';
import { SignUpCredentials } from '../../../views/SignUp/types';
import { useMutation } from '@tanstack/react-query';
import { addUser } from '../../../api';

export const useSignUp = () => {
  const { setUser } = useUser();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (credentials: SignUpCredentials) => addUser(credentials),
    onSuccess: (data) => {
      setUser(data);
      navigate('/');
    },
  });
};
