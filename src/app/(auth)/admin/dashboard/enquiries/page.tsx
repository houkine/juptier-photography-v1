'use client'
import OrderCreation, { EnquiryType } from '@/components/admin/OrderCreation/OrderCreation'
import React, { Dispatch, SetStateAction, useContext, useState } from 'react'
import { ThemeContext } from '../ThemeContext'
import { BsCheckCircleFill, BsFillReplyFill, BsXCircleFill } from 'react-icons/bs'

const Page = () => {
    const [enquiry, setEnquiry] = useState<EnquiryType | null>(null)
    return (
        <div className='w-full h-full flex'>
            <div className='h-full w-2/3 flex flex-col'>
                <div className='h-1/2 w-full flex'> <ComingEnquiries onOrderGenerate={setEnquiry} /></div>

                <div className='h-1/2 w-full flex'><EnquiryHistory /></div>
            </div>
            <div className='h-full w-1/3 flex '><OrderCreation enquiry={enquiry} /></div>

        </div>
    )
}

const ComingEnquiries = ({ onOrderGenerate }: ComingEnquiriesInputType) => {
    const theme = useContext(ThemeContext);
    return (
        <div className={'w-full h-full flex flex-col rounded-lg ' + theme}>
            <div className='mt-4 h-18 flex'>
                <p className='ml-8 text-xl'>Coming Enquiries</p>
                <div></div>
            </div>
            <div className='w-full h-32 flex text-white bg-white/20 mt-4'>
                <p className={OrderTabClassname + ' w-72 ml-4'}>{'id'}</p>
                <p className={OrderTabClassname + ' w-48'}>{'session'}</p>
                <p className={OrderTabClassname + ' w-32'}>{'created at'}</p>
                <p className={OrderTabClassname + ' w-24'}>{'appoinment'}</p>
                <p className={OrderTabClassname + ' w-20'}>{'product'}</p>
                <p className={OrderTabClassname + ' w-32'}>{'price(AUD)'}</p>
                <p className={OrderTabClassname + ' w-32'}>{'status'}</p>
                <p className={OrderTabClassname + ' flex-grow '}>{'action'}</p>
            </div>
            <ul className='w-full overflow-y-auto'>
                {ComingEnquiryList.map((enquiry, index) => (
                    <EnquiryRecord key={index} enquiry={enquiry} onOrderGenerate={onOrderGenerate} />
                ))}
            </ul>
        </div>
    )
}
type ComingEnquiriesInputType = {
    onOrderGenerate: Dispatch<SetStateAction<EnquiryType | null>>
}
const ComingEnquiryList = [
    {
        id: 'abvasdoi22',
        userId: 'abvasdoi22',
        session: 'LITE',
        type: 'pet',
        status: 'first submit',
        postscript: 'I want to take photos',
        isValid: true,
        created: '2025-10-12',
        price: 200,
        appointments: ['abvasdoi22'],
        products: ['abvasdoi22'],
    },
    {
        id: 'abfafas22',
        userId: 'abvasdoi22',
        session: 'LITE',
        type: 'portrait',
        status: 'updated',
        postscript: 'I want to take photos',
        isValid: true,
        created: '2025-10-13',
        price: 200,
        appointments: ['abvasdoi22'],
        products: ['abvasdoi22'],
    },
    {
        id: 'nsiudabf121',
        userId: 'abvasdoi22',
        session: 'Event',
        type: 'wedding',
        status: 'responsed',
        postscript: 'I want to take photos',
        isValid: true,
        created: '2025-10-14',
        price: 800,
        appointments: ['abvasdoi22'],
        products: ['abvasdoi22'],
    },
    {
        id: 'nsiudabf121',
        userId: 'abvasdoi22',
        session: 'Event',
        type: 'wedding',
        status: 'responsed',
        postscript: 'I want to take photos',
        isValid: true,
        created: '2025-10-14',
        price: 800,
        appointments: ['abvasdoi22'],
        products: ['abvasdoi22'],
    },
    {
        id: 'nsiudabf121',
        userId: 'abvasdoi22',
        session: 'Event',
        type: 'wedding',
        status: 'responsed',
        postscript: 'I want to take photos',
        isValid: true,
        created: '2025-10-14',
        price: 800,
        appointments: ['abvasdoi22'],
        products: ['abvasdoi22'],
    },
    {
        id: 'nsiudabf121',
        userId: 'abvasdoi22',
        session: 'Event',
        type: 'wedding',
        status: 'responsed',
        postscript: 'I want to take photos',
        isValid: true,
        created: '2025-10-14',
        price: 800,
        appointments: ['abvasdoi22'],
        products: ['abvasdoi22'],
    },
    {
        id: 'nsiudabf121',
        userId: 'abvasdoi22',
        session: 'Event',
        type: 'wedding',
        status: 'responsed',
        postscript: 'I want to take photos',
        isValid: true,
        created: '2025-10-14',
        price: 800,
        appointments: ['abvasdoi22'],
        products: ['abvasdoi22'],
    },
    {
        id: 'nsiudabf121',
        userId: 'abvasdoi22',
        session: 'Event',
        type: 'wedding',
        status: 'responsed',
        postscript: 'I want to take photos',
        isValid: true,
        created: '2025-10-14',
        price: 800,
        appointments: ['abvasdoi22'],
        products: ['abvasdoi22'],
    },
    {
        id: 'nsiudabf121',
        userId: 'abvasdoi22',
        session: 'Event',
        type: 'wedding',
        status: 'responsed',
        postscript: 'I want to take photos',
        isValid: true,
        created: '2025-10-14',
        price: 800,
        appointments: ['abvasdoi22'],
        products: ['abvasdoi22'],
    },
    {
        id: 'nsiudabf121',
        userId: 'abvasdoi22',
        session: 'Event',
        type: 'wedding',
        status: 'responsed',
        postscript: 'I want to take photos',
        isValid: true,
        created: '2025-10-14',
        price: 800,
        appointments: ['abvasdoi22'],
        products: ['abvasdoi22'],
    },
    {
        id: 'nsiudabf121',
        userId: 'abvasdoi22',
        session: 'Event',
        type: 'wedding',
        status: 'responsed',
        postscript: 'I want to take photos',
        isValid: true,
        created: '2025-10-14',
        price: 800,
        appointments: ['abvasdoi22'],
        products: ['abvasdoi22'],
    },
]
const EnquiryHistory = () => {
    return (
        <div className='w-full flex flex-col'>
        </div>
    )
}
const EnquiryRecord = ({ enquiry, onOrderGenerate }: EnquiryRecordInputType) => {
    return (
        <li className={' h-24 w-full flex text-white border-b-2 border-white/30 hover:bg-white/20 cursor-pointer'}>
            <p className={OrderTabClassname + ' w-72 ml-4'}>{enquiry.id}</p>
            <p className={OrderTabClassname + ' w-48'}>{enquiry.session + ', ' + enquiry.type}</p>
            <p className={OrderTabClassname + ' w-32'}>{enquiry.created}</p>
            <p className={OrderTabClassname + ' w-24'}>{enquiry.appointments.length > 0 ? '√' : '×'}</p>
            <p className={OrderTabClassname + ' w-20'}>{enquiry.products.length > 0 ? '√' : '×'}</p>
            <p className={OrderTabClassname + ' w-32'}>{'$' + enquiry.price}</p>
            <p className={OrderTabClassname + ' w-32'}>{enquiry.status}</p>
            <div className='flex h-full flex-grow justify-center items-center'>
                <BsFillReplyFill className='h-full ' />
                <BsXCircleFill className='h-full ml-4' />
                <BsCheckCircleFill className='h-full ml-4' onClick={() => onOrderGenerate(enquiry)} />
            </div>
        </li>

    )
}
type EnquiryRecordInputType = {
    enquiry: EnquiryType,
    onOrderGenerate: Dispatch<SetStateAction<EnquiryType | null>>
}
// const EnquiryRecordButton = ({ content, handleOnClick }: EnquiryRecordButtonInputType) =>
//     <div
//         className='w-18 h-8 bg-white/10 rounded-full text-sm flex items-center justify-center cursor-pointer hover:bg-white/20'
//         onClick={handleOnClick}
//     >{content}</div>
// type EnquiryRecordButtonInputType = {
//     content: string,
//     handleOnClick?: () => void
// }

// const Enquiry = {
//     id: '0199c8d1-5ed5-7739-af10-9fbb235fd816',
//     userId: '0199c8d1-5ed5-7739-af10-9fbb235fd816',
//     itemId: '0199c8d1-5ed5-7739-af10-9fbb235fd816',
//     user: 'pan',
//     product: 'album',
//     type: 'A4 20photos style1',
//     quantity: 1,
//     price: 20,
//     Postscript: 'photo with campus',

// }
const OrderTabClassname = 'h-full text-sm flex items-center justify-center'

export default Page
