import { redirect } from 'react-router';
import { deleteContact } from '../modules/utils/contacts';

export async function action({ params }) {
  await deleteContact(params.contactId);
  return redirect('/');
}
