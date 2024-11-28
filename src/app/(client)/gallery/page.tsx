'use client'

import React from 'react'
import Image from "next/image";
import { titles, gallery } from "@/constant/galleryPageContent";

const page = () => {
    return (
        <div className="h-screen w-screen flex bg-[url('/images/gallery_image/bgimg3.jpeg')] bg-cover">
            <ul className='w-full h-full bg-black/50 overflow-y-auto'>
                <li className='mt-24 h-1 w-full'></li>
                {gallery.map((set, index) => (
                    <li className='flex flex-col pt-32 container mx-auto opacity-60 animate-fadeIn_galleryContent hover:opacity-100 transition duration-500' id={set.title} key={index}>
                        <h1 className='text-6xl tracking-widest text-gray-300 ml-10'>{set.title}</h1>
                        <p className='text-xl tracking-wide text-gray-400 italic ml-10 mt-3'>{set.content}</p>
                        <div className='flex flex-wrap mt-10'>
                            {set.sub_gallery.map((photo, index) => (
                                <img src={photo.src} alt={photo.alt} className='rounded-md m-3 w-1/4 cursor-pointer shadow-lg hover:shadow-2xl transition duration-200' onClick={() => alert('we are working on it')} key={index} />
                            ))}
                        </div>
                    </li>
                ))}
                <li className='mt-36 h-1 w-full'></li>
            </ul>
        </div>
    )
}
const titleFix = ' text-3xl tracking-wider p-4 hover:text-black flex justify-end items-center '

export default page

