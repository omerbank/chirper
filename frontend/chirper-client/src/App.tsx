import { GlobalStyles } from '@mui/material';
import Navbar from './components/Navbar';
import Post from './components/Post';
import { posts } from './data';

export default function App() {
  return (
    <>
      <GlobalStyles styles={{ body: { margin: 0, padding: 0 } }} />
      <Navbar />
      <Post post={posts[0]} />
      <Post post={posts[1]} />
    </>
  );
}
