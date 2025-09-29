import { React, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getAllNotes, addNote, deleteNote, archiveNote, unarchiveNote } from './utils/local-data';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import AddPage from './pages/AddPage';
import ArchivePage from './pages/ArchivePage';
import NoteFoundPage from './pages/NotFoundPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
      return JSON.parse(savedNotes);
    } else {
      return getAllNotes();
    }
  });

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const onDeleteHandler = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  }

  const onArchiveHandler = (id) => {
    const updatedNotes = notes.map((note) => {
      if (note.id === id) {
        return { ...note, archived: !note.archived }
      }
      return note;
    });
    setNotes(updatedNotes);
  }

  const onAddNoteHandler = ({ title, body }) => {
    const newNote = {
      id: `notes-${+new Date()}`,
      title: title || '(untitled)',
      body,
      createdAt: new Date().toISOString(),
      archived: false
    }
    setNotes([...notes, newNote]);
  }

  return (
    <div className="app-container">
      <header>
        <h1>Aplikasi Catatan</h1>
      </header>
      <main>
        <Routes>
          <Route path='/'
            element={<HomePage notes={notes} />}>
          </Route>
          <Route path='/notes/:id' element={<DetailPage notes={notes} onDelete={onDeleteHandler} onArchive={onArchiveHandler} />} />
          <Route path='/notes/new' element={<AddPage onAdd={onAddNoteHandler} />} />
          <Route path='/archives' element={<ArchivePage notes={notes} />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
