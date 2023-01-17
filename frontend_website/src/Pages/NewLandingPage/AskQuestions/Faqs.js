import QUESTIONS from './faq.json';
import Question from './Question';
import './_faqs.scss';
const Faqs = () => {
  return (
    <section className='faqs'>
      <h2 className='faqs-title'>Frequently Asked Questions</h2>
      <ul className='faqs-questions'>
        {QUESTIONS.map((queInfo) => (
          <Question key={queInfo.id} queInfo={queInfo} />
        ))}
      </ul>
    </section>
  );
};

export default Faqs;
