import { createBrowserRouter } from 'react-router';
import Root, {
  loader as rootLoader,
  action as rootAction,
} from './components/Root';
import ErrorPage from './components/ErrorPage';
import Contact, { loader as contactLoader } from './components/Contact';
import EditContact from './components/Edit';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: 'contacts/:contactId',
        element: <Contact />,
        loader: contactLoader,
      },
      {
        path: 'contacts/:contactId/edit',
        element: <EditContact />,
        loader: contactLoader,
      },
    ],
  },
]);

export default routes;
