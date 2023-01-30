import Form from './Form';
import { useNavigate } from 'react-router-dom';
import classes from './Contact.module.css';
import useFetch from '../../../hooks/useFetch';
import { useState } from 'react';
import { useCallback } from 'react';
const Contact = () => {
  const [response, setResponse] = useState(null);
  const { isLoading, error, fetchRequest: SubmitContactRequest } = useFetch();
  const navigate = useNavigate();

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

    // If the response is ok, set the below value in local storage to true. That value conditionally renders either the demo form or demo page.
    /* if (response) {
      localStorage.setItem(
        'd5339e41-f0c2-46b9-b3bb-038c767c4ebb',
        JSON.stringify(true),
      );
      navigate('/demo');
    } */
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
