import { useQuery } from '@tanstack/react-query';
import { POST_KEY } from '../constants';
import { getPostById } from '../../../api';

export const usePost = (id?: string) => {
  return useQuery({
    queryKey: [POST_KEY, id],
    queryFn: () => getPostById(id),
  });
};
