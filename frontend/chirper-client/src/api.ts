import { find, map } from 'lodash/fp';
import { users } from './data/users';
import { posts } from './data/posts';
import { PostWithoutUser } from './components/Post/types';

const getPostWithUser = (post: PostWithoutUser) => {
  return {
    ...post,
    user: find(['id', post.user], users)!,
  };
};

export const getAllPosts = () => {
  return map(getPostWithUser, posts);
};

export const getPostById = (postId: string | undefined) => {
  const post = find(['id', postId], posts);
  if (!post) return null;

  return getPostWithUser(post);
};

const fakeNetwork = async () => {
  return new Promise((res) => {
    setTimeout(res, Math.random() * 800);
  });
};
