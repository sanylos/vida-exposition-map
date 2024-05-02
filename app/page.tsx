"use client"
import Image from "next/image";
import './page.scss'
import { useEffect, useState } from "react";
import { FaStairs } from "react-icons/fa6";
import ExpositionCard from "./components/ExpositionCard";
export default function Home() {
  const [selectedFloor, setSelectedFloor] = useState<number>(1);
  const [expositions, setExpositions] = useState([]);
  const fetchExpositions = async () => {
    const res = await fetch(process.env.NEXT_PUBLIC_URL + '/api/floors/' + selectedFloor + '/expositions');
    let data = await res.json();
    setExpositions(Object.values(data));
  }
  useEffect(() => {
    fetchExpositions();
  }, [selectedFloor])
  const floors = [
    {
      number: 1,
      map_url: 'images/expozice_mapa1.png',
    },
    {
      number: 2,
      map_url: 'images/expozice_mapa2.png',
    }
  ]
  return (
    <main className="">
      <div className="expozice-img min-h-screen w-full relative">
        <img className="absolute inset-0 w-full h-full object-cover" src="https://vida.cz/images/headers/main/145/_thumb1/expoziceweb-1.webp" alt="Sunset in the mountains" />
        <div className="overlay"></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="flex flex-col lg:flex-row justify-center items-start p-1 md:p-10">

          <div className="rounded overflow-hidden shadow-lg bg-white text-black relative z-10">
            <div className="px-6 py-4">
              <div className="flex justify-between items-center">
                <div className="font-bold text-3xl mb-2">Mapa expozice</div>
                <div className="flex items-center">
                  <div className="bg-gray-200 rounded-lg py-3 px-4">
                    <FaStairs className="text-xl" />
                  </div>
                  {floors.map(floor => (
                    <div key={floor.number}>
                      <input id={'floor' + floor.number} onChange={e => setSelectedFloor(parseInt(e.target.value))} type="radio" value={floor.number} name="floorSelectionRadio" className="hidden" />
                      <label htmlFor={'floor' + floor.number} className={(selectedFloor == floor.number && "bg-blue-300 text-blue-900") + " ms-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-100 hover:bg-blue-300 text-blue-400"}>
                        {floor.number}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <Image width={1500} height={960} src={'/' + floors.find(floor => floor.number === selectedFloor)?.map_url || ''} alt="Mapa expozice" />
            </div>
          </div>

          <div className="w-full overflow-x-hidden lg:w-1/3 rounded shadow-lg text-black relative z-10 h-screen lg:overflow-y-auto">
            {expositions.filter(exposition => exposition.floor == selectedFloor).map((exposition, index) => (
              <div key={index}>
                <ExpositionCard exposition={exposition} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
