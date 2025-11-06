'use client'
import React, { useState } from 'react'
import Home from './Home'
import Gallery from './Gallery'
import About from './About'
import Service from './Service'
import Contact from './Contact'

const Page = () => {
    const [currentTab, setCurrentTab] = useState<string>(TabTitles[0])
    return (
        <div className='w-full h-full flex '>
            <ul className=" mt-3">
                {TabTitles.map((tab, index) => (
                    <li
                        className={'m-3 p-2 rounded-md cursor-pointer flex ' + (tab == currentTab ? 'bg-white/15 ' : 'hover:bg-white/15')} key={index}
                        onClick={() => setCurrentTab(tab)}
                    >
                        <p className="text-base text-white word-wrap">{tab}</p>
                    </li>
                ))}
                <li className='h-1 w-full border-2 border-white mt-12' />
                <li
                    className={'m-3 p-2 rounded-md cursor-pointer flex ' + ('appoinment' == currentTab ? 'bg-white/15 ' : 'hover:bg-white/15')}
                    onClick={() => setCurrentTab('appoinment')}
                >
                    <p className="text-base text-white word-wrap">{'appoinment'}</p>
                </li>
                <li
                    className={'m-3 p-2 rounded-md cursor-pointer flex ' + ('product' == currentTab ? 'bg-white/15 ' : 'hover:bg-white/15')}
                    onClick={() => setCurrentTab('product')}
                >
                    <p className="text-base text-white word-wrap">{'product'}</p>
                </li>
            </ul>
            <div className='flex-1 h-full flex'>
                {
                    {
                        'HOME': <Home />,
                        'GALLERY': <Gallery />,
                        'ABOUT': <About />,
                        'SERVICE': <Service />,
                        'CONTACT': <Contact />,
                    }[currentTab]
                }
            </div>
        </div>
    )
}

const TabTitles = [
    'HOME',
    'GALLERY',
    'ABOUT',
    'SERVICE',
    'CONTACT',
]
export default Page
