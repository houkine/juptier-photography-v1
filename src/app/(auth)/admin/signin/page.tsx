'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { Comforter } from 'next/font/google'

const comforter = Comforter({
    subsets: ["latin"],
    weight: '400',
})
const Page = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()
    return (
        <div className='w-full h-full bg-black/50 overflow-y-auto flex flex-col items-center justify-center space-y-16'>
                <div className='text-7xl font-bold text-white'>
                    <h1 className={comforter.className}>Juptier Photography Studio</h1>
                </div>
                                    <h1 className='text-3xl text-white'>Admin Panel</h1>

        <div className='container flex flex-col items-center space-y-10 animate-fadeIn_personalSectionContent'>
            <input
                className="appearance-none w-1/3 min-w-96 text-center border-b-2 border-black/30 hover:border-black/60 focus:border-black/60 text-xl tracking-wider cursor-pointer outline-none text-white bg-transparent "
                type='input' placeholder='EMAIL' value={email} onChange={e => setEmail(e.target.value)}
            />
            <input
                className="appearance-none w-1/3 min-w-96 text-center border-b-2 border-black/30 hover:border-black/60 focus:border-black/60 text-xl tracking-wider cursor-pointer outline-none text-white bg-transparent "
                type='password' placeholder='PASSWORD' value={password} onChange={e => setPassword(e.target.value)}
            />
            <Link href={'/admin/dashboard'} className='flex items-center justify-center text-white/70 w-1/4 min-w-64 h-12 bg-black/20 hover:bg-black/50 cursor-pointer rounded-lg'>SIGN IN</Link>
            <div className='w-full h-24' />
        </div>
            </div>
    )
}

const IconClassNameFix = 'flex flex-wrap text-white/60 hover:text-white/80 space-x-2 items-center'
export default Page
