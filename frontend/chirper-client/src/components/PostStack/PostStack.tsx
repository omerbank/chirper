import { PostStackProps } from './types';
import { filter, map } from 'lodash/fp';
import { getSortedPosts, isPostFiltered } from './utils';
import { Alert, Stack } from '@mui/material';
import Post from '../Post';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';

export default function PostStack({
  posts,
  searchText = '',
  sortMethod = 'date-desc',
}: PostStackProps) {
  const classes = useStyles();

  const filteredPosts = filter(isPostFiltered(searchText), posts);
  const sortedPosts = getSortedPosts(filteredPosts, sortMethod);

  return !sortedPosts.length ? (
    <Alert severity="info" className={classes.noPostsAlert}>
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
