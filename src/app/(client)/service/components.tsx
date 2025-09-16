import React, { MouseEventHandler, useEffect, useState } from 'react'
import SquareSelectOption, { Theme } from '@/components/client/squareSelectOption';
import Link from 'next/link';

type PhotoInputType = {
    onBack?: MouseEventHandler<HTMLDivElement> | null,
    onNext?: MouseEventHandler<HTMLDivElement> | null,
}
const barButtonClassNameFix = 'flex ml-24 h-full w-64 justify-center items-center text-white border-2 border-gray-300 hover:border-white cursor-pointer text-xl rounded-lg'
const BarController = ({ onBack = null, onNext = null }: PhotoInputType) => (
    <div className='w-full h-12 flex items-center mt-24'>
        {onBack && <div onClick={onBack} className={barButtonClassNameFix}>BACK</div>}
        {onNext && <div onClick={onNext} className={barButtonClassNameFix}>NEXT</div>}
    </div>
)

interface Category {
    id: number,
    title: string,
    introduction: string,
}
const categoryList: Category[] = [
    {
        id: 1,
        title: 'personal',
        introduction: 'include personal character, baby and pet',
    },
    {
        id: 2,
        title: 'family',
        introduction: 'include couple, elder and family',
    },
    {
        id: 3,
        title: 'event',
        introduction: 'include wedding, graduation photo and ceremony',
    },
    {
        id: 4,
        title: 'business',
        introduction: 'include property, business and company events',
    },
]
interface Option {
    id: number,
    option: string,
    present: string,
}
const optionList: Option[] = [
    {
        id: 1,
        option: '100 shots, 10 photos',
        present: '',
    },
    {
        id: 2,
        option: '150 shots, 15 photos',
        present: 'present: one photo frame',
    },
    {
        id: 3,
        option: '180 shots, 20 photos',
        present: "present: one 60*60 photo frame with 9 photos, one 24' photo prame",
    },
    {
        id: 4,
        option: '200 shots, 30 photos',
        present: "present: one 60*60 photo frame with 9 photos, one 24' photo prame, one album and two Charm Keychains",
    },
]
// const IsMakingUp = [true, false]
interface Venue {
    id: number,
    name: string,
    place: string | null,
}
const venueList: Venue[] = [
    {
        id: 1,
        name: 'indoor venue 1',
        place: 'address: 1 Edward Street, Brisbane 4000',
    },
    {
        id: 2,
        name: 'indoor venue 2',
        place: 'address: 1 George Street, Brisbane 4000',
    },
    {
        id: 3,
        name: 'outdoor',
        place: null,
    },
]
const PhotoType = ({ onBack, onNext }: PhotoInputType) => {
    const [category, setCategory] = useState<Category | null>(null)
    const [option, setOption] = useState<Option | null>(null)
    const [venue, setVenue] = useState<Venue | null>(null)
    const [customerPlace, setCustomerPlace] = useState<string>('')
    const [isMakingUp, setIsMakingUp] = useState<string>('')
    return (
        <div className='flex flex-col w-full'>
            <div className='flex items-center space-x-8'>
                <h1 className='text-gray-300'>category:</h1>
                <div className='flex flex-wrap space-x-5'>
                    {categoryList.map((object, index) => (
                        <SquareSelectOption key={index}
                            title={object.title}
                            IsSelected={object.id == category?.id}
                            onClick={() => setCategory(object)}
                            theme={Theme.DARK}
                        />
                    ))}
                </div>
            </div>
            <p className='text-gray-300 text-sm ml-24 mt-3'>{category?.introduction}</p>
            <div className='flex items-center space-x-8 mt-12'>
                <h1 className='text-gray-300'>amount:</h1>
                <div className='flex flex-wrap space-x-5'>
                    {optionList.map((object, index) => (
                        <SquareSelectOption key={index}
                            title={object.option}
                            IsSelected={object.id == option?.id}
                            onClick={() => setOption(object)}
                            theme={Theme.DARK}
                        />
                    ))}
                </div>
            </div>
            <p className='text-gray-300 text-sm ml-24 mt-3'>{option?.present}</p>
            <div className='flex items-center space-x-8 mt-12'>
                <h1 className='text-gray-300'>venue:</h1>
                <div className='flex flex-wrap space-x-5'>
                    {venueList.map((object, index) => (
                        <SquareSelectOption key={index}
                            title={object.name}
                            IsSelected={object.id == venue?.id}
                            onClick={() => setVenue(object)}
                            theme={Theme.DARK}
                        />
                    ))}
                </div>
            </div>
            <div className='text-gray-300 text-sm ml-24 mt-3'>
                {venue && (venue?.place || (
                    <div className='w-full flex space-x-5'>
                        <label htmlFor='1-3-customerPlace' className="text-gray-300 text-base">your address:</label>
                        <input
                            className="appearance-none w-1/3 min-w-96 border-b-2 border-gray-500 hover:border-gray-300 focus:border-gray-300 text-base cursor-pointer outline-none text-white bg-transparent "
                            type='input' placeholder='please type your address here...' value={customerPlace} onChange={e => setCustomerPlace(e.target.value)} id='1-3-customerPlace'
                        />
                    </div>
                ))}
            </div>
            <div className='flex items-center space-x-8 mt-12'>
                <h1 className='text-gray-300'>Do you need making up?</h1>
                <div className='flex flex-wrap space-x-5'>
                    <label className='text-white'>
                        <input type='radio' name="isMakingUp" value={'true'} className='mr-1'
                            checked={isMakingUp == 'true'} onChange={() => setIsMakingUp('true')} />
                        YES
                    </label>
                    <label className='text-white'>
                        <input type='radio' name="isMakingUp" value={'false'} className='mr-1'
                            checked={isMakingUp == 'false'} onChange={() => setIsMakingUp('false')} />
                        NO
                    </label>
                </div>
            </div>
            <BarController onBack={onBack} onNext={onNext} />
        </div>
    )
}

type AvailableTimeDataType = {
    date: string,
    shift: string,
    isAvailable: boolean,
}
const getAvailableTime = async () => {
    const date = new Date()
    const result: AvailableTimeDataType[] = []
    for (let index = 0; index < 28; index++) {
        date.setDate(date.getDate() + 1)
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        result.push({
            date: `${year}-${month}-${day}`,
            shift: 'morning',
            isAvailable: false,
        })
        result.push({
            date: `${year}-${month}-${day}`,
            shift: 'afternoon',
            isAvailable: true,
        })
        result.push({
            date: `${year}-${month}-${day}`,
            shift: 'evening',
            isAvailable: false,
        })

    }
    return result
}
const getDataFromDate = (date: string, shift: string, dataset: AvailableTimeDataType[]) =>
    dataset.find((data) => data.date == date && data.shift == shift)
const getDateList = () => {
    const result: string[] = []
    const date = new Date()
    for (let index = 0; index < 28; index++) {
        date.setDate(date.getDate() + 1)
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        result.push(`${year}-${month}-${day}`)
    }
    return result
}
const tableTdClassNameFix = 'w-24 border-2 flex justify-center items-center text-white'
const AppoinmentTime = ({ onBack, onNext }: PhotoInputType) => {
    const [availableTime, setAvailableTime] = useState<AvailableTimeDataType[]>([])
    // const [time, setTime] = useState()
    const dataList: string[] = getDateList()
    // console.log(getDataFromDate(dataList[1], 'morning', availableTime));

    useEffect(() => {
        getAvailableTime().then(async result => {
            setAvailableTime(result)
        })
    }, [])

    return (
        <div className='flex flex-col w-full overflow-x-auto'>
            <div className='flex w-full overflow-x-auto pb-5'>
                <table className='w-full'>
                    <thead className=''>
                        <tr className='flex border-2'>
                            <th className={tableTdClassNameFix}>{'shift'}</th>
                            {dataList.map((date, index) => (
                                <th key={index} className={tableTdClassNameFix}>{date}</th>
                            ))}</tr>
                    </thead>
                    <tbody>
                        <tr className='flex border-2'>
                            <td className={'w-24 border-2 flex justify-center items-center text-white'}>{'morning'}</td>
                            {availableTime && dataList.map((date, index) => (<td key={index} className={tableTdClassNameFix}>{(availableTime.find((data: AvailableTimeDataType) => data.date == date && data.shift == 'morning')?.isAvailable) ? 'yes' : 'no'}</td>))}
                        </tr>
                        <tr className='flex border-2'>
                            <td className={'w-24 border-2 flex justify-center items-center text-white'}>{'afternoon'}</td>
                            {availableTime && dataList.map((date, index) => (<td key={index} className={tableTdClassNameFix}>{(availableTime.find((data: AvailableTimeDataType) => data.date == date && data.shift == 'afternoon')?.isAvailable) ? 'yes' : 'no'}</td>))}
                        </tr>
                        <tr className='flex border-2'>
                            <td className={'w-24 border-2 flex justify-center items-center text-white'}>{'evening'}</td>
                            {availableTime && dataList.map((date, index) => (<td key={index} className={tableTdClassNameFix}>{(availableTime.find((data: AvailableTimeDataType) => data.date == date && data.shift == 'evening')?.isAvailable) ? 'yes' : 'no'}</td>))}
                        </tr>
                        {/* <tr>{dataList.map((date, index) => (<td key={index}>{getDataFromDate(date, 'afternoon', availableTime)?.isAvailable ? 'yes' : 'no'}</td>))} </tr>
                    <tr>{dataList.map((date, index) => (<td key={index}>{getDataFromDate(date, 'evening', availableTime)?.isAvailable ? 'yes' : 'no'}</td>))} </tr> */}

                    </tbody>
                </table>
            </div>
            <div> {getDataFromDate(dataList[1], 'morning', availableTime) ? 'no' : 'yes'}</div>
            <BarController onBack={onBack} onNext={onNext} />

        </div>
    )
}

type PriceCardInputType = {
    onSelect?: MouseEventHandler<HTMLDivElement> | null,
    card: CardType,
}
type CardType = {
    id: string,
    name: string,
    price: number,
    imgSrc: string,
    includings: string[],

}
const PriceCard = ({ card }: PriceCardInputType) => {
    return (
        <div className='relative w-[400px] h-[600px] '>
            <img className='w-full rounded-lg' src={card.imgSrc} />
            <div className='absolute top-0 left-0 w-[400px] h-[600px] flex flex-col bg-white/60 items-center text-black shadow-lg rounded-xl hover:shadow-2xl hover:bg-white/40 transition duration-200' >
                <h1 className=' text-3xl  mt-16'>{card.name}</h1>
                <h1 className='text-5xl font-bold mt-2'>{'$ ' + card.price}</h1>
                <ul className=' mt-40'>
                    {card.includings.map((content, index) => (
                        <li key={index} className='text-base font-bold'>{content}</li>
                    ))}
                </ul>
                <Link href={'/item/' + card.id} className='w-64 h-12 mt-6 flex font-bold justify-center items-center text-black border-2 border-gray-700 hover:border-black hover:font-extrabold'>BOOK NOW</Link>

            </div>
        </div>
    )
}
export {
    PhotoType,
    AppoinmentTime,
    PriceCard,
}
