'use client'
import React from 'react'
import Image from "next/image";
import Link from 'next/link';

const Card = ({ imageSrc, title, content, link }: cardInput) => {

  return (
    <Link className="flex flex-col w-80 items-start bg-white/15 p-2 shadow-lg rounded-xl hover:shadow-2xl hover:bg-white/30 transition duration-200" href={link}>
      <Image src={imageSrc} alt={title} width={304} height={201} className='rounded-md' />
      <h3 className="text-black text-xl tracking-wider mt-5 max-w-72">{title}</h3>
      <p className="text-gray-700 text-sm text-wrap mt-2 italic max-w-72">{content}</p>
    </Link>
  )
}

type cardInput = {
  imageSrc: string,
  title: string,
  content: string,
  link: string,
}
export default Card
