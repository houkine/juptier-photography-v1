'use client'
import React, { useContext, useEffect, useState } from 'react'
import { BsPlusCircleFill } from 'react-icons/bs'
import { ThemeContext } from '../Context';
import TextInput1 from '@/components/admin/TextInput/TextInput1';
import NumberInput from '@/components/admin/TextInput/NumberInput';
import AlbumSection from './AlbumSection';

const Page = () => {
    const theme = useContext(ThemeContext);

    const [themeList, setThemeList] = useState<ThemeType[]>([])
    const [currentTheme, setCurrentTheme] = useState<ThemeType | null>(null)
    const [isAddingTheme, setIsAddingTheme] = useState<boolean>(false)

    const [title, setTitle] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [sequence, setSequence] = useState<number>(0)

    useEffect(() => {
        setThemeList(SortThemeList(ThemeList))
    }, [])

    const AddTheme = () => {
        const newTheme = {
            id: 'default',
            title: '',
            description: '',
            coverImage: '',
            sequence: themeList.length,
        }
        setCurrentTheme(newTheme)
        setIsAddingTheme(true)
    }
    const HandleThemeOnClick = (theme: ThemeType): void => {
        if (theme != currentTheme) {
            setCurrentTheme(theme)
            setIsAddingTheme(false)

        }
    }
    return (
        <div className='w-full h-full flex'>
            <ul className='w-48 overflow-y-auto'>
                {themeList.map((theme, index) =>
                    <li
                        className={'flex m-2 p-2 rounded-md cursor-pointer ' + (currentTheme == theme ? 'bg-white/15 ' : 'hover:bg-white/15')}
                        key={index}
                        onClick={() => HandleThemeOnClick(theme)}
                    >
                        <p className="text-lg text-white word-wrap ">{theme.title}</p>
                    </li>
                )}
                <li
                    className={'flex m-2 p-2 rounded-md cursor-pointer border-2 border-white/15 ' + (isAddingTheme ? 'bg-white/15 ' : 'hover:bg-white/15')}
                    onClick={AddTheme}
                >
                    <BsPlusCircleFill size={20} className='m-auto' />
                </li>
            </ul>

            <div className={'flex-1 h-full flex flex-col p-3 rounded-lg overflow-y-auto ' + theme}>
                <p className='text-xl text-white'>Details</p>
                <TextInput1 label={'title'} value={title} OnChange={setTitle} classname='mt-2 w-full' />
                <NumberInput label={'sequence'} value={sequence} OnChange={setSequence} classname='mt-2 w-full' />
                <p className="text-2xl mt-4" title="only we can see this">description</p>
                <textarea
                    className="w-full h-24 bg-transparent border-2 border-gray-300 rounded-lg"
                    value={description} onChange={e => setDescription(e.target.value)}
                />
                <p className='text-xl text-white mt-4'>Albums</p>
                <AlbumSection />
            </div>
        </div>
    )
}

const SortThemeList = (themeList: ThemeType[]): ThemeType[] => {
    const newThemeList = [...themeList]
    newThemeList.sort((a: ThemeType, b: ThemeType) => a.sequence - b.sequence)
    return newThemeList
}
type ThemeType = {
    id: string,
    title: string,
    description: string,
    coverImage: string,
    sequence: number,
}
const ThemeList: ThemeType[] = [
    {
        id: '1',
        title: 'NATURE',
        description: 'this is nature theme',
        coverImage: '',
        sequence: 1,
    },
    {
        id: '2',
        title: 'CHARACTER',
        description: 'this is character theme',
        coverImage: '',
        sequence: 2,
    },
    {
        id: '3',
        title: 'EVENT',
        description: 'this is event theme',
        coverImage: '',
        sequence: 3,
    },
    {
        id: '4',
        title: 'BUSINESS',
        description: 'this is business theme',
        coverImage: '',
        sequence: 4,
    },
]
export default Page
