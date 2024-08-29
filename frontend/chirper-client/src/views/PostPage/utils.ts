import { LoaderFunctionArgs } from 'react-router-dom';
import { getPostById } from '../../api';

export const loader = ({ params }: LoaderFunctionArgs) => {
  const post = getPostById(params.id);

  if (!post) {
    throw new Response('', {
      status: 404,
      statusText: 'Post not found',
    });
  }

  return { post };
};
