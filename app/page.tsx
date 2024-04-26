import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-cyan-100">
        <img className="w-full" src="https://mscb.vida.cz/_media/cz/prace/programator2024/czmap.png" alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl text-black mb-2">Expozice</div>
          <p className="text-black text-base">
            expozice 1, expozice 2, ...
          </p>
        </div>
      </div>
    </main>
  );
}
