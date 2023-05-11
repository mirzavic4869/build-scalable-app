import React from 'react';

export default function AddPage() {
  return (
    <>
      <p className="text-3xl font-semibold">Add New Note</p>
      <AddNoteForm />
    </>
  );
}

const AddNoteForm = () => {
  return (
    <>
      <form>
        <label>
          Title:
          <input type="text" name="title" />
        </label>
        <label>
          Note:
          <textarea name="note" />
        </label>
        <button type="submit">Add</button>
      </form>
    </>
  );
};
