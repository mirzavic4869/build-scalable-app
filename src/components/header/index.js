import Link from 'next/link';

export default function Header() {
  return (
    <div className="py-6 text-center bg-slate-300">
      <Link href="/">
        <p className="text-2xl font-bold">Notes App</p>
      </Link>
    </div>
  );
}
