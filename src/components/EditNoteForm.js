import React from 'react';
import { Form, FormGroup, Label, Input, TextArea } from './ui/Forms';
import Button from './ui/Button';

const EditNoteForm = () => {
  return (
    <>
      <Form>
        <FormGroup>
          <Label>Title:</Label>
          <Input type="text" name="title" />
        </FormGroup>
        <FormGroup>
          <Label>Note:</Label>
          <TextArea name="note" rows={12} />
        </FormGroup>
        <FormGroup>
          <Button type="submit">Save</Button>
          <Button>Delete</Button>
        </FormGroup>
      </Form>
    </>
  );
};

export default EditNoteForm;
