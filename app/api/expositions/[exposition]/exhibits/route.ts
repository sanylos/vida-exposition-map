import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
interface exhibit {
    exposition_id: string
}
export async function GET(request: NextRequest, { params }: { params: { exposition: string } }) {
    const res = await fetch(process.env.NEXT_PUBLIC_URL + '/api/exhibits');
    let exhibits: exhibit[] = await res.json();
    exhibits = Object.values(exhibits);
    const filteredExhibits: exhibit[] = exhibits.filter(exhibit => exhibit.exposition_id == params.exposition)
    if (filteredExhibits) {
        return NextResponse.json(filteredExhibits);
    }
    return NextResponse.json(null);
}