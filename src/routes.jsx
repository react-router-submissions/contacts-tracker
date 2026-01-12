import { createBrowserRouter } from 'react-router';
import Root from './components/Root';
import ErrorPage from './components/ErrorPage';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
  },
]);

export default routes;
