import { SortMethod } from './SearchBarAndSort/types';
import { useSearchParams } from 'react-router-dom';
import { Grid } from '@mui/material';
import { SearchBarAndSort } from './SearchBarAndSort';
import { PostStack } from '../../components/PostStack';
import { posts } from '../../data';

export const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchText = searchParams.get('search') ?? '';
  const sortMethod = (searchParams.get('sort_by') ?? 'date-desc') as SortMethod;

  return (
    <Grid container direction="column" alignItems="center" gap={2}>
      <SearchBarAndSort
        searchText={searchText}
        sortMethod={sortMethod}
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
      <PostStack
        posts={posts}
        searchText={searchText}
        sortMethod={sortMethod}
      />
    </Grid>
  );
};
