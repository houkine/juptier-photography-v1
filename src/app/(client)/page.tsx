'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import homeImageSrc from "@/constant/homeImageSrc"
import Link from 'next/link'

const HomePage = () => {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIndex(index === homeImageSrc.length - 1 ? 0 : index + 1);
    }, 10000);
    return () => clearTimeout(timeoutId);
  }, [index]);
  return (
    <div className='h-screen flex flex-col'>
      <div className='flex'></div>
      <div className='absolute inset-0 -z-10 bg-black'>
        <Image key={homeImageSrc[index].id} src={homeImageSrc[index].src} alt={homeImageSrc[index].alt} fill className='object-cover opacity-60 animate-fadeIn_homeImg'/>
      </div>
      <div className='flex flex-1 flex-col justify-center items-center text-gray-200'>
        <div key={homeImageSrc[index].id+'1'} className='text-7xl tracking-widest animate-fadeIn_homeText'>{homeImageSrc[index]?.content1}</div>
        <div key={homeImageSrc[index].id+'2'} className='mt-10 text-xl tracking-wider italic leading-8 text-wrap w-2/5 animate-fadeIn_homeText'>{homeImageSrc[index]?.content2}</div>
        <Link key={homeImageSrc[index].id+'3'} href='/about' className='border-2 py-5 w-1/5 mt-10 flex justify-center text-sm tracking-wider opacity-60 hover:text-white hover:opacity-100 hover:font-bold animate-fadeIn_homeButton'>View Our Works</Link>
      </div>
      <div className='flex mb-10 space-x-2 justify-center'>
        {homeImageSrc.map((item,i)=>(
          <div className={'h-2 rounded-xl opacity-50 bg-white '+(index==i?
            'w-10':
            'w-2 cursor-pointer'
          )} key={i} onClick={()=> index==i || setIndex(i)}/>
        ))}
      </div>
    </div>
  )
}

export default HomePage
