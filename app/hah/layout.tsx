import Image from "next/image";

export default function HahLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <nav className="text-zinc-300 bg-zinc-900 w-full divide-y divide-zinc-500 px-2">
        <ul className="flex gap-0 text-sm p-1">
          <p className="text-zinc-200 font-bold px-2 text-xl cursor-default">
            TFeditor
          </p>
          <button className="text-zinc-300 w-10 hover:text-zinc-400">
            file
          </button>
          <button className="text-zinc-300 w-10 hover:text-zinc-400">
            edit
          </button>
          <button className="text-zinc-300 w-10 hover:text-zinc-400">
            view
          </button>
          <button className="text-zinc-300 w-10 hover:text-zinc-400">
            help
          </button>
        </ul>
        <div className="pt-2">
          <ul className="flex gap-0 text-sm divide-x">
            <button className="flex flex-col items-center justify-center hover:brightness-75">
              <p className="text-zinc-400 font-bold">View</p>
              <Image
                src="/cube.svg"
                alt="Vercel Logo"
                className="filter invert grayscale"
                width={75}
                height={75}
                priority
              />
            </button>
          </ul>
        </div>
      </nav>
      <div>{children}</div>
    </div>
  );
}
