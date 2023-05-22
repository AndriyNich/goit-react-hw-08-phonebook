import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Contacts } from 'components/Contacts/Contacts';
import { fetchContacts } from 'redux/contacts/operation';
import authSelectors from 'redux/auth/selectors';
import { selectLoading } from 'redux/contacts/selectors';

export default function Tasks() {
  const dispatch = useDispatch();
  const { email } = useSelector(authSelectors.getUser);
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    if (email !== null) {
      dispatch(fetchContacts());
    }
  }, [dispatch, email]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <Contacts>
        <div>{isLoading && 'Request in progress...'}</div>
      </Contacts>
    </>
  );
}
