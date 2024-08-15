import { Alert, Stack } from '@mui/material';
import { PostStackProps } from './types';
import Post from '../Post';

export default function PostStack({
  posts,
  searchText = '',
  sortMethod = 0,
  isAscending = false,
}: PostStackProps) {
  const sortedPosts = posts.sort((postA, postB) => {
    const sortKey = sortMethod === 0 ? 'postedAt' : 'likesNum';
    return +postB[sortKey] - +postA[sortKey];
  });

  const filteredPosts = sortedPosts.filter((post) =>
    post.content.toLowerCase().includes(searchText.toLowerCase())
  );

  if (isAscending) filteredPosts.reverse();

  return filteredPosts.length > 0 ? (
    <Stack direction="column" spacing={1}>
      {filteredPosts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </Stack>
  ) : (
    <Alert severity="info" sx={{ width: 510, mt: 2 }}>
      No posts were found.
    </Alert>
  );
}
