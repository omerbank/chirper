type User = {
  id: string;
  username: string;
  password: string;
  avatarUrl: string;
};

export type Post = {
  id: string;
  user: User;
  content: string;
  createdAt: string;
  likesNum: number;
};

export type PostWithoutUser = Omit<Post, 'user'> & { user: string };

export type PostProps = {
  post: Post;
};
