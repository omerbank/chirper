import { Grid } from '@mui/material';
import PostStack from '../../components/PostStack';
import { posts } from '../../data';

export default function Home() {
  return (
    <Grid container direction="column" alignItems="center">
      <PostStack posts={posts} />
    </Grid>
  );
}
