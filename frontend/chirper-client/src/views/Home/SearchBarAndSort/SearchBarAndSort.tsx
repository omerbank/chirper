import { FC } from 'react';
import {
  SearchBarAndSortProps,
  sortMethods,
  sortMethodsDetails,
} from './types';
import { useStyles } from './styles';
import {
  Box,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { changeSearchText, changeSortBy } from './utils';
import { map } from 'lodash/fp';
import SearchIcon from '@mui/icons-material/Search';

export const SearchBarAndSort: FC<SearchBarAndSortProps> = ({
  searchText,
  sortMethod,
  setSearchParams,
}) => {
  const classes = useStyles();

  return (
    <Box className={classes.searchBarAndSort}>
      <FormControl>
        <InputLabel>Sort By</InputLabel>
        <Select
          label="Sort By"
          value={sortMethod}
          onChange={changeSortBy(setSearchParams)}
        >
          {map(
            (sortMethod) => (
              <MenuItem value={sortMethod} key={sortMethod}>
                {sortMethodsDetails[sortMethod].displayName}
              </MenuItem>
            ),
            sortMethods
          )}
        </Select>
      </FormControl>
      <TextField
        placeholder="Search..."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        autoComplete="off"
        value={searchText}
        onChange={changeSearchText(setSearchParams)}
        className={classes.searchBar}
      />
    </Box>
  );
};
