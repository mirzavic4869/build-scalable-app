import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, TextArea } from '../components/ui/Forms';
import Button from './ui/Button';
import { v4 as uuidv4 } from 'uuid';

const AddNoteForm = () => {
  const [state, setState] = useState({ title: '', note: '' });

  const handleTitleChange = (e) => {
    setState({ ...state, title: e.target.value });
  };

  const handleNoteChange = (e) => {
    setState({ ...state, note: e.target.value });
  };

  const handleSubmit = (e) => {
    let existing = localStorage.getItem('notes');

    existing = existing ? JSON.parse(existing) : [];

    const noteId = uuidv4();

    existing.push({ ...state, id: noteId });

    localStorage.setItem('notes', JSON.stringify(existing));

    e.preventDefault();
  };

  const { title, note } = state;
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Title:</Label>
          <Input type="text" name="title" value={title} onChange={handleTitleChange} />
        </FormGroup>
        <FormGroup>
          <Label>Note:</Label>
          <TextArea name="note" rows="12" value={note} onChange={handleNoteChange} />
        </FormGroup>
        <FormGroup>
          <Button type="submit">Add</Button>
        </FormGroup>
      </Form>
    </>
  );
};

export default AddNoteForm;
