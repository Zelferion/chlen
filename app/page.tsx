import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-center text-white text-6xl">Nothing here for now</h1>
      <Link href="/hah" className="text-center text-blue-500 text-6xl">
        Test the editor
      </Link>
      <h3 className="text-center text-white text-6xl">
        In future there will be a main page
      </h3>
    </main>
  );
}
