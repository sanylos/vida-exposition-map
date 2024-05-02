import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
interface Exhibit {
    id: string
}
export async function GET(request: NextRequest, { params }: { params: { exhibit: string } }) {
    const res = await fetch(process.env.NEXT_PUBLIC_URL + '/api/exhibits');
    let exhibits: Exhibit[] = await res.json();
    const exhibit: Exhibit | undefined = exhibits.find(exhibit => exhibit.id == params.exhibit)
    if (exhibit) {
        return NextResponse.json(exhibit)
    }
    return NextResponse.json(null);
}