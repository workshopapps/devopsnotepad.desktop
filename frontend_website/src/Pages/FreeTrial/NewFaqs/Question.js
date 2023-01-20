import { useState } from 'react';
import './_faqs.scss';

const Question = (props) => {
  const [showAns, setShowAns] = useState(false);
  const toggleShowAnsHandler = () => {
    setShowAns((prevState) => !prevState);
  };
  return (
    <li
      className={`nfaqs-question ${
        showAns ? 'nfaqs-question__open' : 'nfaqs-question__close'
      }`}
    >
      <button className='nfaqs-question_que' onClick={toggleShowAnsHandler}>
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
      <div
        className={`nfaqs-question__ans ${
          showAns ? 'nfaqs-question__ans-open' : 'nfaqs-question__ans-close'
        }`}
      >
        {props.queInfo.ans && (
          <p style={{ fontSize: '1.4rem', color: '#4B4B4B' }}>
            {props.queInfo.ans}
          </p>
        )}
        {props.queInfo.list && (
          <ul style={{ margin: '1.5rem 0' }}>
            {props.queInfo.list.map((li, index) => (
              <li
                key={index}
                style={{
                  margin: '1rem 0',
                  fontSize: '1.4rem',
                  color: '#4B4B4B',
                }}
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
            style={{ margin: '1rem 0', fontSize: '1.4rem', color: '#4B4B4B' }}
          >
            {props.queInfo.link}
          </a>
        )}
      </div>
    </li>
  );
};

export default Question;
