import { useQuery } from '@tanstack/react-query';
import { POSTS_KEY } from '../constants';
import { getAllPosts } from '../../../api';

export const usePosts = () => {
  return useQuery({
    queryKey: [POSTS_KEY],
    queryFn: getAllPosts,
  });
};
