import {
  Box,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { SearchBarAndSortProps, SortMethod } from './types';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBarAndSort({
  searchText,
  sortMethod,
  onSearchTextChange,
  onSortMethodChange,
}: SearchBarAndSortProps) {
  return (
    <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
      <FormControl sx={{ width: 150 }}>
        <InputLabel id="sort-by-label">Sort By</InputLabel>
        <Select
          labelId="sort-by-label"
          label="Sort By"
          value={sortMethod}
          onChange={(e) => onSortMethodChange(e.target.value as SortMethod)}
        >
          <MenuItem value="date-desc">Newest First</MenuItem>
          <MenuItem value="date-asc">Oldest First</MenuItem>
          <MenuItem value="popularity-desc">Most Popular</MenuItem>
          <MenuItem value="popularity-asc">Least Popular</MenuItem>
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
        sx={{ width: 375 }}
      />
    </Box>
  );
}
