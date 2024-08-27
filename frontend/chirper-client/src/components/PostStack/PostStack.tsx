import { PostStackProps } from './types';
import { filter, map } from 'lodash/fp';
import { getSortedPosts, isPostFiltered } from './utils';
import { Alert, Stack } from '@mui/material';
import Post from '../Post';
import { Link } from 'react-router-dom';

export default function PostStack({
  posts,
  searchText = '',
  sortMethod = 'date-desc',
}: PostStackProps) {
  const filteredPosts = filter(isPostFiltered(searchText), posts);
  const sortedPosts = getSortedPosts(filteredPosts, sortMethod);

  return !sortedPosts.length ? (
    <Alert severity="info" sx={{ width: 540, mt: 2 }}>
      No posts were found.
    </Alert>
  ) : (
    <Stack direction="column" spacing={1}>
      {map(
        (post) => (
          <Link
            to={`posts/${post.id}`}
            key={post.id}
            style={{ textDecoration: 'none' }}
          >
            <Post post={post} />
          </Link>
        ),
        sortedPosts
      )}
    </Stack>
  );
}
