import React from 'react';
import PageLayout from '../layouts/PageLayout';
import Container from '../components/ui/Container';
import EditNoteForm from '../components/EditNoteForm';

const EditPage = () => {
  return (
    <>
      <PageLayout>
        <Container>
          <h2>Edit Note</h2>
          <EditNoteForm />
        </Container>
      </PageLayout>
    </>
  );
};

export default EditPage;
