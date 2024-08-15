import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { SearchBarAndSortProps } from './types';

export default function SearchBarAndSort({
  searchText,
  sortMethod,
  onSearchTextChange,
  onSortMethodChange,
}: SearchBarAndSortProps) {
  return (
    <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
      <FormControl sx={{ width: 175 }}>
        <InputLabel id="sort-by-label">Sort By</InputLabel>
        <Select
          labelId="sort-by-label"
          value={sortMethod}
          label="Sort By"
          onChange={(e) => onSortMethodChange(e.target.value as number)}
        >
          <MenuItem value={0}>Latest Posts</MenuItem>
          <MenuItem value={1}>Popularity</MenuItem>
        </Select>
      </FormControl>
      <TextField
        label="Search..."
        variant="outlined"
        value={searchText}
        onChange={(e) => onSearchTextChange(e.target.value)}
        sx={{ width: 350 }}
      />
    </Box>
  );
}
