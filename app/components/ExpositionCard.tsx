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
            transition: 'ease 2s background-position'
        }}
            className="bg-cover bg-start hover:bg-center mb-1 flex flex-col items-center bg-white rounded-lg shadow md:flex-row md:max-w-xl">
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-200">{exposition.name}</h5>
                <p className="mb-3 font-normal text-gray-100">{exposition.description}</p>
            </div>

        </div>
    )
}

export default ExpositionCard