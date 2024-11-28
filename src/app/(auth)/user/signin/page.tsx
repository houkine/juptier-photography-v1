'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { BsFacebook, BsWechat, BsGoogle, BsApple, BsInstagram, BsTiktok } from "react-icons/bs";

const page = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()
    return (
        <div className='container flex flex-col items-center space-y-10 animate-fadeIn_personalSectionContent'>
            <input
                className="appearance-none w-1/3 min-w-96 text-center border-b-2 border-black/30 hover:border-black/60 focus:border-black/60 text-xl tracking-wider cursor-pointer outline-none text-white bg-transparent "
                type='input' placeholder='EMAIL' value={email} onChange={e => setEmail(e.target.value)}
            />
            <input
                className="appearance-none w-1/3 min-w-96 text-center border-b-2 border-black/30 hover:border-black/60 focus:border-black/60 text-xl tracking-wider cursor-pointer outline-none text-white bg-transparent "
                type='password' placeholder='PASSWORD' value={password} onChange={e => setPassword(e.target.value)}
            />
            <Link href={'/'} className='flex items-center justify-center text-white/70 w-1/4 min-w-64 h-12 bg-black/20 hover:bg-black/50 cursor-pointer rounded-lg'>SIGN IN</Link>
            <div className='flex items-center space-x-5'>
                <h1 className='text-gray-300 text-sm '>or sign in with:</h1>
                <div className={IconClassNameFix}>
                    <BsFacebook onClick={() => router.push('http://www.baidu.com')} className='h-6 w-6 cursor-pointer' />
                </div>
                <div className={IconClassNameFix}>
                    <BsWechat onClick={() => router.push('http://www.baidu.com')} className='h-6 w-6 cursor-pointer' />
                </div>
                <div className={IconClassNameFix}>
                    <BsGoogle onClick={() => router.push('http://www.baidu.com')} className='h-6 w-6 cursor-pointer' />
                </div>
                <div className={IconClassNameFix}>
                    <BsApple onClick={() => router.push('http://www.baidu.com')} className='h-6 w-6 cursor-pointer' />
                </div>
                <div className={IconClassNameFix}>
                    <BsInstagram onClick={() => router.push('http://www.baidu.com')} className='h-6 w-6 cursor-pointer' />
                </div>
                <div className={IconClassNameFix}>
                    <BsTiktok onClick={() => router.push('http://www.baidu.com')} className='h-6 w-6 cursor-pointer' />
                </div>
            </div>
            <div className='w-full h-24' />
        </div>
    )
}

const IconClassNameFix = 'flex flex-wrap text-white/60 hover:text-white/80 space-x-2 items-center'
export default page
