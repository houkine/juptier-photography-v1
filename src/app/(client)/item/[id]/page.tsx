'use client'
import Image from 'next/image';
import { personalPhotographyPricelist } from "@/constant/shopPageContent";
import React, { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation';

// const page = async ({
//     params,
// }: {
//     params: Promise<{ id: number }>
// }) => {
const Page = () => {
    const [session, setSession] = useState('1')
    const [amount, setAmount] = useState('10')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('9-11')
    const [postscript, setPostscript] = useState('')
    const { id } = useParams()

    const router = useRouter()

    const SubmitOnClick = () => {
        alert('item has been added to your cart.')
        router.push('/personal/cart')
    }

    useEffect(() => {
        console.log(date);

    }, [date])

    const item = id && getItemById(id)

    if (item) return (
        <div className='w-2/3 mx-auto flex flex-col text-black'>
            <div className='w-full flex'>
                <Image width={480} height={640} src={item.imgSrc} alt='' />
                <div className=' flex flex-col ml-10 mr-20'>
                    <h1 className=' text-3xl  mt-8'>{item.name}</h1>
                    <h1 className='text-xl font-bold mt-2'>{'$ ' + item.price}</h1>
                    <p className='text-base mt-4 whitespace-pre-wrap text-gray-800'>{item.description}</p>
                    <div className='mt-8'>
                        <label className='text-base font-bold' htmlFor='session'>Session:</label>
                        <select className='ml-4' id='session' value={session} onChange={e => setSession(e.target.value)}>
                            <option value="1">{'Please select...'}</option>
                            <option value="2">{'portrait'}</option>
                            <option value="3">{'individual indoor'}</option>
                            <option value="4">{'individual outdoor'}</option>
                        </select>
                    </div>
                    <div className='mt-4'>
                        <label className='text-base font-bold' htmlFor='amount'>How many photos you want to take:</label>
                        <select className='ml-4' id='amount' value={amount} onChange={e => setAmount(e.target.value)}>
                            <option value="10">{'10'}</option>
                            <option value="15">{'15'}</option>
                            <option value="20">{'20'}</option>
                            <option value="25">{'25'}</option>
                            <option value="30">{'30'}</option>
                        </select>
                    </div>
                    <div className='mt-4'>
                        <label className='text-base font-bold' htmlFor='date'>Date:</label>
                        <input className='ml-4' type='date' id='date' value={date} onChange={e => setDate(e.target.value)} />
                        <label className='text-base font-bold ml-8' htmlFor='time'>Time:</label>
                        <select className='ml-4' id='time' value={time} onChange={e => setTime(e.target.value)}>
                            <option value="9-11">{'Morning'}</option>
                            <option value="2-4">{'Afternoon'}</option>
                            <option value="7-9">{'Evening'}</option>
                        </select>
                    </div>
                    <div className='mt-4 flex flex-col'>
                        <label className='text-base font-bold' htmlFor='postscript'>Postscript:</label>
                        <textarea
                            value={postscript} id='postscript' onChange={e => setPostscript(e.target.value)}
                            rows={4} className='mt-1 border-2'
                        />
                    </div>
                    <div className='w-2/3 h-12 mt-6 flex font-bold justify-center items-center text-black border-2 border-gray-700 hover:bg-white' onClick={SubmitOnClick}>SUBMIT</div>
                    {/* <Link href={'/service/personal'} className='w-2/3 h-12 mt-6 flex font-bold justify-center items-center text-black border-2 border-gray-700 hover:bg-white'>SUBMIT</Link> */}

                </div>
            </div>
            <div></div>
            <div></div>
        </div>
    )
    else return (<div>null</div>)
}

const getItemById = (id: string | string[]) => {
    for (let index = 0; index < personalPhotographyPricelist.length; index++) {
        if (personalPhotographyPricelist[index].id == id)
            return personalPhotographyPricelist[index]
    }
    return null
}

export default Page
