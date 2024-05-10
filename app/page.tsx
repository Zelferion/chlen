import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen bg-zinc-950">
      <div className="text-center mt-20"> {/* Adjusted margin top */}
        <h1 className="text-6xl font-bold text-zinc-100">
          Hello, I&apos;m Zelferion
        </h1>
        <p className="text-2xl font-bold text-zinc-400 m-3">
          and I <span className="text-blue-700">suck</span> at coding
        </p>
        <p className="text-5xl font-bold m-20 text-zinc-300">
          Oh i forgot to tell youthat <span  className="text-blue-700">I use Arch btw!</span>
        </p>
      </div>
      <div className="w-full px-12 pb-12">
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