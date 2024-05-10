import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center pr-10 pl-10 bg-zinc-950">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-zinc-100">
          Hello, I'm Zelferion
        </h1>
        <p className="text-2xl font-bold text-zinc-400 m-3">
          and I <span className="text-blue-700">suck</span> at coding
        </p>
      </div>
      <div className="w-full absolute bottom-0 px-12 pb-12">
        <p className="text-3xl text-zinc-100 text-center">
          I'm using <span className="text-blue-700 font-bold">Next.js</span>{" "}
          because
          <span className="text-green-800 font-bold"> Vue.js </span> does not
          work for me lol
        </p>
      </div>
    </main>
  );
}
