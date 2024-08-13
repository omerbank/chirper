import Post from './components/Post';
import { posts } from './data';

export default function App() {
  return (
    <>
      <Post post={posts[0]} />
      <Post post={posts[1]} />
    </>
  );
}
