import {
  Box,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { SearchBarAndSortProps } from './types';
import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material';

export default function SearchBarAndSort({
  searchText,
  sortMethod,
  isAscending,
  onSearchTextChange,
  onSortMethodChange,
  onSortOrderChange,
}: SearchBarAndSortProps) {
  return (
    <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
      <IconButton onClick={() => onSortOrderChange(!isAscending)}>
        {isAscending ? (
          <ArrowDropUp sx={{ fontSize: 40 }}></ArrowDropUp>
        ) : (
          <ArrowDropDown sx={{ fontSize: 40 }}></ArrowDropDown>
        )}
      </IconButton>
      <FormControl sx={{ width: 130, ml: -1 }}>
        <InputLabel id="sort-by-label">Sort By</InputLabel>
        <Select
          labelId="sort-by-label"
          value={sortMethod}
          label="Sort By"
          onChange={(e) => onSortMethodChange(e.target.value as number)}
        >
          <MenuItem value={0}>Date</MenuItem>
          <MenuItem value={1}>Popularity</MenuItem>
        </Select>
      </FormControl>
      <TextField
        label="Search..."
        variant="outlined"
        value={searchText}
        onChange={(e) => onSearchTextChange(e.target.value)}
        sx={{ width: 335 }}
      />
    </Box>
  );
}
