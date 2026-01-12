import { createBrowserRouter } from 'react-router';
import Root, { loader as rootLoader } from './components/Root';
import ErrorPage from './components/ErrorPage';
import Contact from './components/Contact';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      {
        path: 'contacts/:contactId',
        element: <Contact />,
      },
    ],
  },
]);

export default routes;
