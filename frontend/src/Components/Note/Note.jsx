import { useState } from 'react'
import styles from './note.module.css'

function Note({date, title, content, onclick}) {

  return (
    <>
      <div onClick={onclick} className={styles.note}>
        <header className={styles.header}>
            <p className={styles.date}>{date}</p>
        </header>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.content}>{content}</p>
      </div>
    </>
  )
}

export default Note
