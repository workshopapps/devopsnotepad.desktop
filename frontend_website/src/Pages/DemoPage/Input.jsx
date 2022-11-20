import { useState } from 'react';
import FormInput from './FormInput';

const Input = () => {
  const [Values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });
  const inputs = [
    {
      id: 'first__Name',
      name: 'firstName',
      required: true,
      className: 'first__Name',
      type: 'text',
      placeholder: 'What is your first name?',
      label: 'First Name',
    },
    {
      id: 'last__Name',
      name: 'lastName',
      type: 'text',
      required: true,
      className: 'last__Name',
      placeholder: 'What is your Last Name?',
      label: 'Last Name',
    },
    {
      id: 'email',
      name: 'email',
      required: true,
      className: 'email__input',
      type: 'email',
      placeholder: 'What is your email?',
      label: 'Email',
    },
    {
      id: 'phone',
      name: 'phone',
      required: true,
      className: 'phone__input',
      type: 'text',
      placeholder: 'What is your Phone Number?',
      label: 'Phone Number',
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('data received successfully');
  };

  const onChange = (e) => {
    setValues({ ...Values, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={Values[input.name]}
            onChange={onChange}
          />
        ))}
        <div className='btn__submit btn'>
          <button className='btn__link submit'>Send message</button>
        </div>
      </form>
    </div>
  );
};

export default Input;
