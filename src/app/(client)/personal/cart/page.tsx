'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { BsFillTrashFill } from "react-icons/bs";
const Page = () => {
    const [cartItemList, setCartItemList] = useState<CartItemType[]>([])


    useEffect(() => {
        setCartItemList(
            [
                {
                    id: '1',
                    isSelected: false,
                    photographyType: {
                        name: 'PORTRAIT',
                        imgSrc: '/images/shop_image/demo1.jpg',

                    },
                    price: 200,
                    date: '25/04/2025',
                    time: '9am to 11am',
                    shots: '10',
                    session: 'portrait',
                    postscript: ' postscript sample Digital files are sold in collections and range from $75 – $199 per image depending on which collection you choose.',
                },
                {
                    id: '2',
                    isSelected: false,
                    photographyType: {
                        name: 'PORTRAIT',
                        imgSrc: '/images/shop_image/demo1.jpg',

                    },
                    price: 200,
                    date: '25/04/2025',
                    time: '9am to 11am',
                    shots: '10',
                    session: 'portrait',
                    postscript: ' postscript sample Digital files are sold in collections and range from $75 – $199 per image depending on which collection you choose.',
                },
            ]
        )
    }, [])

    return (
        <div className="w-full h-full flex flex-col rounded-lg bg-black/30 items-start py-6 px-8 animate-fadeIn_personalContent">

            <ul className='text-gray-300 w-full space-y-2 flex-grow overflow-y-auto'>
                {cartItemList.map((cartItem, index) => (
                    <li key={index}
                        className={'flex justify-between w-full rounded-lg px-12 py-2 bg-white/30'}
                    >
                        <Image className='' width={80} height={106} alt='' src={cartItem.photographyType.imgSrc} />
                        <div className='my-auto'>
                            <h1 className=' text-xl'>{cartItem.photographyType.name}</h1>
                            <h1 className=' text-base italic mt-4'>{cartItem.session}</h1>
                        </div>
                        <div className='my-auto'>
                            <h1 className=' text-xl font-bold'>{'$ ' + cartItem.price}</h1>
                        </div>
                        <div className='my-auto'>
                            <h1 className=' text-base'>{cartItem.date}</h1>
                            <h1 className=' text-base'>{cartItem.time}</h1>
                        </div>
                        <div className=' my-auto w-1/5 '>
                            <h1 className=' text-sm italic'>{cartItem.postscript}</h1>
                        </div>
                        <BsFillTrashFill className='my-auto cursor-pointer hover:text-whit e w-6 h-6' onClick={() => alert('delete')} />
                    </li>
                ))}
            </ul>
            <div className='w-1/3 mx-auto mr-12 my-6 flex justify-between'>
                <h1 className=' text-lg'>{'items:2'}</h1>
                <h1 className=' text-lg'>{'total:$400'}</h1>
                <div className='w-48 h-8 flex justify-center items-center border-2 cursor-pointer rounded-xl border-white/50 hover:border-white/80 text-gray-200 text-lg hover:font-bold hover:bg-white/20'
                    onClick={() => alert('checkout')}
                >CHECKOUT</div>
            </div>
        </div>
    )
}

interface CartItemType {
    id: string,
    isSelected: boolean,
    photographyType: {
        name: string,
        imgSrc: string,
    },
    price: number,
    date: string,
    time: string,
    shots: string,
    session: string,
    postscript: string,
}
export default Page
