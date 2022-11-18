import faq from './Faq.module.css';
import cloud from './Images/cloud.png';

const Faq = () => {
  return (
    <div className={faq.faqContainer}>
      <div className={faq.faqHeader}>
        You've got questions? We've got answers!
      </div>

      <div className={faq.gridContainer}>
        {/* for mobile view */}
        <div className={faq.mobileview}>
          <div className={faq.grid2Header}>Ans.</div>
          <div className={faq.ansgrid}>
            <div>
              <img src={cloud} alt="cloud" />
            </div>
            <div>
              Opspad is a DevOps notepad you can use to manage and keep track of
              your servers.
            </div>
          </div>
        </div>

        <div>
          <div className={faq.grid1Header}>FAQS</div>
          <div className={faq.buttonContainer}>
            <button
              className={faq.btn}
              style={{
                backgroundColor: '#143681',
                color: 'white',
              }}
            >
              What is Opspad?
            </button>
            <button className={faq.btn}>Why use Opspad?</button>
            <button className={faq.btn}>
              How many Servers can i serve at once?
            </button>
            <button className={faq.btn}>
              Can i extend maximum server list?
            </button>
            <button className={faq.btn}>How safe are my Passwords?</button>
            <button className={faq.btn}>What platforms support Opspad?</button>
          </div>
        </div>
        <div className={faq.desktopView}>
          <div className={faq.grid2Header}>Ans.</div>
          <div className={faq.ansgrid}>
            <div>
              <img src={cloud} alt="cloud" />
            </div>
            <div>
              Opspad is a DevOps notepad you can use to manage and keep track of
              your servers.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
