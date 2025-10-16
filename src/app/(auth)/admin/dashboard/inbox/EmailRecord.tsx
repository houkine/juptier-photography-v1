'use client'
import React, { Dispatch, SetStateAction, useContext } from 'react'
import { ThemeContext } from '../ThemeContext';
import { BsTrashFill } from 'react-icons/bs';

const EmailRecord = ({ email, setEmail, currentEmailId }: EmailRecordInputType) => {
    const theme = useContext(ThemeContext)

    return (
        <li
            className={'w-full h-24 flex rounded-xl ' + theme}
        >
            <div className={'w-2 h-full rounded-full ' + (email.isRead ? '' : 'bg-white/20')} />
            <div className={'flex flex-col flex-grow cursor-pointer pl-4 justify-center ' + (currentEmailId == email.id && 'bg-white/20')}
                onClick={() => setEmail(email)}

            >
                <p className='text-gray-300 text-sm'>{email.time}</p>
                <p className='text-white text-lg'>{email.subject}</p>
                <p className='text-gray-300 text-sm'>{email.from}</p>
            </div>
            <div className='h-full ml-2 px-2 flex rounded-xl cursor-pointer hover:bg-red-300/20'><BsTrashFill size={20} className='m-auto' /></div>
        </li>
    )
}
type EmailRecordInputType = {
    email: EmailType,
    setEmail: Dispatch<SetStateAction<EmailType | null>>,
    currentEmailId?: string | null

}
export type EmailType = {
    id: string,
    from: string,
    to: string,
    cc: string,
    time: string,
    subject: string,
    body: string,
    isRead: boolean,
    replyId?: string
}
export default EmailRecord
