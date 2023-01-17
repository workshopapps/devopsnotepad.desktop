import Form from './Form';
import classes from './Contact.module.css';
// import useFetch from '../../../hooks/useFetch';
const Contact = () => {
  // const {
  //   isLoading,
  //   error,
  //   fetchRequest: LoginRequest,
  //   hideModal,
  // } = useFetch();

  const getFormDatas = (datas) => {
    console.log(datas);
  };

  return (
    <section className={classes.contact__form}>
      <Form onSubmit={getFormDatas} />
    </section>
  );
};
export default Contact;
