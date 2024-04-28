import React from 'react'

const ExpositionCard = ({ exposition }) => {
    return (
        <div className="mb-1 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100">
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{exposition.name}</h5>
                <p className="mb-3 font-normal text-gray-700">{exposition.description}</p>
            </div>
            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://vida.cz/images/headers/main/145/_thumb1/expoziceweb-1.webp" alt="" />
        </div>
    )
}

export default ExpositionCard