import useFetch from '../../hooks/useFetch';
import Button from '../CareerPage/Button/Button';
import { ImSpinner9 } from 'react-icons/im';
import classes from './VerifyEmail.module.css';
import { useNavigate, useSearchParams } from 'react-router-dom';
const VerifyEmail = () => {
  const [searchParams] = useSearchParams();

  const navigate = useNavigate();

  const { isLoading, error, fetchRequest } = useFetch();

  const getRequestData = (responseBody) => {
    if (responseBody.message) {
      navigate('/login');
    }
  };

  const verifyEmailHandler = () => {
    const token = searchParams.get('token');
    const id = searchParams.get('id');
    fetchRequest(
      {
        url: `https://opspad.hng.tech/api/auth/verify-email?token=${token}&id=${id}`,
      },
      getRequestData,
    );
  };

  return (
    <div className={classes.div}>
      <h1 className={classes.h1}>Verify email address</h1>
      {error.hasError && <p>{error.message}</p>}
      {isLoading && (
        <Button className={classes.verify}>
          Verifying{' '}
          <span>
            <ImSpinner9 className={classes.svg} />
          </span>
        </Button>
      )}
      {!isLoading && (
        <Button className={classes.button} onClick={verifyEmailHandler}>
          Verify
        </Button>
      )}
    </div>
  );
};
export default VerifyEmail;
