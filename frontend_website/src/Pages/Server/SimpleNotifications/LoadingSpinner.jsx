import { ImSpinner10 } from 'react-icons/im';

import './LoadingSpinner.scss';
const LoadingSpinner = () => {
  return (
    <div className='spinner__box'>
      <ImSpinner10 className='spinner' />
      <h2>Loading...</h2>
    </div>
  );
};
export default LoadingSpinner;
