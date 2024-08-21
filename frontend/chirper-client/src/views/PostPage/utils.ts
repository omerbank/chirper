import { LoaderFunctionArgs } from 'react-router-dom';
import { find } from 'lodash/fp';
import { posts } from '../../data';

export const loader = ({ params }: LoaderFunctionArgs) => {
  const post = find((post) => post.id === params.id, posts);

  if (!post) {
    throw new Response('', {
      status: 404,
      statusText: 'Post not found',
    });
  }

  return { post };
};
