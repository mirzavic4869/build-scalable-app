import React from 'react';
import PageLayout from '../layouts/PageLayout';
import Container from '../components/ui/Container';
import AddNoteForm from '../components/AddNoteForm';

const AddPage = () => {
  return (
    <>
      <PageLayout>
        <Container>
          <h2>Add New Note</h2>
          <AddNoteForm />
        </Container>
      </PageLayout>
    </>
  );
};

export default AddPage;
