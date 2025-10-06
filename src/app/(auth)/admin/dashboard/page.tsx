'use client'
import { useRouter } from 'next/navigation'
import React, { } from 'react'
import { BsPencilFill, BsTrashFill, BsCheckLg } from "react-icons/bs";

const Page = () => {
    return (
        <div className='w-full h-full flex flex-col'>
            <div className='w-full flex space-x-4'>
                <div className='w-1/3 flex flex-col '>
                    <Analysis />
                    <NewMessage />
                </div>
                <div className='w-2/3 flex'><Upcomings /></div>
            </div>
            <div className='h-full w-full mt-4 flex'><UpdatedOrders /></div>

        </div>
    )
}

const Analysis = () => {
    return (
        <div className='w-full flex flex-col'>
            <div className='w-full flex space-x-4'>
                <AnalysisTab title={'Users'} number={200} rate={0.13} />
                <AnalysisTab title={'Orders'} number={1546} rate={0.06} />
            </div>
            <div className='w-full flex space-x-4 mt-4'>
                <AnalysisTab title={'Enquiries'} number={2705} rate={0.1} />
                <AnalysisTab title={'Monthly Profit'} number={37682} rate={-0.067} />
            </div>
        </div>
    )
}
const AnalysisTab = ({ title, number, rate }: AnalysisTabtype) => {
    return (
        <div className={'w-full rounded-lg p-2 h-24 ' + (rate < 0 ? 'bg-red-300/30' : 'bg-green-300/30')}>
            <div className='flex '>
                <p className=' text-base text-white '>{title}</p>
                <p className={' text-base m-auto mr-4 ' + (rate < 0 ? 'text-red-300' : 'text-green-300')}>{(rate > 0 ? '+ ' : ' ') + rate * 100 + '%'}</p>
            </div>
            <p className=' text-4xl text-white ml-2 mt-4'>{number}</p>
        </div>
    )
}
type AnalysisTabtype = {
    title: string,
    number: number,
    rate: number,
}

const NewMessage = () => {
    return (
        <div className='w-full flex flex-col mt-4'>
            <div className='w-full flex space-x-4'>
                <NewMessageTab title={'New Inbox Messages'} number={15} href={'/admin/dashboard/inbox'} />
                <NewMessageTab title={'New Enquiries'} number={7} href={'/admin/dashboard/enquiries'} />
            </div>
            <div className='w-full flex space-x-4 mt-4'>
                <NewMessageTab title={'Coming Orders'} number={10} href={'/admin/dashboard/orders'} />
                <NewMessageTab title={'Coming Appoinments'} number={6} href={'/admin/dashboard/orders'} />
            </div>
        </div>
    )
}
const NewMessageTab = ({ title, number, href }: NewMessageTabtype) => {
    const router = useRouter()

    return (
        <div
            className='w-full bg-white/30 rounded-lg p-2 h-24 hover:bg-white/40 cursor-pointer'
            onClick={() => router.push(href)}
        >
            <div className='flex '>
                <p className=' text-base text-white '>{title}</p>
            </div>
            <p className=' text-4xl text-white ml-2 mt-4'>{number}</p>
        </div>
    )
}
type NewMessageTabtype = {
    title: string,
    number: number,
    href: string,
}

const Upcomings = () => {
    return (
        <div className='h-full w-full bg-white/30 rounded-lg'>
            <div className='ml-8 mt-4 text-xl'>Upcomings</div>
            <UpcomingsTableHeader />
            <div className=''>
                {UpcomingList.map((UpcomingRecord, index) => (
                    <UpcomingsTableRecord record={UpcomingRecord} key={index} />
                ))}
            </div>
        </div>
    )
}
const UpcomingsTableHeader = () => (
    <div className=' h-12 w-full flex text-white bg-white/30 mt-4'>
        <p className='w-16 h-full text-sm flex items-center justify-center ml-4'>{'id'}</p>
        <p className='w-28 h-full text-sm flex items-center justify-center'>{'type'}</p>
        <p className='w-96 h-full text-sm flex items-center justify-center'>{'location'}</p>
        <p className='w-32 h-full text-sm flex items-center justify-center'>{'date'}</p>
        <p className='w-48 h-full text-sm flex items-center justify-center'>{'time'}</p>
        <p className='w-64 h-full text-sm flex items-center justify-center'>{'user'}</p>
        <p className='w-24 h-full text-sm flex items-center justify-center'>{'edit'}</p>
    </div>
)
const UpcomingsTableRecord = ({ record }: UpcomingsRecordTabtypeInout) => (
    <div className={' h-12 w-full flex text-white border-b-2 border-white/30 hover:bg-white/30 cursor-pointer'}>
        <p className='w-16 h-full text-sm flex items-center justify-center ml-4'>{record.id}</p>
        <p className='w-28 h-full text-sm flex items-center justify-center'>{record.type}</p>
        <p className='w-96 h-full text-sm flex items-center justify-center'>{record.location}</p>
        <p className='w-32 h-full text-sm flex items-center justify-center'>{record.date}</p>
        <p className='w-48 h-full text-sm flex items-center justify-center'>{record.time}</p>
        <p className='w-64 h-full text-sm flex items-center justify-center'>{record.user}</p>
        <div className='flex h-8 m-auto'>
            <BsPencilFill className='h-full ' />
            <BsTrashFill className='h-full ml-4' />
            <BsCheckLg className='h-full ml-4' />
        </div>
    </div>
)
type UpcomingsRecordTabtypeInout = {
    record: UpcomingsRecordTabtype,
    key: number,
}
type UpcomingsRecordTabtype = {
    id: string,
    type: string,
    location: string,
    date: string,
    time: string,
    user: string,
}
const UpcomingList = [
    {
        id: 'a34284',
        type: 'lite',
        location: 'UQ Campue',
        date: '06-10-2025',
        time: '9am, 2h',
        user: 'Li',
    },
    {
        id: 'a342845',
        type: 'Personal',
        location: 'UQ Campue',
        date: '06-10-2025',
        time: '13pm, 2h',
        user: 'wawa',
    },
    {
        id: 'a34292',
        type: 'Pet',
        location: 'Runaway Bay townhouse',
        date: '06-10-2025',
        time: '7pm, 2h',
        user: 'Tina',
    },
]

const UpdatedOrders = () => {
    return (
        <div className='h-full w-full bg-white/30 rounded-lg flex flex-col'>
            <div className='ml-8 mt-4 text-xl flex'>Updated Orders</div>
            <UpdatedOrdersTableHeader />
            <div className='flex flex-col overflow-y-auto'>
                {UpdatedOrderList.map((UpdatedOrder, index) => (
                    <UpdatedOrdersTableRecord record={UpdatedOrder} key={index} />
                ))}
            </div>
        </div>
    )
}
const UpdatedOrdersTableHeader = () => (
    <div className=' h-12 w-full flex text-white bg-white/30 mt-4'>
        <p className='w-16 h-full text-sm flex items-center justify-center ml-4'>{'id'}</p>
        <p className='w-28 h-full text-sm flex items-center justify-center'>{'type'}</p>
        <p className='w-96 h-full text-sm flex items-center justify-center'>{'location'}</p>
        <p className='w-32 h-full text-sm flex items-center justify-center'>{'date'}</p>
        <p className='w-48 h-full text-sm flex items-center justify-center'>{'time'}</p>
        <p className='w-64 h-full text-sm flex items-center justify-center'>{'user'}</p>
        <p className='w-24 h-full text-sm flex items-center justify-center'>{'edit'}</p>
    </div>
)
const UpdatedOrdersTableRecord = ({ record }: UpdatedOrdersRecordTabtypeInout) => (
    <div className={' h-12 w-full flex text-white border-b-2 border-white/30 hover:bg-white/30 cursor-pointer'}>
        <p className='w-16 h-full text-sm flex items-center justify-center ml-4'>{record.id}</p>
        <p className='w-28 h-full text-sm flex items-center justify-center'>{record.type}</p>
        <p className='w-96 h-full text-sm flex items-center justify-center'>{record.location}</p>
        <p className='w-32 h-full text-sm flex items-center justify-center'>{record.date}</p>
        <p className='w-48 h-full text-sm flex items-center justify-center'>{record.time}</p>
        <p className='w-64 h-full text-sm flex items-center justify-center'>{record.user}</p>
        <div className='flex h-8 m-auto'>
            <BsPencilFill className='h-full ' />
            <BsTrashFill className='h-full ml-4' />
            <BsCheckLg className='h-full ml-4' />
        </div>
    </div>
)
type UpdatedOrdersRecordTabtypeInout = {
    record: UpdatedOrdersRecordTabtype,
    key: number,
}
type UpdatedOrdersRecordTabtype = {
    id: string,
    type: string,
    location: string,
    date: string,
    time: string,
    user: string,
}
const UpdatedOrderList = [
    {
        id: 'a34284',
        type: 'lite',
        location: 'UQ Campue',
        date: '06-10-2025',
        time: '9am, 2h',
        user: 'Li',
    },
    {
        id: 'a342845',
        type: 'Personal',
        location: 'UQ Campue',
        date: '06-10-2025',
        time: '13pm, 2h',
        user: 'wawa',
    },
    {
        id: 'a34292',
        type: 'Pet',
        location: 'Runaway Bay townhouse',
        date: '06-10-2025',
        time: '7pm, 2h',
        user: 'Tina',
    },
    {
        id: 'a34284',
        type: 'lite',
        location: 'UQ Campue',
        date: '06-10-2025',
        time: '9am, 2h',
        user: 'Li',
    },
    {
        id: 'a342845',
        type: 'Personal',
        location: 'UQ Campue',
        date: '06-10-2025',
        time: '13pm, 2h',
        user: 'wawa',
    },
    {
        id: 'a34292',
        type: 'Pet',
        location: 'Runaway Bay townhouse',
        date: '06-10-2025',
        time: '7pm, 2h',
        user: 'Tina',
    },
    {
        id: 'a34284',
        type: 'lite',
        location: 'UQ Campue',
        date: '06-10-2025',
        time: '9am, 2h',
        user: 'Li',
    },
    {
        id: 'a342845',
        type: 'Personal',
        location: 'UQ Campue',
        date: '06-10-2025',
        time: '13pm, 2h',
        user: 'wawa',
    },
    {
        id: 'a34292',
        type: 'Pet',
        location: 'Runaway Bay townhouse',
        date: '06-10-2025',
        time: '7pm, 2h',
        user: 'Tina',
    },
    {
        id: 'a34284',
        type: 'lite',
        location: 'UQ Campue',
        date: '06-10-2025',
        time: '9am, 2h',
        user: 'Li',
    },
    {
        id: 'a342845',
        type: 'Personal',
        location: 'UQ Campue',
        date: '06-10-2025',
        time: '13pm, 2h',
        user: 'wawa',
    },
    {
        id: 'a34292',
        type: 'Pet',
        location: 'Runaway Bay townhouse',
        date: '06-10-2025',
        time: '7pm, 2h',
        user: 'Tina',
    },
]

export default Page
