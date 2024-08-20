import { LoaderFunctionArgs } from 'react-router-dom';
import { posts } from '../../data';

export function loader({ params }: LoaderFunctionArgs) {
  const post = { ...posts.find((post) => post.id === params.postId) };
  return { post };
}
