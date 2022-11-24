import React from 'react'
import notesStyle from './Note.module.css';

function Notes() {
  return (
    <div className={notesStyle.noteWrapper}>
      <form className={notesStyle.noteForm}>
        <input type="text" placeholder="" className={notesStyle.noteFormInput}/>
      </form>
    </div>
  )
}

export default Notes