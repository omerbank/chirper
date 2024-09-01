import { useParams } from 'react-router-dom';
import { usePost } from '../../services/posts/hooks/usePost';
import { Grid } from '@mui/material';
import { LoadingSpinner } from '../../components/LoadingSpinner';
import { Post } from '../../components/Post';

export const PostPage = () => {
  const { id } = useParams();
  const { isPending, isSuccess, data } = usePost(id);

  return (
    <Grid container justifyContent="center">
      {isPending && <LoadingSpinner />}
      {isSuccess && <Post post={data} />}
    </Grid>
  );
};
