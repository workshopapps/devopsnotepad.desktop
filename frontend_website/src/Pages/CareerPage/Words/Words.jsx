import Word from './Word';
import classes from './Words.module.css';

const words = [
  {
    message:
      'I have obtained an opportunity to reflect, find my strengths, know my weaknesses and grow at a matchless pace.',
    name: 'Grace Credo',
    position: 'Intern',
  },
  {
    message:
      'From a person with no goals to someone living with purpose, from leading myself to leading teams ,from a local member to a responsible leader - this is the incredible development I’ve gone through as member in Team sandpaper',
    name: 'Oreoluwa Dennis',
    position: 'Leader of management team',
  },
];
const Words = () => {
  return (
    <section className={classes.words} data-testid='career__words'>
      <h1 className={classes.h1}>Words from our Team</h1>
      <ul className={classes.ul}>
        {words.map((word, index) => (
          <Word
            key={index}
            message={word.message}
            name={word.name}
            position={word.position}
          />
        ))}
      </ul>
    </section>
  );
};
export default Words;
