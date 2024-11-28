'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { appointmentlistSection } from "@/constant/appointmentPageContent";
import Image from 'next/image';

const page = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [detail, setDetail] = useState('')
    return (
        <div className="h-screen w-screen flex bg-[url('/images/appointment_image/bgimg.jpg')] bg-cover">
            <div className=' bg-gradient-to-b from-white w-full h-full flex flex-col items-center overflow-y-auto'>
                <div className='container flex flex-wrap justify-start mt-48'>
                    {appointmentlistSection.map((category, index) => (
                        <div className='flex flex-col m-5 rounded-md shadow-lg p-2 bg-white/50 hover:bg-white/80' key={index}>
                            <Image src={category.imageSrc} alt='' width={380} height={253} className='rounded-md' />
                            <div className='flex flex-col w-96'>
                                <h1 className='text-2xl font-bold tracking-widest'>{category.title}</h1>
                                <p className='text-base italic text-wrap mt-3'>{category.content}</p>
                                <h1 className='text-xl mt-3'>{category.price}</h1>
                                <Link className='mt-5 w-2/3 h-12 mx-auto bg-blue-600 text-white shadow-lg hover:bg-blue-700 flex items-center justify-center rounded-md' href={category.link}>{'BOOK'}</Link>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='flex flex-col mt-48 w-full items-center' id='contact'>
                    <div className='flex flex-col mt-48 container bg-white/80 p-48 rounded-lg items-center' >
                        <h1 className='text-4xl font-bold tracking-widest'>CONTACT US</h1>
                        <input
                            className='appearance-none text-sm w-full mt-16 pl-2 tracking-wider cursor-pointer outline-none border-b-2 border-gray-400 text-gray-700 bg-transparent '
                            type='text' value={name} placeholder='NAME' onChange={e => setName(e.target.value)}
                        />
                        <input
                            className='appearance-none text-sm w-full mt-16 pl-2 tracking-wider cursor-pointer outline-none border-b-2 border-gray-400 text-gray-700 bg-transparent '
                            type='text' value={email} placeholder='E-MAIL' onChange={e => setEmail(e.target.value)}
                        />
                        <textarea
                            className='appearance-none text-sm w-full mt-16 pl-2 tracking-wider cursor-pointer outline-none border-b-2 border-gray-400 text-gray-700 bg-transparent '
                            rows={8} value={detail} placeholder='TELL US MORE...' onChange={e => setDetail(e.target.value)}
                        />
                        <div className='w-1/2 h-16 mt-16 text-white tracking-widest bg-gray-600 hover:bg-gray-700 flex justify-center items-center'>SEND</div>
                    </div>
                    <div>111</div>
                </div>
            </div>
        </div>
    )
}

const sectionClassNameFix = ''
export default page
