"use client"
interface Exposition {
    name: string,
    description: string,
    floor: number,
    image: string
}
const ExpositionCard = ({ exposition }: { exposition: Exposition }) => {
    return (
        <div style={{
            backgroundImage: 'url(' + exposition.image + ')',
        }}
            className="bg-cover bg-start hover:bg-center mb-1 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100">
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{exposition.name}</h5>
                <p className="mb-3 font-normal text-gray-700">{exposition.description}</p>
            </div>

        </div>
    )
}

export default ExpositionCard