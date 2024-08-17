import { SortMethod } from '../../views/Home/SearchBarAndSort/types';
import { Post } from '../Post/types';

export function getFilteredPosts(posts: Post[], filterText: string) {
  return posts.filter((post) =>
    post.content.toLowerCase().includes(filterText.toLowerCase())
  );
}

export function getSortedPosts(posts: Post[], sortMethod: SortMethod) {
  const sortKey = sortMethod.startsWith('date') ? 'postedAt' : 'likesNum';
  const isAscending = sortMethod.endsWith('asc');

  return [...posts].sort((postA, postB) => {
    return isAscending
      ? +postA[sortKey] - +postB[sortKey]
      : +postB[sortKey] - +postA[sortKey];
  });
}
