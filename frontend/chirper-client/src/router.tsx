import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import ErrorPage from './views/ErrorPage';
import Home from './views/Home';
import PostPage from './views/PostPage';
import { loader as postPageLoader } from './views/PostPage/utils';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <App outlet={<ErrorPage />} />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'posts/:postId',
        element: <PostPage />,
        loader: postPageLoader,
      },
    ],
  },
]);
