import { find, map } from 'lodash/fp';
import { posts } from './data/posts';
import { users } from './data/users';
import { LoginCredentials } from './views/Login/types';
import { SignUpCredentials } from './views/SignUp/types';
import { PostWithoutUser } from './components/Post/types';

const DEFAULT_AVATAR_PATH = '/default-avatar.jpg';

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

export const addUser = async ({
  username,
  password,
  avatarUrl,
}: SignUpCredentials) => {
  await fakeNetwork();

  const newUser = {
    id: crypto.randomUUID(),
    username,
    password,
    avatarUrl: avatarUrl || DEFAULT_AVATAR_PATH,
  };

  users.push(newUser);
  return newUser;
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
