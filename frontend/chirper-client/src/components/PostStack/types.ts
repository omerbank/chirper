import { SortMethod } from '../../views/Home/SearchBarAndSort/types';
import { Post } from '../Post/types';

export type PostStackProps = {
  posts: Post[];
  searchText: string;
  sortMethod: SortMethod;
};
