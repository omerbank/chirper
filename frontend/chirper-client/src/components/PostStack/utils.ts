import { Post } from '../Post/types';
import { curry, includes, lowerCase, orderBy } from 'lodash/fp';
import {
  SortMethod,
  sortMethodsDetails,
} from '../../views/Home/SearchBarAndSort/types';

export const isPostFiltered = curry((filterText: string, { content }: Post) =>
  includes(lowerCase(filterText), lowerCase(content))
);

export function getSortedPosts(posts: Post[], sortMethod: SortMethod) {
  const sortKey = sortMethodsDetails[sortMethod].sortProperty;
  const sortOrder = sortMethodsDetails[sortMethod].order as 'asc' | 'desc';

  return orderBy(sortKey, sortOrder, posts);
}
