import { useState } from 'react'
import api from "../../services/api";
import Button from '../Button/Button'
import styles from './newnote.module.css'

function NewNote({id, initialTitle, initialContent, onCancel, onSave, edit}) {

  const [title, setTitle] = useState(initialTitle)
  const [content, setContent] = useState(initialContent)

  const deleteNote = () =>{
    
    api.delete(`/${id}`)
    .then(() => {
      console.log("Removida"); 
      onSave();
    })
    .catch(err => console.error(err));

    onSave();
    onCancel();
  }

  const createNote = () => {
    api.post("/", {
    title: title,
    content: content,
    })
    .then((res) => {
      console.log("Criada:", res.data); 
      onSave();
    })
    .catch(err => console.error(err));
  }

  const editNote = () => {

    api.patch(`/${id}`, {
      title: title,
      content: content,
    })
    .then((res) => {
      console.log("Atualizada:", res.data); 
      onSave();
    })
    .catch(err => console.error(err));

  }

  return (
    <>
        <div  className={`${styles.note} ${(id%2==0) ? styles.pink : styles.yellow}`}>
        <input 
          type="text"
          value={title}   
          onChange={(e) => setTitle(e.target.value)} 
          className={styles.inp}
        />
        <textarea 
        name="" 
        id="" 
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className={styles.text}
        ></textarea>
      </div>
      <div className={styles.buttonHolder}>
            <Button
                color={(id % 2 !== 0) ? "pink" : "yellow"}
                onclick={onCancel}
                text="Cancelar"
            ></Button>
            {edit && (
              <Button
              color={(id % 2 !== 0) ? "pink" : "yellow"}
              onclick={deleteNote}
              text="Apagar"
              ></Button>
            )}
            <Button
                color={(id % 2 !== 0) ? "pink" : "yellow"}
                onclick={edit? editNote : createNote}
                text="Salvar"
            ></Button>
      </div>
    </>
  )
}

export default NewNote
