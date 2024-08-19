import { Alert, Stack } from '@mui/material';
import { PostStackProps } from './types';
import Post from '../Post';
import { getFilteredPosts, getSortedPosts } from './utils';

export default function PostStack({
  posts,
  searchText = '',
  sortMethod = 'date-desc',
}: PostStackProps) {
  const filteredPosts = getFilteredPosts(posts, searchText);

  if (!filteredPosts.length) {
    return (
      <Alert severity="info" sx={{ width: 540, mt: 2 }}>
        No posts were found.
      </Alert>
    );
  }

  const sortedPosts = getSortedPosts(filteredPosts, sortMethod);

  return (
    <Stack direction="column" spacing={1}>
      {sortedPosts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </Stack>
  );
}
