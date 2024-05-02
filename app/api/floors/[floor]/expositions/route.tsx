import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
interface exposition {
    floor: number
}
export async function GET(request: NextRequest, { params }: { params: { floor: number } }) {
    const res = await fetch(process.env.NEXT_PUBLIC_URL + '/api/expositions');
    let expositions: exposition[] = await res.json();
    expositions = Object.values(expositions);
    const filteredExposition: exposition[] = expositions.filter(exposition => exposition.floor == params.floor)
    return NextResponse.json(filteredExposition)
}