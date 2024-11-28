'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { personalPhotographySectionlist, personalPhotographyDemolist } from "@/constant/shopPageContent";
import Image from 'next/image';
import { BsChevronCompactDown, BsChevronLeft, BsChevronRight, BsCircleFill } from "react-icons/bs";
import { AppoinmentTime, PhotoType } from './components';

const Page = () => {
    const router = useRouter()
    const [bookSection, setBookSection] = useState(bookSectionList[0])


    return (
        <div className='mt-12 container mx-auto flex flex-col' id='1-2'>
            <div className='flex justify-center items-center mt-36 mx-auto space-x-20'>
                <div className='bg-gray-300 h-px w-80'></div>
                <h1 className=' text-4xl text-white tracking-wider'>OUR ADVANTAGES</h1>
                <div className='bg-gray-300 h-px w-80'></div>
            </div>
            <ul className='w-full'>
                {personalPhotographySectionlist.map((section, index) => (
                    <li className='flex odd:flex-row-reverse mt-20' key={index}>
                        <Image src={section.imgSrc} alt='' height={300} width={900} className='h-auto' />
                        <div className='flex flex-col justify-center items-center'>
                            <h1 className='text-2xl text-gray-200'>{section.title}</h1>
                            <p className='mt-6 text-gray-300 text-wrap w-2/3'>{section.content}</p>
                        </div>
                    </li>
                ))}
            </ul>
            <div className='w-full mt-48 flex flex-col'>
                <div className='flex justify-center items-center mt-12 mx-auto space-x-20'>
                    <div className='bg-gray-300 h-px w-80'></div>
                    <h1 className=' text-4xl text-white tracking-wider'>GUEST PHOTO DISPLAY</h1>
                    <div className='bg-gray-300 h-px w-80'></div>
                </div>
                <ul className='w-full mt-24 items-center'>
                    {personalPhotographyDemolist.map((demo, index) => (
                        <li className='w-2/3 flex mx-auto' key={index}><img src={demo.imgSrc} alt='' className='w-full' /></li>
                    ))}
                </ul>

            </div>
            <div className='w-full mt-48 flex flex-col'>
                <div className='w-full flex items-center justify-between mt-12 mx-auto'>
                    <div className='flex flex-col items-end'>
                        <p className='text-gray-300 text-sm'>Previous</p>
                        <div className='flex space-x-5 text-gray-300 hover:text-white cursor-pointer'>
                            <BsChevronLeft className='h-6 w-6 my-auto' />
                            <h1 className=' text-xl text-white tracking-wider'>None</h1>
                        </div>
                    </div>
                    <div className='bg-gray-300 h-px w-48'></div>
                    <div className='flex flex-col cursor-pointer' onClick={() => router.push('/service#1-3')}>
                        <h1 className=' text-4xl text-white tracking-wider'>START YOUR JOURNEY</h1>
                        <BsChevronCompactDown className='h-12 w-12 text-gray-300 mx-auto animate-pulse' />
                    </div>
                    <div className='bg-gray-300 h-px w-48'></div>
                    <div className='flex flex-col items-start'>
                        <p className='text-gray-300 text-sm'>Next</p>
                        <div
                            className='flex space-x-5 text-gray-300 hover:text-white cursor-pointer'
                            onClick={() => router.push('/service/video#1')}
                        >
                            <h1 className=' text-xl text-white tracking-wider'>Video Generation</h1>
                            <BsChevronRight className='h-6 w-6 my-auto' />
                        </div>
                    </div>
                </div>
                <h1 className='text-white text-5xl mx-auto tracking-widest mt-36' id='1-3'>Booking for Personal Photography</h1>
                <div className='w-full flex mt-24 '>
                    <ul className='w-1/5 border-r-2 border-gray-300 pr-5 space-y-10'>
                        {bookSectionList.map((title, index) => (
                            <li
                                className={title == bookSection ? bookSectionSelectedClassNameFix : bookSectionUnSelectedClassNameFix}
                                key={index} onClick={() => (title != bookSection) && setBookSection(title)}
                            >
                                {title == bookSection && <BsCircleFill className='h-2 w-2 my-auto' />}
                                <h1 className='text-xl'>{title}</h1>
                            </li>
                        ))}
                    </ul>
                    <div className='flex-grow ml-10 overflow-x-auto'>{{
                        'photo type': (<PhotoType
                            onNext={() => setBookSection('appoinment time')}
                        />),
                        'appoinment time': (<AppoinmentTime
                            onNext={() => setBookSection('appoinment time')}
                        />),
                        'personal info': (<div>personal info</div>),
                    }[bookSection]}</div>
                </div>
            </div>
            <div className='w-full h-48'></div>
        </div >
    )
}

const bookSectionUnSelectedClassNameFix = 'flex justify-end items-center text-gray-300 hover:text-white space-x-5 cursor-pointer'
const bookSectionSelectedClassNameFix = 'flex justify-end items-center text-white space-x-5 cursor-pointer'
const bookSectionList = [
    'photo type',
    'appoinment time',
    'personal info',
    'payment detail',
    'order complete',
]
export default Page
