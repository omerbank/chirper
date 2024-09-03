import { Post } from '../Post/types';
import { curry, includes, lowerCase, orderBy } from 'lodash/fp';
import {
  SortMethod,
  sortMethodsDetails,
} from '../../views/Home/SearchBarAndSort/types';
import moment from 'moment';

export const isPostFiltered = curry((filterText: string, { content }: Post) =>
  includes(lowerCase(filterText), lowerCase(content))
);

export const getSortedPosts = (posts: Post[], sortMethod: SortMethod) => {
  const sortKey = sortMethodsDetails[sortMethod].sortProperty;
  const sortProperty =
    sortKey !== 'createdAt' ? sortKey : (post: Post) => moment(post.createdAt);
  const sortOrder = sortMethodsDetails[sortMethod].order as 'asc' | 'desc';

  return orderBy(sortProperty, sortOrder, posts);
};
