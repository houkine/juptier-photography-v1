'use client'

import React from 'react'
import { gallery } from "@/constant/galleryPageContent";

const Page = () => {
    return (
        <div className="h-screen w-screen bg-[url('/images/admin_image/image2.jpg')] bg-cover flex pt-32 ">
            <ul className='w-full h-full overflow-y-auto'>
                {gallery.map((set, index) => (
                    <li className='flex flex-col my-16 container mx-auto' id={set.title} key={index}>
                        <h1 className='text-6xl tracking-widest text-gray-500'>{set.title}</h1>
                        <p className='text-xl tracking-wide text-gray-400 italic mt-3'>{set.content}</p>
                        <div className='flex justify-between mt-10 w-full space-x-5'>
                            {set.sub_gallery.map((photo, index) => (
                                <div className='flex relative w-1/3 cursor-pointer' key={index} onClick={() => alert('photos')}>
                                    <img src={photo.src} alt={photo.alt} className='flex m-auto rounded-md cursor-pointer shadow-lg hover:shadow-2xl transition duration-200' onClick={() => alert('we are working on it')} />
                                    <div className='absolute w-full h-full flex bg-white opacity-0 hover:opacity-60 transition duration-1000'>
                                        <p className='text-2xl font-bold m-auto text-black'>Hello</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </li>
                ))}
                <li className='mt-36 h-1 w-full'></li>

            </ul>
        </div>
    )
}

export default Page

