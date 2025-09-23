'use client'

import React from 'react'
import { personalPhotographySectionlist, personalPhotographyDemolist, personalPhotographyPricelist } from "@/constant/shopPageContent";
import Image from 'next/image';
import { PriceCard } from '../components';

const page = () => {
    return (
        <div className='mt-12 container mx-auto flex flex-col' id='1-2'>
            <div className='flex justify-center items-center mt-36 mx-auto space-x-20'>
                <div className='bg-black h-px w-80'></div>
                <h1 className=' text-4xl text-black tracking-wider'>OUR ADVANTAGES</h1>
                <div className='bg-black h-px w-80'></div>
            </div>
            <ul className='w-full'>
                {personalPhotographySectionlist.map((section, index) => (
                    <li className='flex odd:flex-row-reverse mt-20' key={index}>
                        <Image src={section.imgSrc} alt='' height={300} width={900} className='h-auto' />
                        <div className='flex flex-col justify-center items-center'>
                            <h1 className='text-2xl text-black'>{section.title}</h1>
                            <p className='mt-6 text-black text-wrap w-2/3'>{section.content}</p>
                        </div>
                    </li>
                ))}
            </ul>
            <div className='w-full mt-20 flex flex-col' id='1-3'>
                <h1 className='text-black text-6xl mx-auto tracking-widest mt-28'>Pricing</h1>
                <h1 className='text-black text-sm font-bold mx-auto tracking-widest mt-8'>WHAT WOULD YOU LIKE FROM US?</h1>
                <div className='w-2/3 h-1 border-b border-black mx-auto'></div>
                <ul className='w-auto mx-auto space-x-10 list-none mt-10'>
                    {personalPhotographyPricelist.map((card, index) =>
                        <li className='inline-block' key={index}><PriceCard card={card} /></li>
                    )}
                    {/* <li className='inline-block'><PriceCard /></li>
                    <li className='inline-block'><PriceCard /></li>
                    <li className='inline-block'><PriceCard /></li> */}
                </ul>
            </div>
            <div className='w-full h-24'></div>
        </div >
    )
}

export default page
