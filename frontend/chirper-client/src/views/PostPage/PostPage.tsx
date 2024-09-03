import { useParams } from 'react-router-dom';
import { usePost } from '../../services/posts/hooks/usePost';
import { CircularProgress, Grid } from '@mui/material';
import { Post } from '../../components/Post';

export const PostPage = () => {
  const { id } = useParams();
  const { isPending, isSuccess, data } = usePost(id);

  return (
    <Grid container justifyContent="center">
      {isPending && <CircularProgress />}
      {isSuccess && <Post post={data} />}
    </Grid>
  );
};
