import Image from "next/image";
import './page.scss'
export default function Home() {
  return (
    <main className="">
      <div className="expozice-img min-h-screen w-full relative">
        <img className="absolute inset-0 w-full h-full object-cover" src="https://vida.cz/images/headers/main/145/_thumb1/expoziceweb-1.webp" alt="Sunset in the mountains" />
        <div className="overlay"></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="flex justify-center items-center p-1 md:p-10">
          <div className="rounded overflow-hidden shadow-lg bg-white text-black relative z-10">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Mapa expozice</div>
              <img className="w-auto h-auto" src="https://mscb.vida.cz/_media/cz/prace/programator2024/czmap.png" alt="Mapa expozice" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
