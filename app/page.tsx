"use client"
import Image from "next/image";
import './page.scss'
import { useState } from "react";
import { FaStairs } from "react-icons/fa6";
export default function Home() {
  const [selectedFloor, setSelectedFloor] = useState<number>(1);
  const data = [
    {
      floor: 1,
      map_url: '/images/expozice_mapa1.png',
      expositions: [
        {
          title: "Nejaka expozice",
          description: "Tady se neco nachazi"
        }
      ],
    },
    {
      floor: 2,
      map_url: '/images/expozice_mapa1.png',
      expositions: [
        {
          title: "Nejaka expozice v druhem podlazi",
          description: "Tady se neco nachazi"
        }
      ],
    }
  ]
  return (
    <main className="">
      <div className="expozice-img min-h-screen w-full relative">
        <img className="absolute inset-0 w-full h-full object-cover" src="https://vida.cz/images/headers/main/145/_thumb1/expoziceweb-1.webp" alt="Sunset in the mountains" />
        <div className="overlay"></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="flex justify-center items-center p-1 md:p-10">
          <div className="rounded overflow-hidden shadow-lg bg-white text-black relative z-10">
            <div className="px-6 py-4">
              <div className="flex justify-between items-center">
                <div className="font-bold text-3xl mb-2">Mapa expozice</div>
                <div className="flex items-center">
                  {/*JSON.stringify(selectedFloor)*/}
                  <div className="bg-gray-200 rounded py-3 px-4">
                    <FaStairs className="text-xl" />
                  </div>
                  {data.map(item => (
                    <div key={item.floor}>
                      <input id={'floor' + item.floor} onChange={e => setSelectedFloor(parseInt(e.target.value))} type="radio" value={item.floor} name="floorSelectionRadio" className="hidden" />
                      <label htmlFor={'floor' + item.floor} className="ms-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-blue-900 dark:text-blue-400">
                        {item.floor}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <Image width={1500} height={960} src="/images/expozice_mapa1.png" alt="Mapa expozice" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
