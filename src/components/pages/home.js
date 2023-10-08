import Link from 'next/link';
import Button from '../button';
import { NotesList } from '../form';

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center w-full gap-8 p-8 mx-auto md:w-96">
      <p className="text-xl font-semibold">All Notes</p>
      <Link href="/add">
        <Button name="Add New Note" />
      </Link>
      <NotesList />
    </div>
  );
}
