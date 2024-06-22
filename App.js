import React, { useState } from 'react'
import Home from './src/screens/home'
import AddNote from './src/screens/addNote'
import EditNote from './src/screens/editNote'

const CurrentPageWidget = ({ currentPage, noteList, setCurrentPage, addNote, note, setNote, editNote, deleteNote }) => {
  switch (currentPage) {
    case 'home':
      return (
        <Home
          noteList={noteList}
          setCurrentPage={setCurrentPage}
          setNote={setNote}
          deleteNote={deleteNote}
        />
      )
    case 'add':
      return <AddNote setCurrentPage={setCurrentPage} addNote={addNote}/>
    case 'edit':
      return <EditNote setCurrentPage={setCurrentPage} note={note} editNote={editNote}/>
    default:
      return <Home />
  }
}

const App = () => {
  const [currentPage, setCurrentPage] = useState('home')

  const [noteList, setNoteList] = useState([
    {
      id: 1,
      title: 'Note pertama',
      desc:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    },
  ])

  const [note, setNote] = useState({})

  const addNote = (title, desc) => {
    const id = noteList.length > 0 ? noteList[noteList.length - 1].id + 1 : 1;
    setNoteList([
      ...noteList,
      {
        id,
        title: title,
        desc: desc,
      },
    ]);
  };

  const editNote = (id, title, desc) => {
    const updatedNotes = noteList.map((note) => {
      if (note.id === id) {
        note.title = title
        note.desc = desc
      }
      return note;
    });
    setNoteList(updatedNotes);
  };

  const deleteNote = (id) => {
    const updatedNotes = noteList.filter((note) => {
      return note.id !== id;
    });
    setNoteList(updatedNotes)
  }

  return (
    <CurrentPageWidget
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      noteList={noteList}
      addNote={addNote}
      note={note}
      setNote={setNote}
      editNote={editNote}
      deleteNote={deleteNote}
    />
  )
}

export default App