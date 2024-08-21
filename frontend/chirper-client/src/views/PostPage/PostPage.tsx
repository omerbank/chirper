import { useLoaderData } from 'react-router-dom';
import { PostProps } from '../../components/Post/types';
import { Grid } from '@mui/material';
import Post from '../../components/Post';

export const PostPage = () => {
  const { post } = useLoaderData() as PostProps;

  return (
    <Grid container justifyContent="center">
      <Post post={post} />
    </Grid>
  );
};
