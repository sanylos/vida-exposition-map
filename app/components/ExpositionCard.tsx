"use client"
import { Exposition } from "../page";
import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";
import { motion } from "framer-motion";
const ExpositionCard = ({ exposition }: { exposition: Exposition }) => {
    return (
        <div style={{
            backgroundImage: 'url(' + exposition.image + ')',
            transition: 'ease 2s background-position'
        }}
            className="my-1 lg:my-0 lg:mb-1 lg:mx-1 h-48 w-full bg-cover bg-start hover:bg-center flex flex-row items-center justify-between bg-white rounded-lg shadow">
            <div className="h-full bg-gradient-to-r from-blue-500 to-transparent rounded flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-stone-200">{exposition.name}</h5>
                <p className="mb-3 font-normal text-gray-100">{exposition.description.slice(0, 64)}...</p>
            </div>
            <div className="flex flex-col h-full justify-end">
                <Link href={'/' + exposition.id}>
                    <motion.button type="button" className="flex items-center justify-between text-white hover:bg-gradient-to-br bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 shadow-lg shadow-teal-500/50 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: 1, type: "spring" }}
                    >
                        Exponáty
                        <MdArrowForwardIos className="ms-1 text-md" />
                    </motion.button>
                </Link>
            </div>
        </div>

    )
}

export default ExpositionCard