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
          <span style={{ color: 'white' }}
            className={`ucross ${
              showAns ? 'u-cross-toCancelV' : 'u-cross-vertical'
            }`}
          ></span>
          <span
            className={`ucross ${
              showAns ? 'u-cross-toCancelH' : 'u-cross-horizontal'
            }`}
          ></span>
        </span>
      </button>
      <div
        className={`faqs-question__ans ${
          showAns ? 'faqs-question__ans-open' : 'faqs-question__ans-close'
        }`}
      >
        {props.queInfo.ans && (
          <p style={{ fontSize: '1.4rem', color: 'white' }}>
            {props.queInfo.ans}
          </p>
        )}
        {props.queInfo.list && (
          <ul style={{ margin: '1.5rem 0' }}>
            {props.queInfo.list.map((li, index) => (
              <li
                key={index}
                style={{ margin: '1rem 0', fontSize: '1.4rem', color: 'white' }}
              >
                {li}
              </li>
            ))}
          </ul>
        )}
        {props.queInfo.link && (
          <a
            target='_blank'
            rel='noreferrer'
            href={`${props.queInfo.link}`}
           style={{ margin: '1rem 0', fontSize: '1.4rem', color: 'white' }}
          >
            {props.queInfo.link}
          </a>
        )}
      </div>
    </li>
  );
};

export default Question;
