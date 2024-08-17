import { Grid } from '@mui/material';
import PostStack from '../../components/PostStack';
import { posts } from '../../data';
import SearchBarAndSort from './SearchBarAndSort';
import { useState } from 'react';
import { SortMethod } from './SearchBarAndSort/types';

export default function Home() {
  const [searchText, setSearchText] = useState('');
  const [sortMethod, setSortMethod] = useState<SortMethod>('date-desc');

  return (
    <Grid container direction="column" alignItems="center">
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
