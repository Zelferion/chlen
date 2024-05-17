<<<<<<< HEAD
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
=======
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen bg-zinc-950">
      <div className="text-center mt-20"> {/* Adjusted margin top */}
        <h1 className="text-6xl font-bold text-zinc-100">
          Hello, I&apos;m Zelferion main
        </h1>
        <p className="text-2xl font-bold text-zinc-400 m-3 textshadow-white1">
          and I <span className="text-blue-700">suck</span> at coding
        </p>
        <p className="text-5xl font-bold m-20 text-zinc-100">
          Oh i forgot to tell you that <span  className="text-blue-700">I use Arch btw!</span>
        </p>
      </div>
      <div className="w-full px-8 pb-8">
        <p className="text-3xl text-zinc-100 text-center">
          I&apos;m using{" "}
          <span className="text-blue-700 font-bold">Next.js</span> because
          <span className="text-green-800 font-bold"> Vue.js </span> does not
          work for me lol
        </p>
      </div>
    </main>
  );
}
>>>>>>> 33f6a77163da370afd5d77733e45a1143a88617a
