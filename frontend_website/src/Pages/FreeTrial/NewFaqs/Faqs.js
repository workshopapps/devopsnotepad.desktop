import QUESTIONS from './faq.json';
import Question from './Question';
import './_faqs.scss';
const Faqs = () => {
  return (
    <section className='nfaqs'>
      <h2 className='nfaqs-title'>Frequently Asked Questions</h2>
      <ul className='nfaqs-questions'>
        {QUESTIONS.map((queInfo) => (
          <Question key={queInfo.id} queInfo={queInfo} />
        ))}
      </ul>
    </section>
  );
};

export default Faqs;
