/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/button-has-type */
/* eslint-disable no-undef */
import React from 'react';
import Modal from 'react-modal';
import close24 from '../../assets/index'
import TextResizer from './TextResizer';
import styles from './Modal.module.css'

const customStyles = {
  content: {
    
  },
};

Modal.setAppElement('#root');

function ModalFont () {
 
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button
        className={`${styles.ModalText}`}
        onClick={openModal}
      >
        Medium
      </button>
    
      
      <Modal 
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        className={styles.ModalContainer}
      >
        <div className=''>
        <img src={close24}  className={styles.ModalClose} alt="close" onClick={closeModal} />
        <TextResizer/>
        </div>
      </Modal>
    </div>
  );
}

export default ModalFont;