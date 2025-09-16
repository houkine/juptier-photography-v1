'use client'
import React, { useState } from 'react'

const Page = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [detail, setDetail] = useState('')
    return (
        <div className="h-screen w-screen flex bg-[url('/images/appointment_image/bgimg.jpg')] bg-cover">
            <div className=' bg-gradient-to-b from-black/50 w-full h-full flex flex-col items-center overflow-y-auto'>
                <div className='flex flex-col mt-36 container bg-black/80 rounded-lg items-center' >
                    <h1 className='text-4xl font-bold tracking-widest mt-12'>CONTACT US</h1>
                    <h1 className='text-sm mt-6 italic'>TELL ME ABOUT YOUR WISHES AND DREAMS. LET ME ASSIST YOU IN YOUR JOURNEY AND WE WILL CREATE SOMETHING SPECIAL TO REMEMBER</h1>
                    <input
                        className={inputClassName}
                        type='text' value={name} placeholder='NAME' onChange={e => setName(e.target.value)}
                    />
                    <input
                        className={inputClassName}
                        type='text' value={email} placeholder='E-MAIL' onChange={e => setEmail(e.target.value)}
                    />
                    <textarea
                        className={inputClassName + ' border-2'}
                        rows={5} value={detail} placeholder='TELL US MORE...' onChange={e => setDetail(e.target.value)}
                    />
                    <div className='w-1/2 h-16 my-16 text-white tracking-widest bg-gray-600 hover:bg-gray-700 flex justify-center items-center cursor-pointer'>SEND</div>
                </div>
            </div>
        </div>
    )
}

const inputClassName = 'appearance-none text-lg mt-16 pl-2 tracking-wider cursor-pointer outline-none border-b-2 border-gray-400 text-white bg-transparent w-1/2'
export default Page
