import { usePosts } from '../../services/posts/hooks/usePosts';
import { useSearchParams } from 'react-router-dom';
import { SortMethod } from './SearchBarAndSort/types';
import { CircularProgress, Grid } from '@mui/material';
import { SearchBarAndSort } from './SearchBarAndSort';
import { PostStack } from '../../components/PostStack';

export const Home = () => {
  const { isPending, isSuccess, data } = usePosts();
  const [searchParams, setSearchParams] = useSearchParams();

  const searchText = searchParams.get('search') || '';
  const sortMethod = (searchParams.get('sort') || 'date-desc') as SortMethod;

  return (
    <Grid container direction="column" alignItems="center" gap={2}>
      {isPending && <CircularProgress />}
      {isSuccess && (
        <>
          <SearchBarAndSort
            searchText={searchText}
            sortMethod={sortMethod}
            setSearchParams={setSearchParams}
          />
          <PostStack
            posts={data}
            searchText={searchText}
            sortMethod={sortMethod}
          />
        </>
      )}
    </Grid>
  );
};
