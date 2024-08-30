import { SortMethod } from './SearchBarAndSort/types';
import { useSearchParams } from 'react-router-dom';
import { Grid } from '@mui/material';
import { SearchBarAndSort } from './SearchBarAndSort';
import { PostStack } from '../../components/PostStack';
import { getAllPosts } from '../../api';

export const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams({
    sort: 'date-desc',
    search: '',
  });

  const searchText = searchParams.get('search')!;
  const sortMethod = searchParams.get('sort') as SortMethod;

  return (
    <Grid container direction="column" alignItems="center" gap={2}>
      <SearchBarAndSort
        searchText={searchText}
        sortMethod={sortMethod}
        setSearchParams={setSearchParams}
      />
      <PostStack
        posts={getAllPosts()}
        searchText={searchText}
        sortMethod={sortMethod}
      />
    </Grid>
  );
};
