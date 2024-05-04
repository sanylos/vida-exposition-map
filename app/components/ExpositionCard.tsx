"use client"
import { Exposition } from "../page";
import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
const ExpositionCard = ({ exposition }: { exposition: Exposition }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <motion.div style={{
            backgroundImage: 'url(' + exposition.image + ')',
            transition: 'ease 2s background-position'
        }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="relative my-1 2xl:my-0 h-3 md:h-80 2xl:h-52 2xl:mb-1 2xl:mx-1 h-48 w-full bg-cover bg-start hover:bg-center flex flex-row items-center justify-between bg-white rounded-lg shadow">
            <div className="h-full bg-gradient-to-r from-blue-500 to-transparent rounded flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-stone-200">{exposition.name}</h5>
                <p className="mb-3 font-normal text-gray-100">{exposition.description.slice(0, 64)}...</p>
            </div>
            <AnimatePresence>
                {isHovered && (

                    <div className="absolute bottom-0 right-0">
                        <Link href={'/' + exposition.id}>
                            <motion.button type="button" className="flex items-center justify-between text-white hover:bg-gradient-to-br bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 shadow-lg shadow-teal-500/50 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.3, type: "spring" }}
                                exit={{ scale: 0 }}
                            >
                                Exponáty
                                <MdArrowForwardIos className="ms-1 text-md" />
                            </motion.button>
                        </Link>
                    </div>
                )}
            </AnimatePresence>
        </motion.div>

    )
}

export default ExpositionCard