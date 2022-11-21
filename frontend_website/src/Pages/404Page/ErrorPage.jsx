import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

import Button from '../CareerPage/Button/Button';

import classes from './ErrorPage.module.css';

const ErrorPage = () => {
  const navigate = useNavigate();
  const goHomeHandler = () => {
    navigate('/');
  };
  return (
    <>
      {/* SEO optimazation */}
      <Helmet>
        <title>Invalid URL or Page</title>
        <meta
          name='description'
          content="The url to this page doesn't exist in the application"
        />
        <link rel='canonical' href='/404page' />
      </Helmet>

      {/* Application */}
      <div className={classes.nopage__card}>
        <h1 className={classes.h1}>Error 404 page!</h1>
        <h2 className={classes.h2}>
          You are seeing this because you are NOT in a valid url. i.e., This
          page does not exist.
        </h2>
        <h3 className={classes.h3}>
          Kindly go back to a valid url by clicking on the button below
        </h3>
        <Button onClick={goHomeHandler} className={classes.button}>
          Go home
        </Button>
      </div>
    </>
  );
};
export default ErrorPage;
