'use client'
import React, { useContext, useState } from 'react'
import { ThemeContext } from './Context'

const Calendar = () => {
    const theme = useContext(ThemeContext);
    // const [dateList,setDateList] =useState([])
    const [startDate, setStartDate] = useState(GetDateFormat(new Date()))
    const [endDate, setEndDate] = useState(GetDateFormat((new Date((new Date()).valueOf() + ONE_DAY_DATE_VALUEOF_GAP * 6))))

    const DateReset = () => {
        setStartDate(GetDateFormat(new Date()))
        setEndDate(GetDateFormat((new Date((new Date()).valueOf() + ONE_DAY_DATE_VALUEOF_GAP * 6))))
    }

    return (
        <div className={' h-full flex flex-col w-52'}>
            <div className={'flex py-4 space-x-2 justify-center rounded-xl ' + theme}>
                <div className='flex flex-col my-auto'>
                    <div className='flex'>
                        <p className='text-white text-xs my-auto w-6 flex justify-end'>from</p>
                        <input type='date' className={DateInputClassname}
                            value={startDate} onChange={e => setStartDate(e.target.value)}
                        />
                    </div>
                    <div className='flex'>
                        <p className='text-white text-xs my-auto w-6 flex justify-end'>to</p>
                        <input type='date' className={DateInputClassname}
                            value={endDate} onChange={e => setEndDate(e.target.value)}
                        />
                    </div>
                </div>
                <div
                    className='bg-white/20 p-1 text-sm flex justify-center items-center rounded-lg cursor-pointer text-white hover:bg-white/30'
                    onClick={DateReset}
                >Reset</div>
            </div>
            <CalendarDateList startDate={startDate} endDate={endDate} />
        </div>
    )
}
const ONE_DAY_DATE_VALUEOF_GAP = 86400000
const CalendarDateList = ({ startDate, endDate }: CalendarDateListInputType) => {
    const _startDate = new Date(startDate)
    let _currentDate = new Date(_startDate.valueOf())
    const _endDate = new Date(endDate)
    const dates: Date[] = []

    while (_currentDate.valueOf() <= _endDate.valueOf()) {
        // const currentDateFormat = GetDateFormat(_currentDate)
        dates.push(_currentDate)
        _currentDate = new Date(_currentDate.valueOf() + ONE_DAY_DATE_VALUEOF_GAP)
    }
    return (
        <ul className='flex-1 mt-8 space-y-2 overflow-y-auto'>
            {dates.map((date, index) => (
                <CalendarDate date={date} key={index} />
            ))}
        </ul>
    )
}
type CalendarDateListInputType = {
    startDate: string,
    endDate: string,
}
const CalendarDate = ({ date }: CalendarDateInputType) => {
    const theme = useContext(ThemeContext);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-indexed
    const day = date.getDate().toString().padStart(2, '0');
    const confirmations = confirmationList.filter(confirmation => confirmation.date == `${day}-${month}-${year}`)

    const GetCardColour = (time: string): string => {
        switch (time) {
            case 'morning':
                return ' bg-green-400/20'
            case 'afternoon':
                return ' bg-yellow-400/20'
            case 'evening':
                return ' bg-blue-400/20'

            default:
                return ' bg-black/20'
        }
    }
    return (
        <li className={'flex p-4 rounded-lg mr-2 ' + theme}>
            <div className='flex flex-col w-16 h-full text-white '>
                <p className='text-xs'>{year}</p>
                <p className='text-xs'>{month + '月'}</p>
                <p className='text-2xl mt-2'>{day}</p>
                <p className='text-sm'>{GetDay(date)}</p>
            </div>
            <ul className='w-full flex flex-col space-y-2'>
                {confirmations.map((confirmation, index) => (
                    <li
                        key={index}
                        className={'w-full flex flex-col p-2 rounded justify-center' + GetCardColour(confirmation.time)}
                    >
                        {/* <p className='text-lg'>{confirmation.time}</p> */}
                        <p className='text-sm text-center'>{confirmation.photographyType}</p>
                        <p className='text-sm text-center'>{confirmation.location}</p>
                        <p className='text-sm text-center'>{confirmation.user}</p>
                    </li>
                ))}
            </ul>
        </li>
    )
}
type CalendarDateInputType = {
    date: Date,
}
const GetDay = (date: Date): string => {
    const day = date.getDay()
    switch (day) {
        case 0:
            return 'Sun'
        case 1:
            return 'Mon'
        case 2:
            return 'Tue'
        case 3:
            return 'Wed'
        case 4:
            return 'Thu'
        case 5:
            return 'Fri'
        case 6:
            return 'Sat'
        default:
            return 'Unknown';
    }
}
const GetDateFormat = (date: Date): string => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-indexed
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`
}

const confirmationList = [
    {
        id: '1',
        date: '20-10-2025',
        time: 'morning',
        photographyType: 'Portrait',
        location: 'UQ campus',
        user: 'person1',
    },
    {
        id: '2',
        date: '21-10-2025',
        time: 'morning',
        photographyType: 'lite',
        location: 'UQ campus',
        user: 'person1',
    },
    {
        id: '3',
        date: '21-10-2025',
        time: 'afternoon',
        photographyType: 'Portrait',
        location: 'The Spit Gold Coast, Seaworld Dr, Main Beach QLD 4217',
        user: 'person1',
    },
    {
        id: '4',
        date: '21-10-2025',
        time: 'evening',
        photographyType: 'Portrait',
        location: 'UQ campus',
        user: 'person1',
    },
    {
        id: '5',
        date: '23-10-2025',
        time: 'morning',
        photographyType: 'wedding',
        location: 'UQ campus',
        user: 'person1',
    },
    {
        id: '6',
        date: '24-10-2025',
        time: 'morning',
        photographyType: 'Portrait',
        location: 'UQ campus',
        user: 'person1',
    },
]

const DateInputClassname = 'text-xs appearance-none outline-none bg-transparent ml-2 border-b-2 border-gray-400 text-white dark:[color-scheme:dark] w-24 '
export default Calendar
