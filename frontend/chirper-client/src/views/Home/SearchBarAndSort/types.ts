export type SortMethod =
  | 'date-desc'
  | 'date-asc'
  | 'popularity-desc'
  | 'popularity-asc';

export type SearchBarAndSortProps = {
  searchText: string;
  sortMethod: SortMethod;
  onSearchTextChange: (newSearchText: string) => void;
  onSortMethodChange: (newSortMethod: SortMethod) => void;
};
