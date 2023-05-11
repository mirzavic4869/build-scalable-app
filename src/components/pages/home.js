import React from 'react';

const NotesList = () => {
  return <div>Notes List</div>;
};

export default function HomePage() {
  return (
    <>
      <button className="px-6 py-2 bg-teal-400 rounded-lg shadow-md">Add New Note</button>
      <NotesList />
    </>
  );
}
