import { Grid } from '@mui/material';
import PostStack from '../../components/PostStack';
import { posts } from '../../data';
import SearchBarAndSort from './SearchBarAndSort';
import { useState } from 'react';

export default function Home() {
  const [searchText, setSearchText] = useState('');
  const [sortMethod, setSortMethod] = useState(0);
  const [isAscending, setIsAscending] = useState(false);

  return (
    <Grid container direction="column" alignItems="center">
      <SearchBarAndSort
        searchText={searchText}
        sortMethod={sortMethod}
        isAscending={isAscending}
        onSearchTextChange={setSearchText}
        onSortMethodChange={setSortMethod}
        onSortOrderChange={setIsAscending}
      />
      <PostStack
        posts={posts}
        searchText={searchText}
        sortMethod={sortMethod}
        isAscending={isAscending}
      />
    </Grid>
  );
}
