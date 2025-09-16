'use client'

import React from 'react'
import { personalPhotographySectionlist, personalPhotographyDemolist, personalPhotographyPricelist } from "@/constant/shopPageContent";
import Image from 'next/image';
import { PriceCard } from '../components';

const page = () => {
    return (
        <div className='mt-12 container mx-auto flex flex-col' id='1-2'>
            <div className='flex justify-center items-center mt-36 mx-auto space-x-20'>
                <div className='bg-gray-300 h-px w-80'></div>
                <h1 className=' text-4xl text-white tracking-wider'>OUR ADVANTAGES</h1>
                <div className='bg-gray-300 h-px w-80'></div>
            </div>
            <ul className='w-full'>
                {personalPhotographySectionlist.map((section, index) => (
                    <li className='flex odd:flex-row-reverse mt-20' key={index}>
                        <Image src={section.imgSrc} alt='' height={300} width={900} className='h-auto' />
                        <div className='flex flex-col justify-center items-center'>
                            <h1 className='text-2xl text-gray-200'>{section.title}</h1>
                            <p className='mt-6 text-gray-300 text-wrap w-2/3'>{section.content}</p>
                        </div>
                    </li>
                ))}
            </ul>
            <div className='w-full mt-48 flex flex-col'>
                <div className='flex justify-center items-center mt-12 mx-auto space-x-20'>
                    <div className='bg-gray-300 h-px w-80'></div>
                    <h1 className=' text-4xl text-white tracking-wider'>GUEST PHOTO DISPLAY</h1>
                    <div className='bg-gray-300 h-px w-80'></div>
                </div>
                <ul className='w-full mt-24 items-center'>
                    {personalPhotographyDemolist.map((demo, index) => (
                        <li className='w-2/3 flex mx-auto' key={index}><img src={demo.imgSrc} alt='' className='w-full' /></li>
                    ))}
                </ul>

            </div>
            <div className='w-full mt-20 flex flex-col' id='1-3'>
                <h1 className='text-white text-4xl mx-auto tracking-widest mt-28'>Pricing</h1>
                <h1 className='text-white text-sm font-bold mx-auto tracking-widest mt-8'>DO YOU WANT ME TO SHOOT YOU?</h1>
                <div className='w-2/3 h-1 border-b border-white mx-auto'></div>
                <ul className='w-auto border-gray-300 mx-auto space-x-10 list-none mt-10'>
                    {personalPhotographyPricelist.map((card, index) =>
                        <li className='inline-block' key={index}><PriceCard card={card} /></li>
                    )}
                    {/* <li className='inline-block'><PriceCard /></li>
                    <li className='inline-block'><PriceCard /></li>
                    <li className='inline-block'><PriceCard /></li> */}
                </ul>
            </div>
            <div className='w-full h-48'></div>
        </div >
    )
}

export default page
