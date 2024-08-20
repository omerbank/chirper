export const sortMethods = [
  'date-desc',
  'date-asc',
  'popularity-desc',
  'popularity-asc',
] as const;

export type SortMethod = (typeof sortMethods)[number];

export const sortMethodsDetails = {
  'date-desc': {
    sortProperty: 'postedAt',
    displayName: 'Newest First',
  },
  'date-asc': {
    sortProperty: 'postedAt',
    displayName: 'Oldest First',
  },
  'popularity-desc': {
    sortProperty: 'likesNum',
    displayName: 'Most Popular',
  },
  'popularity-asc': {
    sortProperty: 'likesNum',
    displayName: 'Least Popular',
  },
};

export type SearchBarAndSortProps = {
  searchText: string;
  sortMethod: SortMethod;
  onSearchTextChange: (newSearchText: string) => void;
  onSortMethodChange: (newSortMethod: SortMethod) => void;
};
