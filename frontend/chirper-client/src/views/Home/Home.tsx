import { usePosts } from '../../services/posts/hooks/usePosts';
import { useSearchParams } from 'react-router-dom';
import { SortMethod } from './SearchBarAndSort/types';
import { Grid } from '@mui/material';
import { LoadingSpinner } from '../../components/LoadingSpinner';
import { SearchBarAndSort } from './SearchBarAndSort';
import { PostStack } from '../../components/PostStack';

export const Home = () => {
  const { isPending, isSuccess, data } = usePosts();
  const [searchParams, setSearchParams] = useSearchParams({
    sort: 'date-desc',
    search: '',
  });

  const searchText = searchParams.get('search')!;
  const sortMethod = searchParams.get('sort') as SortMethod;

  return (
    <Grid container direction="column" alignItems="center" gap={2}>
      {isPending && <LoadingSpinner />}
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
