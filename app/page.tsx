import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12 bg-zinc-950 relative">
      {" "}
      {/* Added relative class */}
      <div className="flex flex-col items-center justify-center flex-1">
        {" "}
        {/* Changed height class to flex-1 */}
        <h1 className="text-6xl font-bold text-zinc-100 text-shadow-white2">
          Hello, I'm Zelferion
        </h1>
        <p className="text-2xl font-bold text-zinc-400 m-3">
          and I <span className="text-blue-700">suck</span> at coding
        </p>
      </div>
      <div className="absolute bottom-0 w-full">
        {" "}
        {/* Added absolute class and bottom-0 class */}
        <p className="text-3xl text-zinc-100 px-12 pb-12 text-center">
          {" "}
          {/* Added padding classes and text-center class */}
          and I'm using <span className="text-blue-700 font-bold">
            Next.js
          </span>{" "}
          because <span className="text-green-800 font-bold">Vue.js </span>
          does not work for me lol
        </p>
      </div>
    </main>
  );
}
