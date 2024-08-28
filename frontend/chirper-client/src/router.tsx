import { createBrowserRouter } from 'react-router-dom';
import { App } from './App';
import ErrorPage from './views/ErrorPage';
import Home from './views/Home';
import PostPage from './views/PostPage';
import { loader as postPageLoader } from './views/PostPage/utils';
import Login from './views/Login';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <App customOutlet={<ErrorPage />} />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'posts/:id',
        element: <PostPage />,
        loader: postPageLoader,
      },
      {
        path: 'login',
        element: <Login />,
      },
    ],
  },
]);
