import Button from '../button';

export default function AddNoteForm() {
  return (
    <>
      <form className="flex flex-col justify-center w-full gap-8 mx-auto md:Sw-96">
        <div className="flex flex-col items-center justify-center">
          <label className="mr-4 font-semibold">Title:</label>
          <input
            className="w-full p-4 border border-blue-900 border-solid rounded-md outline-none appearance-none md:w-96"
            type="text"
            name="title"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <label className="mr-4 font-semibold">Note:</label>
          <textarea
            className="w-full p-4 border border-blue-900 border-solid rounded-md outline-none appearance-none md:w-96"
            name="note"
          />
        </div>
        <div className="flex justify-center w-full gap-4 mx-auto md:w-96">
          <Button name="Add" />
        </div>
      </form>
    </>
  );
}
