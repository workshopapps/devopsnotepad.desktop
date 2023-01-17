import { useState } from 'react';
import './_faqs.scss';

const Question = (props) => {
  const [showAns, setShowAns] = useState(false);
  const toggleShowAnsHandler = () => {
    setShowAns((prevState) => !prevState);
  };
  return (
    <li
      className={`faqs-question ${
        showAns ? 'faqs-question__open' : 'faqs-question__close'
      }`}
    >
      <button className='faqs-question_que' onClick={toggleShowAnsHandler}>
        <span>{props.queInfo.que}</span>
        <span>
          <span
            className={`u-cross ${
              showAns ? 'u-cross-toCancelV' : 'u-cross-vertical'
            }`}
          ></span>
          <span
            className={`u-cross ${
              showAns ? 'u-cross-toCancelH' : 'u-cross-horizontal'
            }`}
          ></span>
        </span>
      </button>
      <p
        className={`faqs-question__ans ${
          showAns ? 'faqs-question__ans-open' : 'faqs-question__ans-close'
        }`}
      >
        {props.queInfo.ans}
      </p>
    </li>
  );
};

export default Question;
