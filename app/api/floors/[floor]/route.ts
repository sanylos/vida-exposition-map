import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
interface floor {
    number: number
}
export async function GET(request: NextRequest, { params }: { params: { floor: number } }) {
    const res = await fetch(process.env.NEXT_PUBLIC_URL + '/api/floors');
    let floors: floor[] = await res.json();
    floors = Object.values(floors);
    const filteredFloors: floor[] = floors.filter(floor => floor.number == params.floor)
    return NextResponse.json(filteredFloors)
}