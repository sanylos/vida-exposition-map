"use client"
import Image from "next/image";
import './page.scss'
import { useState } from "react";
import { FaStairs } from "react-icons/fa6";
import ExpositionCard from "./components/ExpositionCard";
export default function Home() {
  const [selectedFloor, setSelectedFloor] = useState<number>(1);
  const expositions = [
    {
      name: 'Planeta',
      description: 'Nejdřív rozpoutejte tornádo a pokuste se ustát zemětřesení, pak si v rotující místnosti užijte účinky odstředivé síly a pohrajte si s oceánem v lahvi.',
      floor: 1,
      image: 'https://vida.cz/images/headers/main/132/_thumb1/expimgplaneta.png'
    },
    {
      name: 'Člověk',
      description: 'V obřím srdci se zaposlouchejte do vlastního tepu, vyzkoušejte si, jak namáhavá je činnost tlustého střeva, pokuste se masáží srdce zachránit lidský život, změřte si, jak vysoko vyskočíte a jaký máte postřeh, pronikněte do tajů znakové řeči, zkuste, jak vidí lidé se zrakovými vadami, vyndejte ježka z klece a vyřešte další zapeklité šifry a hlavolamy.',
      floor: 1,
      image: 'https://vida.cz/images/headers/main/131/_thumb1/expimgclovek.png'
    },
    {
      name: 'Mikrosvět',
      description: 'Postavte si magnetickou sochu, užijte si pohled na elektrický oblouk, který stoupá po žebříku a prozkoumejte svět pod mikroskopem.',
      floor: 1,
      image: 'https://vida.cz/images/headers/main/131/_thumb1/expimgclovek.png'
    },
    {
      name: 'Civilizace',
      description: 'Rozjeďte ledničku na lidský pohon, postavte z lega vlastní střed Brna, napište svá přání na zeď naděje a v hlukové místnosti zkuste překřičet tryskáč.',
      floor: 1,
      image: 'https://vida.cz/images/headers/main/131/_thumb1/expimgclovek.png'
    },
    {
      name: 'Dětské science centrum',
      description: 'Na nejmenší návštěvníky tu čeká dopravní hřiště, kuličková dráha, archeologické pískoviště, obří piano, oblíbený tobogán i vodní hrátky s mlýnky.',
      floor: 1,
      image: 'https://vida.cz/images/headers/main/131/_thumb1/expimgclovek.png'
    },
    {
      name: 'Venkovní expozice',
      description: 'Hravé exponáty pod širým nebem. Těšte se na hučící kámen, tlakovou fontánu nebo akustické uši. To vše s krásným výhledem na pavilony brněnského výstaviště.',
      floor: 1,
      image: 'https://vida.cz/images/headers/main/131/_thumb1/expimgclovek.png'
    },
  ]
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
        <div className="flex flex-col lg:flex-row justify-center items-start p-1 md:p-10">
          <div className="rounded overflow-hidden shadow-lg bg-white text-black relative z-10">
            <div className="px-6 py-4">
              <div className="flex justify-between items-center">
                <div className="font-bold text-3xl mb-2">Mapa expozice</div>
                <div className="flex items-center">
                  {/*JSON.stringify(selectedFloor)*/}
                  <div className="bg-gray-200 rounded-lg py-3 px-4">
                    <FaStairs className="text-xl" />
                  </div>
                  {data.map(item => (
                    <div key={item.floor}>
                      <input id={'floor' + item.floor} onChange={e => setSelectedFloor(parseInt(e.target.value))} type="radio" value={item.floor} name="floorSelectionRadio" className="hidden" />
                      <label htmlFor={'floor' + item.floor} className={(selectedFloor == item.floor && "bg-blue-300 text-blue-900") + " ms-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-100 hover:bg-blue-300 text-blue-400"}>
                        {item.floor}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <Image width={1500} height={960} src="/images/expozice_mapa1.png" alt="Mapa expozice" />
            </div>
          </div>
          <div className="sm:w-1/3 ms-1 rounded overflow-hidden shadow-lg text-black relative z-10 h-full">
            {expositions.map((exposition, index) => (
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
