import { useState } from 'react';
import { SortMethod } from './SearchBarAndSort/types';
import { Grid } from '@mui/material';
import SearchBarAndSort from './SearchBarAndSort';
import PostStack from '../../components/PostStack';
import { posts } from '../../data';

export default function Home() {
  const [searchText, setSearchText] = useState('');
  const [sortMethod, setSortMethod] = useState<SortMethod>('date-desc');

  return (
    <Grid container direction="column" alignItems="center" gap={2}>
      <SearchBarAndSort
        searchText={searchText}
        sortMethod={sortMethod}
        onSearchTextChange={setSearchText}
        onSortMethodChange={setSortMethod}
      />
      <PostStack
        posts={posts}
        searchText={searchText}
        sortMethod={sortMethod}
      />
    </Grid>
  );
}
