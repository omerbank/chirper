import {
  SearchBarAndSortProps,
  SortMethod,
  sortMethods,
  sortMethodsDetails,
} from './types';
import {
  Box,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useStyles } from './styles';

export default function SearchBarAndSort({
  searchText,
  sortMethod,
  onSearchTextChange,
  onSortMethodChange,
}: SearchBarAndSortProps) {
  const classes = useStyles();

  return (
    <Box className={classes.searchBarAndSort}>
      <FormControl>
        <InputLabel id="sort-by-label">Sort By</InputLabel>
        <Select
          labelId="sort-by-label"
          label="Sort By"
          value={sortMethod}
          onChange={(e) => onSortMethodChange(e.target.value as SortMethod)}
        >
          {sortMethods.map((sortMethod) => (
            <MenuItem value={sortMethod} key={sortMethod}>
              {sortMethodsDetails[sortMethod].displayName}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        placeholder="Search..."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon></SearchIcon>
            </InputAdornment>
          ),
        }}
        variant="outlined"
        value={searchText}
        onChange={(e) => onSearchTextChange(e.target.value)}
        className={classes.searchBar}
      />
    </Box>
  );
}
