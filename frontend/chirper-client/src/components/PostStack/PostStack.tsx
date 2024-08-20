import { PostStackProps } from './types';
import { getFilteredPosts, getSortedPosts } from './utils';
import { Alert, Stack } from '@mui/material';
import Post from '../Post';
import { Link } from 'react-router-dom';

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
        <Link
          to={`posts/${post.id}`}
          key={post.id}
          style={{ textDecoration: 'none' }}
        >
          <Post post={post} />
        </Link>
      ))}
    </Stack>
  );
}
