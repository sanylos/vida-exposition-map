import { NextResponse } from 'next/server'

export async function GET(request: Request) {
    const floors = [
        {
            number: 1,
            map_url: '/images/expozice_mapa1.png',
        },
        {
            number: 2,
            map_url: '/images/expozice_mapa2.png',
        }
    ]
    return NextResponse.json({ ...floors })
}