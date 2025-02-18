import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-amber-700">
      <div className="text-red-400">
          <Link href="/homepage">home</Link>
      </div>
    </div>
  );
}
