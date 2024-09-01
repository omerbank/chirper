import { find, map } from 'lodash/fp';
import { users } from './data/users';
import { posts } from './data/posts';
import { LoginCredentials } from './views/Login/types';
import { PostWithoutUser } from './components/Post/types';

export const getAllPosts = async () => {
  await fakeNetwork();
  return map(getPostWithUser, posts);
};

export const getPostById = async (postId: string | undefined) => {
  await fakeNetwork();

  const post = find(['id', postId], posts);
  if (!post) throw new Error('Post not found');

  return getPostWithUser(post);
};

export const login = async ({ username, password }: LoginCredentials) => {
  await fakeNetwork();

  const user = find({ username, password }, users);
  if (!user) throw new Error('Username or password are incorrect.');

  return user;
};

const fakeNetwork = async () => {
  return new Promise((res) => {
    setTimeout(res, Math.random() * 800);
  });
};

const getPostWithUser = (post: PostWithoutUser) => {
  return {
    ...post,
    user: find(['id', post.user], users)!,
  };
};
