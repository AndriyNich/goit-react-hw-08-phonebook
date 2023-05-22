import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Contacts } from 'components/Contacts/Contacts';
import { fetchContacts } from 'redux/contacts/operation';
import authSelectors from 'redux/auth/selectors';

export default function Tasks() {
  const dispatch = useDispatch();
  //   const isLoading = useSelector(selectLoading);
  const { email } = useSelector(authSelectors.getUser);

  console.log(email);
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
      {/* <TaskEditor />
      <div>{isLoading && 'Request in progress...'}</div>
      <TaskList /> */}
      <Contacts />
    </>
  );
}
