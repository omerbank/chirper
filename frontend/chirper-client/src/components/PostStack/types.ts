import { Post } from '../Post/types';

export type PostStackProps = {
  posts: Post[];
  searchText: string;
  sortMethod: number;
};
