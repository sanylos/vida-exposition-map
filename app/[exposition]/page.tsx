"use client"

import { useEffect, useState } from "react"

const ExpositionPage = ({ params }: { params: { exposition: string } }) => {
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
        <div>{JSON.stringify(exposition)}</div>
    )
}

export default ExpositionPage