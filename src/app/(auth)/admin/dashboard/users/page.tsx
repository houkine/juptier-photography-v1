'use client'
import React, { useContext } from 'react'
import { BsPencilFill, BsTrashFill, BsCheckLg } from "react-icons/bs";
import { ThemeContext } from '../ThemeContext';

const Page = () => {
    const theme = useContext(ThemeContext);

    return (
        <div className={'h-full w-full rounded-lg flex flex-col ' + theme}>
            <div className='mt-4  flex'>
                <p className='ml-8 text-xl'>Users</p>
                <div></div>
            </div>
            <div className=' h-12 w-full flex text-white bg-white/20 mt-4'>
                <p className='w-72 h-full text-sm flex items-center justify-center ml-4'>{'id'}</p>
                <p className='w-36 h-full text-sm flex items-center justify-center'>{'email'}</p>
                <p className='w-32 h-full text-sm flex items-center justify-center'>{'name'}</p>
                <p className='w-32 h-full text-sm flex items-center justify-center'>{'birthday'}</p>
                <p className='w-96 h-full text-sm flex items-center justify-center'>{'address'}</p>
                <p className='w-32 h-full text-sm flex items-center justify-center'>{'gender'}</p>
                <p className='w-32 h-full text-sm flex items-center justify-center'>{'interest'}</p>
                <p className='w-12 h-full text-sm flex items-center justify-center'>{'isValid'}</p>
                <p className='w-32 h-full text-sm flex items-center justify-center'>{'created'}</p>
                <p className='w-12 h-full text-sm flex items-center justify-center'>{'order number'}</p>
                <p className='w-36 h-full text-sm flex items-center justify-center'>{'action'}</p>
            </div>
            <div className='flex flex-col overflow-y-auto'>
                {UserList.map((user, index) => (
                    <UserRecord user={user} key={index} />
                ))}
            </div>
        </div>
    )
}
const UserRecord = ({ user }: UsersRecordTabTypeInput) => (
    <div className={' h-12 w-full flex text-white border-b-2 border-white/20 hover:bg-white/20 cursor-pointer'}>
        <p className='w-72 h-full text-sm flex items-center justify-center ml-4'>{user.id}</p>
        <p className='w-36 h-full text-sm flex items-center justify-center'>{user.email}</p>
        <p className='w-32 h-full text-sm flex items-center justify-center'>{user.name}</p>
        <p className='w-32 h-full text-sm flex items-center justify-center'>{user.dateOfBirth}</p>
        <p className='w-96 h-full text-sm flex items-center justify-center'>{user.address}</p>
        <p className='w-32 h-full text-sm flex items-center justify-center'>{'gender'}</p>
        <p className='w-32 h-full text-sm flex items-center justify-center'>{'gender'}</p>
        <p className='w-12 h-full text-sm flex items-center justify-center'>{user.isValid.valueOf()}</p>
        <p className='w-32 h-full text-sm flex items-center justify-center'>{user.created}</p>
        <p className='w-12 h-full text-sm flex items-center justify-center'>{user.orders}</p>
        <div className='flex h-8 w-24 ml-12'>
            <BsPencilFill className='h-full ' />
            <BsTrashFill className='h-full ml-4' />
            <BsCheckLg className='h-full ml-4' />
        </div>
    </div>
)
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
const UserList = [
    {
        id: '0199c8d1-5ed5-7739-af10-9fbb235fd816',
        email: 'pan@email.com',
        name: 'Pan',
        dateOfBirth: '1996-01-01',
        address: '1 George Street, Brisbane City, QLD, 4000',
        isValid: true,
        created: '2025-01-01',
        orders: 5,
    },
    {
        id: '0199c8d1-5ed5-7739-af10-9fbb235fd816',
        email: 'peter@email.com',
        name: 'Peter',
        dateOfBirth: '1996-01-01',
        address: '1 George Street, Brisbane City, QLD, 4000',
        isValid: true,
        created: '2025-01-01',
        orders: 5,
    },
    {
        id: '0199c8d1-5ed5-7739-af10-9fbb235fd816',
        email: 'lucas@email.com',
        name: 'Lucas',
        dateOfBirth: '1996-01-01',
        address: '1 George Street, Brisbane City, QLD, 4000',
        isValid: true,
        created: '2025-01-01',
        orders: 5,
    },
]
export default Page
