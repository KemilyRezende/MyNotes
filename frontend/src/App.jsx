import { useEffect, useState } from 'react'
import Header from './Components/Header/Header'
import Button from './Components/Button/Button'
import Note from './Components/Note/Note'
import NewNote from './Components/NewNote/NewNote'
import api from "./services/api";
import './App.css'


function App() {

  const [showNewNote, setShowNewNote] = useState(false)
  
  const [edit, setEdit] = useState(false)

  const [notes, setNotes] = useState([]);

  const [initialContent, setInitialContent] = useState("Descrição da nota...");

  const [initialTitle, setInitialTitle] = useState("Nova nota...");


  /* useEffect(() => {
    api.get("/")
      .then(res => setNotes(res.data))
      .catch(err => console.error(err));
  }, []); */

  const fetchNotes = () => {
    api.get("/")
      .then(res => setNotes(res.data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const [id, setID] = useState(notes.length);

  return (
    <>
      <Header></Header>
      <div className='container'>
        {notes.map( n => (
            <Note
            key={n.id}
            title={n.title}
            content={n.content}
            date={new Date(n.updatedAt).toLocaleDateString("pt-BR")}
            onclick={() => {
              setID(n.id);
              setInitialTitle(n.title);
              setInitialContent(n.content);
              setEdit(true); 
              setShowNewNote(true);         
            } }
            ></Note>
          )
          )

          }
      </div>
      <footer className='footer'>
        <Button
        color="pink"
        onclick={()=>{
          setID(notes.length);
          setInitialTitle("Nova nota...");
          setInitialContent("Descrição da nota...");
          setEdit(false);
          setShowNewNote(true);}}
        text="Criar"
        ></Button>
      </footer>
      {showNewNote && (
        <div className="overlay">
          <NewNote
            id={id}
            initialTitle={initialTitle}
            initialContent={initialContent}
            edit={edit}
            onSave={() => {
              fetchNotes();
              setShowNewNote(false);}}
            onCancel={() => {
              setShowNewNote(false);
            }}
          />
        </div>
      )}
    </>
  )
}

export default App
