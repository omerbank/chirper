import { useUser } from '../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { LoginCredentials } from '../../../views/Login/types';
import { login } from '../../../api';

export const useLogin = () => {
  const { setUser } = useUser();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (credentials: LoginCredentials) => login(credentials),
    onSuccess: (data) => {
      setUser(data);
      navigate('/');
    },
  });
};
