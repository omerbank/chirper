import { Grid } from '@mui/material';
import PostStack from '../../components/PostStack';
import { posts } from '../../data';
import SearchBarAndSort from './SearchBarAndSort';
import { useState } from 'react';

export default function Home() {
  const [searchText, setSearchText] = useState('');
  const [sortMethod, setSortMethod] = useState(0);

  return (
    <Grid container direction="column" alignItems="center">
      <SearchBarAndSort
        searchText={searchText}
        sortMethod={sortMethod}
        onSearchTextChange={setSearchText}
        onSortMethodChange={setSortMethod}
      />
      <PostStack
        searchText={searchText}
        sortMethod={sortMethod}
        posts={posts}
      />
    </Grid>
  );
}
