"use client"

import { useEffect, useState } from "react"

const ExpositionPage = ({ params }: { params: { exposition: string } }) => {
    interface Exposition {
        name: string
    }
    const [exposition, setExposition] = useState({});
    const fetchExposition = async () => {
        const res = await fetch(process.env.NEXT_PUBLIC_URL + '/api/expositions/' + params.exposition);
        const data = await res.json();
        setExposition(data)
    }
    useEffect(() => {
        fetchExposition();
    }, [])
    return (
        <>
            {
                exposition ?
                    <div>
                        <h1>{exposition.name}</h1>
                    </div>
                    :
                    <div>
                        <h1>Tato expozice nebyla nalezena :(</h1>
                    </div>
            }
        </>
    )
}

export default ExpositionPage