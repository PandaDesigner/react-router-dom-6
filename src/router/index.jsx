import { createBrowserRouter } from 'react-router-dom';
import {
  About,
  Blog,
  Home,
  loaderBlog,
  NotFound,
  Post,
  PostDetail
} from '../pages';
import { LayoutPublic } from '../layout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutPublic />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/blog',
        element: <Blog />,
        loader: loaderBlog
      },
      {
        path: '/blog/:id',
        element: <Post />,
        loader: PostDetail
      }
    ]
  }
]);
