import { Stack } from '@mui/material';
import { PostStackProps } from './types';
import Post from '../Post';

export default function PostStack({ posts }: PostStackProps) {
  return (
    <Stack direction="column" spacing={1}>
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </Stack>
  );
}
