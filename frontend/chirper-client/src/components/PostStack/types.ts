import { Post } from '../Post/types';
import { SortMethod } from '../../views/Home/SearchBarAndSort/types';

export type PostStackProps = {
  posts: Post[];
  searchText: string;
  sortMethod: SortMethod;
};
