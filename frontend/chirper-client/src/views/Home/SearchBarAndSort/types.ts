import { SetURLSearchParams } from 'react-router-dom';

export const sortMethods = [
  'date-desc',
  'date-asc',
  'popularity-desc',
  'popularity-asc',
] as const;

export type SortMethod = (typeof sortMethods)[number];

export const sortMethodsDetails = {
  'date-desc': {
    sortProperty: 'createdAt',
    displayName: 'Newest First',
    order: 'desc',
  },
  'date-asc': {
    sortProperty: 'createdAt',
    displayName: 'Oldest First',
    order: 'asc',
  },
  'popularity-desc': {
    sortProperty: 'likesNum',
    displayName: 'Most Popular',
    order: 'desc',
  },
  'popularity-asc': {
    sortProperty: 'likesNum',
    displayName: 'Least Popular',
    order: 'asc',
  },
};

export type SearchBarAndSortProps = {
  searchText: string;
  sortMethod: SortMethod;
  setSearchParams: SetURLSearchParams;
};
