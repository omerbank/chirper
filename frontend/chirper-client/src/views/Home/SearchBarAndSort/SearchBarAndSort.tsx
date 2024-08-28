import { FC } from 'react';
import {
  SearchBarAndSortProps,
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
import { map } from 'lodash/fp';
import SearchIcon from '@mui/icons-material/Search';
import { useStyles } from './styles';

export const SearchBarAndSort: FC<SearchBarAndSortProps> = ({
  searchText,
  sortMethod,
  searchParams,
  setSearchParams,
}) => {
  const classes = useStyles();

  return (
    <Box className={classes.searchBarAndSort}>
      <FormControl>
        <InputLabel id="sort-by-label">Sort By</InputLabel>
        <Select
          labelId="sort-by-label"
          label="Sort By"
          value={sortMethod}
          onChange={(e) => {
            searchParams.set('sort_by', e.target.value);
            setSearchParams(searchParams);
          }}
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
              <SearchIcon></SearchIcon>
            </InputAdornment>
          ),
        }}
        autoComplete="off"
        variant="outlined"
        value={searchText}
        onChange={(e) => {
          if (e.target.value) {
            searchParams.set('search', e.target.value);
          } else {
            searchParams.delete('search');
          }

          setSearchParams(searchParams);
        }}
        className={classes.searchBar}
      />
    </Box>
  );
};
