export type SearchBarAndSortProps = {
  searchText: string;
  sortMethod: number;
  isAscending: boolean;
  onSearchTextChange: (newSearchText: string) => void;
  onSortMethodChange: (newSortMethod: number) => void;
  onSortOrderChange: (newSortOrder: boolean) => void;
};
