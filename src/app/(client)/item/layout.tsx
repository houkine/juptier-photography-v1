'use client'
import React from 'react'

const Layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className='w-screen h-screen pt-32 overflow-y-auto bg-white'>
            {children}
        </div>
    )
}

export default Layout
