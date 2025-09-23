'use client'
import React, { useState } from 'react'

const Page = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [detail, setDetail] = useState('')
    const [category, setCategory] = useState('')
    return (
        <div className="w-full flex flex-col bg-white">
            <div className=' h-[48rem] flex overflow-x-hidden'>
                <img src='/images/appointment_image/bgimg.jpg' alt='' className='w-full' />
            </div>
            <div className='w-full -mt-[32rem] flex flex-col items-center text-black'>
                <h1 className='text-xl font-bold tracking-widest'>- ENQUIRIES -</h1>
                <h1 className='text-6xl font-bold tracking-widest mt-12'>Contact us</h1>
                <p className='text-base mt-12'>Gold Coast, QLD</p>
                <p className='text-base mt-3'>Email: momo@juptierphotography.com</p>
                <p className='text-base mt-3'>Phone: 0402123456</p>
            </div>
            <div className='w-2/3 mx-auto flex flex-col mt-72 items-center' >
                <div className='flex space-x-10 w-full'>
                    <input
                        className={inputClassName}
                        type='text' value={name} placeholder='NAME' onChange={e => setName(e.target.value)}
                    />
                    <input
                        className={inputClassName}
                        type='text' value={email} placeholder='E-MAIL' onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <select className={selectClassName} value={category} onChange={e=>setCategory(e.target.value)}>
                    {GalleryThemes.map((galleryTheme,index)=>(
                        <option key={index}>{galleryTheme}</option>
                    ))}
                </select>
                <textarea
                    className={inputClassName + ' border-2'}
                    rows={5} value={detail} placeholder='TELL US MORE...' onChange={e => setDetail(e.target.value)}
                />
                <div className='w-1/2 h-16 my-16 text-white tracking-widest bg-gray-600 hover:bg-gray-700 flex justify-center items-center cursor-pointer'>SEND</div>
            </div>
        </div>
    )
}

const GalleryThemes = [
    'Please select your theme...',
    'Portrait',
    'Event',
    'Wedding/Couple',
    'Kids',
    'Pets',
    'Others',
]
const inputClassName = 'appearance-none text-lg mt-16 pl-2 tracking-wider cursor-pointer outline-none border-b-2 border-gray-400 text-black bg-transparent w-full'
const selectClassName = 'text-lg mt-16 pl-2 tracking-wider cursor-pointer outline-none border-b-2 border-gray-400 text-black bg-transparent w-full'
export default Page
