export type Post = {
  id: string;
  userId: string;
  parentPostId: string | null;
  content: string;
  createdAt: string;
  deletedAt: string | null;
};
