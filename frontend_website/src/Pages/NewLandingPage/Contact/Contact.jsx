import Form from './Form';
import classes from './Contact.module.css';
import useFetch from '../../../hooks/useFetch';
import { useState } from 'react';
import { useCallback } from 'react';
const Contact = () => {
  const [response, setResponse] = useState(null);
  const { isLoading, error, fetchRequest: SubmitContactRequest } = useFetch();

  const getResponseData = useCallback(
    (responseObj) => {
      setResponse(responseObj);
      setTimeout(() => {
        setResponse();
      }, 1500);
    },
    [setResponse],
  );

  const getFormDatas = (datas) => {
    SubmitContactRequest(
      {
        url: 'https://opspad.dev/api/admin/follow-up',
        method: 'POST',
        body: datas,
        headers: {
          'Content-Type': 'application/json',
        },
      },
      getResponseData,
    );
  };

  return (
    <section className={classes.contact__form}>
      <Form
        onSubmit={getFormDatas}
        isLoading={isLoading}
        error={error}
        response={response}
      />
    </section>
  );
};
export default Contact;
