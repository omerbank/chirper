export type SearchBarAndSortProps = {
  searchText: string;
  sortMethod: number;
  onSearchTextChange: (newSearchText: string) => void;
  onSortMethodChange: (newSortMethod: number) => void;
};
