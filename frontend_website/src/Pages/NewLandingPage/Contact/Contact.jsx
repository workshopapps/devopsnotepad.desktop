import Form from './Form';
import classes from './Contact.module.css';
import useFetch from '../../../hooks/useFetch';
import { useState } from 'react';
import { useCallback } from 'react';
const Contact = () => {
  const [response, setResponse] = useState(null);
  const {
    isLoading,
    error,
    fetchRequest: SubmitContactRequest,
    hideModal,
  } = useFetch();

  const getResponseData = useCallback(
    (responseObj) => {
      console.log('Contact responseObj', responseObj);
      setResponse(responseObj);
    },
    [setResponse],
  );

  const getFormDatas = (datas) => {
    console.log('formDetails', datas);

    SubmitContactRequest(
      {
        url: '',
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
        hideModal={hideModal}
        response={response}
      />
    </section>
  );
};
export default Contact;
