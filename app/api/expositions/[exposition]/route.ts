import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
interface exposition {
    id: string
}
export async function GET(request: NextRequest, { params }: { params: { exposition: string } }) {
    const res = await fetch(process.env.NEXT_PUBLIC_URL + '/api/expositions');
    let expositions: exposition[] = await res.json();
    expositions = Object.values(expositions);
    const filteredExposition: exposition | undefined = expositions.find(exposition => exposition.id == params.exposition)
    if (filteredExposition) {
        return NextResponse.json(filteredExposition);
    }
    return NextResponse.json(null);
}