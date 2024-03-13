import React, { useEffect, useState } from 'react';
import { Form, FormGroup, Label, Input, TextArea } from './ui/Forms';
import Button from './ui/Button';
import { useLocation, useNavigate } from 'react-router-dom';
import getLocalStorageData from '../utils/getLocalStorageData';

const EditNoteForm = () => {
  const location = useLocation();
  const history = useNavigate();
  const [allNotes, setAllNotes] = useState(null);
  const [currentNote, setCurrentNote] = useState({ title: '', note: '' });

  useEffect(() => {
    const notes = getLocalStorageData('notes');

    setAllNotes(notes);

    const noteId = location.pathname.replace('/edit/', '');

    const currentNote = notes.filter((note) => note.id === noteId);

    setCurrentNote(currentNote[0]);
  }, []);

  const handleTitleChange = (e) => {
    setCurrentNote({ ...currentNote, title: e.target.value });
  };

  const handleNoteChange = (e) => {
    setCurrentNote({ ...currentNote, note: e.target.value });
  };

  const handleSubmit = (e) => {
    const newNotes = allNotes.map((note) => {
      if (note.id === currentNote.id) {
        return { ...note, title: currentNote.title, note: currentNote.note };
      } else {
        return note;
      }
    });

    localStorage.setItem('notes', JSON.stringify(newNotes));

    e.preventDefault();
  };

  const handleDeleteNote = (e) => {
    const newNotes = allNotes.filter((note) => note.id !== currentNote.id);

    setCurrentNote(null);

    setAllNotes(newNotes);

    localStorage.setItem('notes', JSON.stringify(newNotes));

    history('/');
  };

  const { title, note } = currentNote;
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Title:</Label>
          <Input type="text" name="title" value={title} onChange={handleTitleChange} />
        </FormGroup>
        <FormGroup>
          <Label>Note:</Label>
          <TextArea name="note" rows={12} value={note} onChange={handleNoteChange} />
        </FormGroup>
        <FormGroup>
          <Button type="submit">Save</Button>
          <Button danger="true" onClick={handleDeleteNote}>
            Delete
          </Button>
        </FormGroup>
      </Form>
    </>
  );
};

export default EditNoteForm;
