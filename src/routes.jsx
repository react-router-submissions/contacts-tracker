import { createBrowserRouter } from 'react-router';
import Root, {
  loader as rootLoader,
  action as rootAction,
} from './components/Root';
import ErrorPage from './components/ErrorPage';
import Contact, { loader as contactLoader } from './components/Contact';
import EditContact, { action as editAction } from './components/Edit';
import { action as destroyAction } from './components/Destroy';

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
        action: editAction,
      },
      {
        path: 'contacts/:contactId/destroy',
        action: destroyAction,
        errorElement: <div>Oops! There was an error.</div>,
      },
    ],
  },
]);

export default routes;
