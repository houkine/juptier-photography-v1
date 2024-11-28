import React from 'react'
import { personalPhotographySectionlist } from "@/constant/shopPageContent";
import Image from 'next/image';

const page = () => {
    return (
        <ul className='mt-12 container mx-auto' id='1-2'>
            {personalPhotographySectionlist.map((section, index) => (
                <li className='flex odd:flex-row-reverse mt-28' key={index}>
                    <Image src={section.imgSrc} alt='' height={300} width={900} className='h-auto' />
                    <div className='flex flex-col justify-center items-center'>
                        <h1 className='text-2xl text-gray-200'>{section.title}</h1>
                        <p className='mt-6 text-gray-300 text-wrap w-2/3'>{section.content}</p>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default page
