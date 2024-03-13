import React from 'react';
import PageLayout from '../layouts/PageLayout';
import Container from '../components/ui/Container';
import EditNoteForm from '../components/EditNoteForm';
import { Link } from 'react-router-dom';

const EditPage = () => {
  return (
    <>
      <PageLayout>
        <Container>
          <div>
            <h4>
              <Link to={'/'}>Home</Link> / Edit
            </h4>
          </div>
          <h2>Edit Note</h2>
          <EditNoteForm />
        </Container>
      </PageLayout>
    </>
  );
};

export default EditPage;
