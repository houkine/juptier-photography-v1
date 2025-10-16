'use client'
import OrderEditor, { OrderType } from '@/components/admin/OrderEditor/OrderEditor';
import React, { Dispatch, SetStateAction, useContext, useEffect, useState } from 'react'
import { BsCaretUpFill, BsCaretDownFill, BsCalendarHeart, BsCartCheck, BsFillReplyFill, BsXCircleFill, BsArrowUpSquare, BsBoxArrowRight } from "react-icons/bs";
import { ThemeContext } from '../ThemeContext';
import SearchBar from '@/components/admin/SearchBar/SearchBar';
import Pagenation from '@/components/admin/Pagenation/Pagenation';

const Page = () => {
    const [order, setOrder] = useState<OrderType | null>(null)
    return (
        <div className='w-full h-full flex'>
            <div className='h-full w-2/3 flex flex-col justify-between px-2'>
                <div className='h-1/2 w-full flex pb-4'> <ActiveOrders orderUpdateOnClick={setOrder} /></div>

                <div className='h-1/2 w-full flex'><OrderHistory /></div>
            </div>
            <div className='h-full w-1/3 flex px-2'><OrderEditor order={order} /></div>

        </div>
    )
}

const ActiveOrders = ({ orderUpdateOnClick }: ActiveOrdersInputType) => {
    const theme = useContext(ThemeContext);
    const [take, setTake] = useState(5)
    const [activeOrderList, setActiveOrderList] = useState<OrderType[]>([])
    const HandleSearchOnClick = (selectedValue: string, keywords: string): void => {
        alert(selectedValue + '-' + keywords)
    }
    useEffect(() => {
        setActiveOrderList(OrderList)
    }, [])

    return (
        <div className={'w-full h-full flex flex-col rounded-lg ' + theme}>
            <div className='mt-4 h-18 flex items-center'>
                <p className='ml-8 text-xl'>Active Orders</p>
                <SearchBar selectValueList={['id', 'session']} className='m-auto mr-0' SearchOnClick={HandleSearchOnClick} />
                <Pagenation
                    take={take} handleTakeOnChange={setTake} takeOptions={takeOptions}
                    recordStartIndex={1} recordEndIndex={take} totalRecords={10}
                    className='h-12 m-auto mr-8 flex items-center'
                />

            </div>
            <div className='w-full h-12 flex text-white bg-white/20 mt-4'>
                <p className={OrderTabClassname + ' w-16'}>{''}</p>
                <p className={OrderTabClassname + ' w-72'}>{'id'}</p>
                <p className={OrderTabClassname + ' w-48'}>{'session'}</p>
                <p className={OrderTabClassname + ' w-32'}>{'created at'}</p>
                <p className={OrderTabClassname + ' w-24'}>{'appoinment'}</p>
                <p className={OrderTabClassname + ' w-20'}>{'product'}</p>
                <p className={OrderTabClassname + ' w-32'}>{'price(AUD)'}</p>
                <p className={OrderTabClassname + ' w-32'}>{'status'}</p>
                <p className={OrderTabClassname + ' flex-grow '}>{'action'}</p>
            </div>
            <ul className='w-full overflow-y-auto mb-2'>
                {activeOrderList.map((order, index) => (
                    <OrderRecord key={index} order={order} orderUpdateOnClick={orderUpdateOnClick} />
                ))}
            </ul>
        </div>
    )
}
type ActiveOrdersInputType = {
    orderUpdateOnClick: Dispatch<SetStateAction<OrderType | null>>
}

const OrderHistory = () => {
    const theme = useContext(ThemeContext);
    const [take, setTake] = useState(5)
    const [activeOrderList, setActiveOrderList] = useState<OrderType[]>([])
    useEffect(() => {
        setActiveOrderList(OrderList)
    }, [])
    const HandleSearchOnClick = (selectedValue: string, keywords: string): void => {
        alert(selectedValue + '-' + keywords)
    }
    return (
        <div className={'w-full h-full flex flex-col rounded-lg ' + theme}>
            <div className='mt-4 h-18 flex items-center'>
                <p className='ml-8 text-xl'>Order History</p>
                <SearchBar selectValueList={['id', 'session']} className='m-auto mr-0' SearchOnClick={HandleSearchOnClick} />
                <Pagenation
                    take={take} handleTakeOnChange={setTake} takeOptions={takeOptions}
                    recordStartIndex={1} recordEndIndex={take} totalRecords={10}
                    className='h-12 m-auto mr-8 flex items-center'
                />

            </div>
            <div className='w-full h-12 flex text-white bg-white/20 mt-4'>
                <p className={OrderTabClassname + ' w-16'}>{''}</p>
                <p className={OrderTabClassname + ' w-72'}>{'id'}</p>
                <p className={OrderTabClassname + ' w-48'}>{'session'}</p>
                <p className={OrderTabClassname + ' w-32'}>{'created at'}</p>
                <p className={OrderTabClassname + ' w-24'}>{'appoinment'}</p>
                <p className={OrderTabClassname + ' w-20'}>{'product'}</p>
                <p className={OrderTabClassname + ' w-32'}>{'price(AUD)'}</p>
                <p className={OrderTabClassname + ' w-32'}>{'status'}</p>
                <p className={OrderTabClassname + ' flex-grow '}>{'action'}</p>
            </div>
            <ul className='w-full overflow-y-auto mb-2'>
                {activeOrderList.map((order, index) => (
                    <OrderRecord key={index} order={order} />
                ))}
            </ul>
        </div>
    )
}

const OrderList: OrderType[] = [
    {
        id: '0199c8d1-5ed5-7739-af10-9fbb235fd816',
        userId: '0199c8d1-5ed5-7739-af10-9fbb235fd816',
        session: 'lite',
        type: 'portrait',
        originalPhotos: '50-100',
        editedPhotos: '4',
        video: '5min',
        duration: '1h',
        appointments: [],
        products: [],
        postscript: 'hello I want to take photo -1',
        status: 'payment proceed',
        depositPaymentTime: '2025-10-02',
        shootingCompleteTime: '2025-10-03',
        balancePaymentTime: '2025-10-04',
        finaliseTime: '2025-10-05',
        totalPrice: 200,
        depositPrice: 100,
        balancePrice: 100,
        remark: 'he is a good man',
        isValid: true,
        createdAt: '2025-10-01',
    },
    {
        id: '0199c8d1-5ed5-7739-af10-9fbb235fd816',
        userId: '0199c8d1-5ed5-7739-af10-9fbb235fd816',
        session: 'lite',
        type: 'portrait',
        originalPhotos: '50-100',
        editedPhotos: '4',
        video: '5min',
        duration: '1h',
        appointments: [],
        products: [],
        postscript: 'hello I want to take photo -2',
        status: 'payment proceed',
        depositPaymentTime: '2025-10-02',
        shootingCompleteTime: '2025-10-03',
        balancePaymentTime: '2025-10-04',
        finaliseTime: '2025-10-05',
        totalPrice: 200,
        depositPrice: 100,
        balancePrice: 100,
        remark: 'he is a good man',
        isValid: true,
        createdAt: '2025-10-01',
    },
    {
        id: '0199c8d1-5ed5-7739-af10-9fbb235fd816',
        userId: '0199c8d1-5ed5-7739-af10-9fbb235fd816',
        session: 'lite',
        type: 'portrait',
        originalPhotos: '50-100',
        editedPhotos: '4',
        video: '5min',
        duration: '1h',
        appointments: [],
        products: [],
        postscript: 'hello I want to take photo -3',
        status: 'payment proceed',
        depositPaymentTime: '2025-10-02',
        shootingCompleteTime: '2025-10-03',
        balancePaymentTime: '2025-10-04',
        finaliseTime: '2025-10-05',
        totalPrice: 200,
        depositPrice: 100,
        balancePrice: 100,
        remark: 'he is a good man',
        isValid: true,
        createdAt: '2025-10-01',
    },
    {
        id: '0199c8d1-5ed5-7739-af10-9fbb235fd816',
        userId: '0199c8d1-5ed5-7739-af10-9fbb235fd816',
        session: 'lite',
        type: 'portrait',
        originalPhotos: '50-100',
        editedPhotos: '4',
        video: '5min',
        duration: '1h',
        appointments: [],
        products: [],
        postscript: 'hello I want to take photo -4',
        status: 'payment proceed',
        depositPaymentTime: '2025-10-02',
        shootingCompleteTime: '2025-10-03',
        balancePaymentTime: '2025-10-04',
        finaliseTime: '2025-10-05',
        totalPrice: 200,
        depositPrice: 100,
        balancePrice: 100,
        remark: 'he is a good man',
        isValid: true,
        createdAt: '2025-10-01',
    },
]

const OrderRecord = ({ order, orderUpdateOnClick }: EnquiryRecordInputType) => {
    const [isExtended, setIsExtended] = useState<boolean>(false)
    return (
        <li className={' w-full flex flex-col text-white border-b-2 border-white/30 hover:bg-white/20'}>
            <div className='h-20 w-full flex'>
                <p className={OrderTabClassname + ' w-16'}>{isExtended ?
                    <BsCaretUpFill size={15} className='cursor-pointer' onClick={() => setIsExtended(false)} /> :
                    <BsCaretDownFill size={15} className='cursor-pointer' onClick={() => setIsExtended(true)} />}
                </p>
                <p className={OrderTabClassname + ' w-72'}>{order.id}</p>
                <p className={OrderTabClassname + ' w-48'}>{order.session + ', ' + order.type}</p>
                <p className={OrderTabClassname + ' w-32'}>{order.createdAt}</p>
                <p className={OrderTabClassname + ' w-24'}>{order.appointments.length > 0 ? '√' : '×'}</p>
                <p className={OrderTabClassname + ' w-20'}>{order.products.length > 0 ? '√' : '×'}</p>
                <p className={OrderTabClassname + ' w-32'}>{'$' + order.totalPrice}</p>
                <p className={OrderTabClassname + ' w-32'}>{order.status}</p>
                {orderUpdateOnClick ?
                    <div className='flex h-full flex-grow justify-center items-center'>
                        <BsFillReplyFill className='h-full cursor-pointer ' title='email' />
                        <BsXCircleFill className='h-full ml-4 cursor-pointer' title='mark as read' />
                        <BsBoxArrowRight className='h-full ml-4 cursor-pointer' title='load order' onClick={() => orderUpdateOnClick(order)} />
                    </div> :
                    <div className='flex h-full flex-grow justify-center items-center'>
                        <BsArrowUpSquare className='h-full cursor-pointer ' title='mark as unread' />
                    </div>
                }
            </div>
            {isExtended && <div className='min-h-24 py-2 w-full flex'>
                <div className='flex flex-col ml-4 w-48 items-center space-y-2'>
                    <p>{'pan'}</p>
                    <p>{'pan@email.com'}</p>
                </div>
                <p className='flex text-wrap w-1/3 ml-4 text-sm'>{fakeText}</p>
                <div className='flex flex-col items-center text-sm ml-4 bg-white/20 rounded-md p-2'>
                    <BsCalendarHeart size={20} />
                    <div className='flex flex-col m-auto'>
                        <p className='flex text-wrap'>{'UQ campus'}</p>
                        <p>{'2025-10-03 9am'}</p>
                        <p>{'2h'}</p>
                    </div>
                </div>
                <div className='flex flex-col items-center text-sm ml-4 bg-white/20 rounded-md p-2'>
                    <BsCartCheck size={20} />
                    <div className='flex flex-col m-auto'>
                        <p className='flex text-wrap'>{'album' + ', *' + 1}</p>
                        <p>{'A4 20photos style1'}</p>
                        <p>{'photo with campus'}</p>
                    </div>
                </div>
                <div className='flex flex-col items-center text-sm ml-4 bg-white/20 rounded-md p-2'>
                    <BsCartCheck size={20} />
                    <div className='flex flex-col m-auto'>
                        <p className='flex text-wrap'>{'album' + ', *' + 1}</p>
                        <p>{'A4 20photos style1'}</p>
                        <p>{'photo with campus'}</p>
                    </div>
                </div>
            </div>}

        </li>

    )
}
type EnquiryRecordInputType = {
    order: OrderType,
    orderUpdateOnClick?: Dispatch<SetStateAction<OrderType | null>>
}
const OrderTabClassname = 'h-full text-sm flex items-center justify-center '
const takeOptions = [1, 2, 3, 4, 5]
const fakeText = 'You’ll then enjoy a cinematic viewing of your photoshoot, where you’ll get to choose your favourite image to be beautifully retouched, framed and sent to you with our compliments.If you’d like to buy more photos, we have a wide range of options to chose from including framed artwork and digital collections with prices starting from as little as $395.'

export default Page
