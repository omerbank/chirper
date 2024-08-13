type Post = {
  username: string;
  avatarUrl: string;
  postedAt: Date;
  content: string;
  likesNum: number;
};

export type PostProps = {
  post: Post;
};
