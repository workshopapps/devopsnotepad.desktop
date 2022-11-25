import { useState, useEffect } from 'react';
import Input from '../Partner/Input';
import style from '../../Pages/Partner/form.module.css';
import 'react-intl-tel-input/dist/main.css';
import IntlTelInput from 'react-intl-tel-input';
import CountryDropdown from 'country-dropdown-with-flags-for-react';

const Form = () => {
  const initialValues = { username: '', email: '', password: '' };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  // useEffect(() => {
  //   console.log(formErrors);
  //   if (Object.keys(formErrors).length === 0 && isSubmit) {
  //     console.log(formValues);
  //   }
  // }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = 'Username is required!';
    }
    if (!values.email) {
      errors.email = 'Email is required!';
    } else if (!regex.test(values.email)) {
      errors.email = 'This is not a valid email format!';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 4) {
      errors.password = 'Password must be more than 4 characters';
    } else if (values.password.length > 10) {
      errors.password = 'Password cannot exceed more than 10 characters';
    }
    return errors;
  };

  return (
    <div className={style.partnerFormContainer}>
      <div className={style.partnerRegistrationContainer}>
        <div className={style.partnerRegistrationHeader}>
          <span>
            <h1 className={style.partnerRegistrationTitle}>
              {' '}
              Welcome to <span id={style.blueOpspad}> Opspad </span> <br />
              partnerships{' '}
            </h1>
          </span>
          <span className={style.partnerRegistrationDesignRight}></span>
          <span className={style.partnerRegistrationDesignBottom}></span>
        </div>
      </div>
      <div className={style.formContainer}>
        <h2>Please fill out the following information to get started</h2>
        <form onSubmit={handleSubmit} className={style.partnerForm}>
          <div className={style.formBody}>
            <div className={style.formGroup}>
              <label htmlFor='name' className={style.inputLabel}>
                Name
              </label>
              <Input
                type='text'
                name='username'
                placeholder='Jane Doe'
                value={formValues.username}
                className={style.inputField}
                onChange={handleChange}
                id='username'
                required
              />
            </div>
            <p>{formErrors.username}</p>
            <div className={style.formGroup}>
              <label htmlFor='email' className={style.inputLabel}>
                Email address
              </label>
              <Input
                type='text'
                name='Email'
                placeholder='example@company.com'
                value={formValues.email}
                className={style.inputField}
                onChange={handleChange}
                id='email'
                required
              />
            </div>
            <p>{formErrors.email}</p>
            <div className={style.formGroup}>
              <label htmlFor='Phone Number' className={style.inputLabel}>
                Phone Number
              </label>
              <IntlTelInput
                type='tel'
                name='phone'
                className='intl-tel-input'
                placeholder='08092345632'
                onPhoneNumberChange={handleChange}
                inputClassName={style.inputField}
                required
              />
            </div>
            <div className={style.formGroup}>
              <label htmlFor='Job title' className={style.inputLabel}>
                Job title
              </label>
              <Input
                type='text'
                name='partnership type'
                placeholder='Please select one'
                value={formValues.username}
                className={style.inputField}
                onChange={handleChange}
                id='partnership'
                required
              />
            </div>
            <div className={style.formGroup}>
              <label htmlFor='Company name' className={style.inputLabel}>
                Company name
              </label>
              <Input
                type='text'
                name='company'
                placeholder='Opspad Inc.'
                value={formValues.company}
                className={style.inputField}
                onChange={handleChange}
                id='company'
                required
              />
            </div>
            <div className={style.formGroup}>
              <label htmlFor='company website' className={style.inputLabel}>
                Company website
              </label>
              <Input
                type='text'
                name='company website'
                placeholder='www.opspadinc.com'
                value={formValues.website}
                className={style.inputField}
                onChange={handleChange}
                id='website'
                required
              />
            </div>
            <div className={style.formGroup}>
              <label htmlFor='company address' className={style.inputLabel}>
                company address
              </label>
              <Input
                type='text'
                name='street'
                placeholder='street'
                value={formValues.username}
                className={style.inputField}
                onChange={handleChange}
                id='street'
                required
              />
            </div>
            <div className={style.formGroup}>
              <Input
                type='text'
                name='city'
                placeholder='city'
                value={formValues.username}
                className={style.inputField}
                onChange={handleChange}
                id='street'
                required
              />
            </div>
            <div className={style.formGroup}>
              <Input
                type='text'
                name='state'
                placeholder='state/ Region/Province'
                value={formValues.username}
                className={style.inputField}
                onChange={handleChange}
                id='street'
                required
              />
            </div>
            <div className={style.formGroup}>
              <CountryDropdown preferredCountries={['gb', 'us']}>
                {' '}
              </CountryDropdown>
            </div>

            <p>{formErrors.password}</p>
            <span className={style.submitBtnContainer}>
              <button className={style.submitBtn}>Apply</button>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
