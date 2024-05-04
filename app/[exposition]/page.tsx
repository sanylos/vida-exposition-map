"use client"

import Link from "next/link";
import { useEffect, useState } from "react"

const ExpositionPage = ({ params }: { params: { exposition: string } }) => {
    interface Exposition {
        name?: string,
        description?: string
    }
    interface Exhibit {
        id: string,
        name: string,
        description: string,
        image: string,
    }
    const [exposition, setExposition] = useState<Exposition>({});
    const [exhibits, setExhibits] = useState<Exhibit[]>([]);
    const fetchExhibits = async () => {
        const res = await fetch(process.env.NEXT_PUBLIC_URL + '/api/expositions/' + params.exposition + '/exhibits');
        const data = await res.json();
        setExhibits(Object.values(data));
    }
    const fetchExposition = async () => {
        const res = await fetch(process.env.NEXT_PUBLIC_URL + '/api/expositions/' + params.exposition);
        const data = await res.json();
        setExposition(data)
    }
    useEffect(() => {
        fetchExposition();
        fetchExhibits();
    }, [])
    console.log(exhibits)
    return (
        <>
            {
                exposition ?
                    <main className="pt-5 pb-16 lg:pb-24 bg-white antialiased">
                        <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
                            <article className="mx-auto w-full format format-sm sm:format-base lg:format-lg format-blue">
                                <header className="mb-4 lg:mb-6 not-format">
                                    <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl">{exposition.name}</h1>
                                </header>
                                <p className="lead">{exposition.description}</p>
                                <div className="grid grid-cols-1 md:grid-cols-3">
                                    {exhibits.map(exhibit => (
                                        <div key={exhibit.name} className="mx-1 my-1 bg-gray-100 border border-gray-200 hover:bg-gray-200 rounded-lg shadow-2xl">
                                            <Link href={'exponaty/' + exhibit.id}>
                                                <img className="rounded-t-lg h-auto w-full" src={exhibit.image} alt="" />
                                            </Link>
                                            <div className="p-5">
                                                <Link href={'exponaty/' + exhibit.id}>
                                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{exhibit.name}</h5>
                                                </Link>
                                                <Link href={'exponaty/' + exhibit.id} className="w-full h-11 inline-flex justify-center items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                                                    Zobrazit exponát
                                                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </article>

                        </div>
                    </main>
                    :
                    <div className="bg-gray-200 w-full px-16 md:px-0 h-screen flex items-center justify-center">
                        <div className="bg-white border border-gray-200 flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg shadow-2xl">
                            <p className="text-6xl md:text-7xl lg:text-9xl font-bold tracking-wider text-gray-300">404</p>
                            <p className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-wider text-gray-500 mt-4">Expozice nebyla nalezena</p>
                            <p className="text-gray-500 mt-4 pb-4 border-b-2 text-center">Omouváme se, ale tuto expozici neznáme :(</p>
                            <Link href='/' className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 mt-6 rounded transition duration-150" title="Return Home">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path>
                                </svg>
                                <span>Zpět na mapu</span>
                            </Link>
                        </div>
                    </div>
            }
        </>
    )
}

export default ExpositionPage