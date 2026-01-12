import { createBrowserRouter } from 'react-router';
import Root, {
  loader as rootLoader,
  action as rootAction,
} from './components/Root';
import ErrorPage from './components/ErrorPage';
import Contact, {
  loader as contactLoader,
  action as contactAction,
} from './components/Contact';
import EditContact, { action as editAction } from './components/Edit';
import { action as destroyAction } from './components/Destroy';
import Index from './components/Index';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: 'contacts/:contactId',
        element: <Contact />,
        loader: contactLoader,
        action: contactAction,
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
