import React from 'react';
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';

const NoteList = () => {
  return <div>Note List</div>;
};

const HomePage = () => {
  return (
    <>
      <Header />
      <button>Add New Note</button>
      <NoteList />
      <Footer />
    </>
  );
};

export default HomePage;
