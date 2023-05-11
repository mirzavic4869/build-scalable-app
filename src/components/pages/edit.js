import React from 'react';

export default function EditPage() {
  return (
    <>
      <p className="text-3xl font-semibold">Edit Note</p>
      <EditNoteForm />
    </>
  );
}

const EditNoteForm = () => {
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
        <button type="submit">Save</button>
        <button>Delete</button>
      </form>
    </>
  );
};
