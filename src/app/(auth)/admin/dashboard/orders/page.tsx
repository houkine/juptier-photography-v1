'use client'
import React, { } from 'react'
import { BsPencilFill, BsTrashFill, BsCheckLg } from "react-icons/bs";

const Page = () => {
    return (
        <div className='h-full w-full bg-white/20 rounded-lg flex flex-col'>
            <div className='mt-4  flex'>
                <p className='ml-8 text-xl'>Orders</p>
                <div></div>
            </div>
            <div className=' h-12 w-full flex text-white bg-white/20 mt-4'>
                <p className={OrderTabClassname + ' w-72 ml-4'}>{'id'}</p>
                <p className={OrderTabClassname + ' w-36'}>{'email'}</p>
                <p className={OrderTabClassname + ' w-32'}>{'name'}</p>
                <p className={OrderTabClassname + ' w-32'}>{'birthday'}</p>
                <p className='w-96 h-full text-sm flex items-center justify-center'>{'address'}</p>
                <p className='w-32 h-full text-sm flex items-center justify-center'>{'gender'}</p>
                <p className='w-32 h-full text-sm flex items-center justify-center'>{'interest'}</p>
                <p className='w-12 h-full text-sm flex items-center justify-center'>{'isValid'}</p>
                <p className='w-32 h-full text-sm flex items-center justify-center'>{'created'}</p>
                <p className='w-12 h-full text-sm flex items-center justify-center'>{'order number'}</p>
                <p className='w-36 h-full text-sm flex items-center justify-center'>{'action'}</p>
            </div>
            <div className='flex flex-col overflow-y-auto'>
                {OrderList.map((user, index) => (
                    <UserRecord user={user} key={index} />
                ))}
            </div>
        </div>
    )
}

type UsersRecordTabTypeInput = {
    user: UserRecordTabType,
    key: number,
}
type UserRecordTabType = {
    id: string,
    email: string,
    name: string,
    dateOfBirth: string,
    address: string,
    isValid: boolean,
    created: string,
    orders: number,
}
const OrderList = [
    {
        id: '0199c8d1-5ed5-7739-af10-9fbb235fd816',
        userId: '0199c8d1-5ed5-7739-af10-9fbb235fd816',
        user: 'pan',
        session: 'lite',
        type: 'portrait',
        originaPhotos: '50-100',
        editedPotots: 4,
        video: '5min',
        duration: '1h',
        price: 200,
        location: 'UQ campus',
        status: 'payment proceed',
        creationTime: '2025-10-01',
        depositPaymentTime: '2025-10-02',
        shootingCompleteTime: '2025-10-03',
        balancePaymentTime: '2025-10-04',
        finaliseTime: '2025-10-05',
        Postscript: 'hello I want to take photo',
        remark: 'he is a good man',
    },
]
const Appoinment = {
    id: '0199c8d1-5ed5-7739-af10-9fbb235fd816',
    orderId: '0199c8d1-5ed5-7739-af10-9fbb235fd816',
    user: 'pan',
    location: 'UQ campus',
    time: '2025-10-03 9am',
    duration: '2h',
    postscript: 'photo with campus',

}

const Product = {
    id: '0199c8d1-5ed5-7739-af10-9fbb235fd816',
    orderId: '0199c8d1-5ed5-7739-af10-9fbb235fd816',
    itemId: '0199c8d1-5ed5-7739-af10-9fbb235fd816',
    user: 'pan',
    product: 'album',
    type: 'A4 20photos style1',
    quantity: 1,
    price: 20,
    postscript: 'photo with campus',

}
const OrderTabClassname = 'h-full text-sm flex items-center justify-center '
export default Page
