import styles from './DevopsCommunity.module.css';

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.inBanner}>
        <div className={styles.article}>
          <div className={styles.left}>
            <h1>Ask questions, Get answers, Share ideas</h1>
            <p>
              Our community has everything you need; ask questions, get answers,
              and share ideas with like-minded users.
            </p>
          </div>
          <div className={styles.right}>
            <div>
              <svg
                width='24'
                height='12'
                viewBox='0 0 24 12'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M12 6.75C13.63 6.75 15.07 7.14 16.24 7.65C17.32 8.13 18 9.21 18 10.38V12H6V10.39C6 9.21 6.68 8.13 7.76 7.66C8.93 7.14 10.37 6.75 12 6.75ZM4 7C5.1 7 6 6.1 6 5C6 3.9 5.1 3 4 3C2.9 3 2 3.9 2 5C2 6.1 2.9 7 4 7ZM5.13 8.1C4.76 8.04 4.39 8 4 8C3.01 8 2.07 8.21 1.22 8.58C0.48 8.9 0 9.62 0 10.43V12H4.5V10.39C4.5 9.56 4.73 8.78 5.13 8.1ZM20 7C21.1 7 22 6.1 22 5C22 3.9 21.1 3 20 3C18.9 3 18 3.9 18 5C18 6.1 18.9 7 20 7ZM24 10.43C24 9.62 23.52 8.9 22.78 8.58C21.93 8.21 20.99 8 20 8C19.61 8 19.24 8.04 18.87 8.1C19.27 8.78 19.5 9.56 19.5 10.39V12H24V10.43ZM12 0C13.66 0 15 1.34 15 3C15 4.66 13.66 6 12 6C10.34 6 9 4.66 9 3C9 1.34 10.34 0 12 0Z'
                  fill='#323232'
                />
              </svg>
              <span>1,305</span>
              <span>Online Now</span>
            </div>
            <div>
              <svg
                width='22'
                height='16'
                viewBox='0 0 22 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M15.6719 9.13C17.0419 10.06 18.0019 11.32 18.0019 13V16H22.0019V13C22.0019 10.82 18.4319 9.53 15.6719 9.13Z'
                  fill='#323232'
                />
                <path
                  d='M8 8C10.2091 8 12 6.20914 12 4C12 1.79086 10.2091 0 8 0C5.79086 0 4 1.79086 4 4C4 6.20914 5.79086 8 8 8Z'
                  fill='#323232'
                />
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M14.0019 8C16.2119 8 18.0019 6.21 18.0019 4C18.0019 1.79 16.2119 0 14.0019 0C13.5319 0 13.0919 0.0999998 12.6719 0.24C13.5019 1.27 14.0019 2.58 14.0019 4C14.0019 5.42 13.5019 6.73 12.6719 7.76C13.0919 7.9 13.5319 8 14.0019 8Z'
                  fill='#323232'
                />
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M8 9C5.33 9 0 10.34 0 13V16H16V13C16 10.34 10.67 9 8 9Z'
                  fill='#323232'
                />
              </svg>

              <span>156k</span>
              <span>Discussion</span>
            </div>
            <div>
              <svg
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M14.59 5.58L8 12.17L4.41 8.59L3 10L8 15L16 7L14.59 5.58ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z'
                  fill='#323232'
                />
              </svg>

              <span>48.5k</span>
              <span>Solution</span>
            </div>
          </div>
        </div>
        <div className={styles.searchBox}>
          <i className='fa-solid fa-magnifying-glass'></i>
          <input type='text' placeholder='search this category...' />
        </div>
      </div>
    </div>
  );
};

export default Banner;
