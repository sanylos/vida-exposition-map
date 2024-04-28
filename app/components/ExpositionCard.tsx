"use client"
interface Exposition {
    name: string,
    description: string,
    floor: number,
    image: string
}
import { MdArrowForwardIos } from "react-icons/md";
const ExpositionCard = ({ exposition }: { exposition: Exposition }) => {
    return (
        <div style={{
            backgroundImage: 'url(' + exposition.image + ')',
            transition: 'ease 2s background-position'
        }}
            className="h-48 bg-cover bg-start hover:bg-center mb-1 flex flex-col items-center justify-between bg-white rounded-lg shadow md:flex-row md:max-w-xl">
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-stone-200">{exposition.name}</h5>
                <p className="mb-3 font-normal text-gray-100">{exposition.description.slice(0, 64)}...</p>
            </div>
            <MdArrowForwardIos className="text-6xl text-stone-200 shadow-2xl me-2" />
        </div>

    )
}

export default ExpositionCard