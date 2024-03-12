import React from 'react';
import PageLayout from '../layouts/PageLayout';
import NotesList from '../components/NotesList';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';

const HomePage = () => {
  return (
    <>
      <PageLayout>
        <Container>
          <Button>Add New Note</Button>
          <h1>All Notes</h1>
          <NotesList>All Notes</NotesList>
        </Container>
      </PageLayout>
    </>
  );
};

export default HomePage;
