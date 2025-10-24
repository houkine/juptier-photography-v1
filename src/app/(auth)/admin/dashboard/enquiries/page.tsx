'use client'
import OrderEditor, { EnquiryType } from '@/components/admin/OrderEditor/OrderEditor'
import React, { Dispatch, SetStateAction, useContext, useState } from 'react'
import { ThemeContext } from '../Context'
import { BsCheckCircleFill, BsFillReplyFill, BsXCircleFill, BsCaretDownFill, BsCaretUpFill, BsCalendarHeart, BsCartCheck, BsArrowUpSquare } from 'react-icons/bs'
import Pagenation from '@/components/admin/Pagenation/Pagenation'
import SearchBar from '@/components/admin/SearchBar/SearchBar'

const Page = () => {
    const [enquiry, setEnquiry] = useState<EnquiryType | null>(null)
    return (
        <div className='w-full h-full flex'>
            <div className='h-full w-2/3 flex flex-col justify-between px-2'>
                <div className='h-1/2 w-full flex pb-4'> <ComingEnquiries onOrderGenerate={setEnquiry} /></div>

                <div className='h-1/2 w-full flex'><EnquiryHistory /></div>
            </div>
            <div className='h-full w-1/3 flex px-2'><OrderEditor enquiry={enquiry} /></div>

        </div>
    )
}

const ComingEnquiries = ({ onOrderGenerate }: ComingEnquiriesInputType) => {
    const theme = useContext(ThemeContext);
    const [take, setTake] = useState(5)

    const HandleSearchOnClick = (selectedValue: string, keywords: string): void => {
        alert(selectedValue + '-' + keywords)
    }

    return (
        <div className={'w-full h-full flex flex-col rounded-lg ' + theme}>
            <div className='mt-4 h-18 flex items-center'>
                <p className='ml-8 text-xl'>Coming Enquiries</p>
                <SearchBar selectValueList={['id', 'session']} className='m-auto mr-0' SearchOnClick={HandleSearchOnClick} />
                <Pagenation
                    take={take} handleTakeOnChange={setTake} takeOptions={takeOptions}
                    recordStartIndex={1} recordEndIndex={take} totalRecords={10}
                    className='h-12 m-auto mr-8 flex items-center'
                />

            </div>
            <div className='w-full flex flex-col mt-4 overflow-auto'>
                <div className='h-12 flex text-white bg-white/20'>
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
                <ul className='mb-2'>
                    {ComingEnquiryList.map((enquiry, index) => (
                        <EnquiryRecord key={index} enquiry={enquiry} onOrderGenerate={onOrderGenerate} />
                    ))}
                </ul>
            </div>
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
    const theme = useContext(ThemeContext);
    const [take, setTake] = useState(5)

    const HandleSearchOnClick = (selectedValue: string, keywords: string): void => {
        alert(selectedValue + '-' + keywords)
    }
    return (
        <div className={'w-full h-full flex flex-col rounded-lg ' + theme}>
            <div className='mt-4 h-18 flex items-center'>
                <p className='ml-8 text-xl'>Enquiry History</p>
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
                {ComingEnquiryList.map((enquiry, index) => (
                    <EnquiryRecord key={index} enquiry={enquiry} />
                ))}
            </ul>
        </div>
    )
}
const EnquiryRecord = ({ enquiry, onOrderGenerate }: EnquiryRecordInputType) => {
    const [isExtended, setIsExtended] = useState<boolean>(false)
    return (
        <li className={' w-full flex flex-col text-white border-b-2 border-white/30 hover:bg-white/20'}>
            <div className='h-20 w-full flex'>
                <p className={OrderTabClassname + ' w-16'}>{isExtended ?
                    <BsCaretUpFill size={15} className='cursor-pointer' onClick={() => setIsExtended(false)} /> :
                    <BsCaretDownFill size={15} className='cursor-pointer' onClick={() => setIsExtended(true)} />}
                </p>
                <p className={OrderTabClassname + ' w-72'}>{enquiry.id}</p>
                <p className={OrderTabClassname + ' w-48'}>{enquiry.session + ', ' + enquiry.type}</p>
                <p className={OrderTabClassname + ' w-32'}>{enquiry.created}</p>
                <p className={OrderTabClassname + ' w-24'}>{enquiry.appointments.length > 0 ? '√' : '×'}</p>
                <p className={OrderTabClassname + ' w-20'}>{enquiry.products.length > 0 ? '√' : '×'}</p>
                <p className={OrderTabClassname + ' w-32'}>{'$' + enquiry.price}</p>
                <p className={OrderTabClassname + ' w-32'}>{enquiry.status}</p>
                {onOrderGenerate ?
                    <div className='flex h-full flex-grow justify-center items-center'>
                        <BsFillReplyFill className='h-full cursor-pointer ' title='email' />
                        <BsXCircleFill className='h-full ml-4 cursor-pointer' title='mark as read' />
                        <BsCheckCircleFill className='h-full ml-4 cursor-pointer' title='generate order' onClick={() => onOrderGenerate(enquiry)} />
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
    enquiry: EnquiryType,
    onOrderGenerate?: Dispatch<SetStateAction<EnquiryType | null>>
}
const OrderTabClassname = 'h-full text-sm flex items-center justify-center'
const takeOptions = [1, 2, 3, 4, 5]
const fakeText = 'You’ll then enjoy a cinematic viewing of your photoshoot, where you’ll get to choose your favourite image to be beautifully retouched, framed and sent to you with our compliments.If you’d like to buy more photos, we have a wide range of options to chose from including framed artwork and digital collections with prices starting from as little as $395.'
export default Page
