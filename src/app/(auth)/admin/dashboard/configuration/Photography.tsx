'use client'

import { useContext, useEffect, useRef, useState } from "react"

import Image from 'next/image';
import Button1 from "@/components/admin/Button/Button1";
import TextInput1 from "@/components/admin/TextInput/TextInput1";
import { ThemeContext } from "../Context";
import NumberInput from "@/components/admin/TextInput/NumberInput";
import { BsPlusCircleFill, BsXCircleFill } from "react-icons/bs";
import TextInput3 from "@/components/admin/TextInput/TextInput3";
import NumberInput2 from "@/components/admin/TextInput/NumberInput2";

const Photography = () => {
  // const theme = useContext(ThemeContext);
  const [sessionList, setSessionList] = useState<SessionType[]>([])
  const [currentSession, setCurrentSession] = useState<SessionType | null>(null)

  useEffect(() => {
    setSessionList(SessionList)
  }, [])



  return (
    <div className='w-full h-full flex overflow-y-auto '>
      <ul className='w-32 overflow-y-auto'>
        {sessionList.map((session, index) =>
          <li
            className={'flex m-2 p-2 rounded-md cursor-pointer ' + ((currentSession && currentSession.id == session.id) ? 'bg-white/15 ' : 'hover:bg-white/15')}
            key={index}
            onClick={() => setCurrentSession(session)}
          >
            <p className="text-base text-white word-wrap ">{session.name}</p>
          </li>
        )}
      </ul>
      {currentSession && <div className="flex-1 flex h-full"><SessionTab session={currentSession} /></div>}

    </div>
  )
}

const SessionList: SessionType[] = [
  {
    id: 0,
    name: 'LITE',
    originalPrice: 200,
    phototypeList: [
      {
        name: 'portrait',
        price: 200,
      },
      {
        name: 'individual indoor',
        price: 200,
      },
      {
        name: 'individual outdoor',
        price: 220,
      },
    ],
    description: 'You’ll enjoy a fun-filled 90 minute photoshoot with refreshments (e.g. coffee, bubbles). A truly fantastic family bonding experience our guests remember forever!\r\n\r\nYou’ll then enjoy a cinematic viewing of your photoshoot, where you’ll get to choose your favourite image to be beautifully retouched, framed and sent to you with our compliments.\r\n\r\nIf you’d like to buy more photos, we have a wide range of options to chose from including framed artwork and digital collections with prices starting from as little as $395.\r\n\r\nDigital files are sold in collections and range from $75 – $199 per image depending on which collection you choose.',
    coverImageSrc: '/images/shop_image/demo1.jpg',
  },
  {
    id: 1,
    name: 'PERSONAL',
    originalPrice: 300,
    phototypeList: [
      {
        name: 'portrait',
        price: 300,
      },
      {
        name: 'individual indoor',
        price: 300,
      },
      {
        name: 'individual outdoor',
        price: 350,
      },
    ],
    description: 'You’ll enjoy a fun-filled 90 minute photoshoot with refreshments (e.g. coffee, bubbles). A truly fantastic family bonding experience our guests remember forever!\r\n\r\nYou’ll then enjoy a cinematic viewing of your photoshoot, where you’ll get to choose your favourite image to be beautifully retouched, framed and sent to you with our compliments.\r\n\r\nIf you’d like to buy more photos, we have a wide range of options to chose from including framed artwork and digital collections with prices starting from as little as $395.\r\n\r\nDigital files are sold in collections and range from $75 – $199 per image depending on which collection you choose.',
    coverImageSrc: '/images/shop_image/demo2.jpg',
  },
  {
    id: 2,
    name: 'EVENT',
    originalPrice: 800,
    phototypeList: [
      {
        name: 'wedding',
        price: 1000,
      },
      {
        name: 'party',
        price: 800,
      },
      {
        name: 'others',
        price: 800,
      },
    ],
    description: 'You’ll enjoy a fun-filled 90 minute photoshoot with refreshments (e.g. coffee, bubbles). A truly fantastic family bonding experience our guests remember forever!\r\n\r\nYou’ll then enjoy a cinematic viewing of your photoshoot, where you’ll get to choose your favourite image to be beautifully retouched, framed and sent to you with our compliments.\r\n\r\nIf you’d like to buy more photos, we have a wide range of options to chose from including framed artwork and digital collections with prices starting from as little as $395.\r\n\r\nDigital files are sold in collections and range from $75 – $199 per image depending on which collection you choose.',
    coverImageSrc: '/images/shop_image/demo3.jpg',
  },
]
type SessionType = {
  id: number,
  name: string,
  originalPrice: number,
  phototypeList: PhotoTypeType[],
  description: string,
  coverImageSrc: string,
}
type PhotoTypeType = {
  name: string,
  price: number,
}

const SessionTab = ({ session }: { session: SessionType }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const theme = useContext(ThemeContext);

  const [coverImage, setCoverImage] = useState<string | null>(null)
  const [name, setName] = useState<string>('')
  const [originalPrice, setOriginalPrice] = useState<number>(0)
  const [description, setDescription] = useState<string>('')
  const [typeList, setTypeList] = useState<PhotoTypeType[]>([])

  useEffect(() => {
    setCoverImage(session.coverImageSrc)
    setName(session.name)
    setOriginalPrice(session.originalPrice)
    setDescription(session.description)
    setTypeList(session.phototypeList)
  }, [session])

  const handleInputOnClick = (files: FileList | null) => {
    if (files && files[0]) {
      const ImageUrl = URL.createObjectURL(files[0])
      setCoverImage(ImageUrl)
    }
  }
  const handleTypeListOnChange = (newType: PhotoTypeType, index: number) =>
    setTypeList(
      typeList.map((type, _index) => index == _index ? newType : type)
    )
  const handleTypeListOnDelete = (index: number) =>
    setTypeList(
      typeList.filter((type, _index) => index != _index)
    )
  const handleTypeListOnAdd = () =>
    setTypeList(
      [...typeList, { name: '', price: 0, }]
    )
  const handleSaveOnClick = (): void => {
    alert('save button on click')
  }
  const handleResetOnClick = (): void => {
    setCoverImage(session.coverImageSrc)
    setName(session.name)
    setOriginalPrice(session.originalPrice)
    setDescription(session.description)
    setTypeList(session.phototypeList)
  }
  const handleClearOnClick = (): void => {
    setCoverImage(null)
    setName('')
    setOriginalPrice(0)
    setDescription('')
    setTypeList([])
  }
  return (
    <div className='w-full h-full flex flex-col overflow-auto'>
      {coverImage && <Image src={coverImage} alt='' width={800} height={800} />}
      <input
        onChange={e => handleInputOnClick(e.target.files)}
        className="mt-2"
        multiple={false} ref={fileInputRef} type='file'
      />
      <div className={"flex-1 flex flex-col p-2 " + theme}>
        <TextInput1 label={'Session name'} value={name} OnChange={setName} classname='mt-4 w-full' />
        <NumberInput label={'Original price'} value={originalPrice} OnChange={setOriginalPrice} classname='mt-4 w-full' />
        <p className="text-xl text-white mt-4">Description</p>
        <textarea
          className="w-full h-24 bg-transparent border-2 border-gray-300 rounded-lg text-white text-base"
          value={description} onChange={e => setDescription(e.target.value)}
        />
        <p className="text-xl text-white mt-4">Type List:</p>
        <ul className="space-y-2 mt-2 border-2 border-gray-300 p-2 rounded-lg " >
          {typeList.map((type, index) => (
            <li key={index} className="flex space-x-2 w-auto" >
              <TextInput3 label={'Type'} value={type.name} OnChange={text => handleTypeListOnChange({ ...type, name: text }, index)} classname='mt-4 w-full' />
              <NumberInput2 label={'Price'} value={type.price} OnChange={text => handleTypeListOnChange({ ...type, price: text }, index)} classname='mt-4 w-full' />
              <BsXCircleFill size={40} className='ml-4 cursor-pointer my-auto' title='delete' onClick={() => handleTypeListOnDelete(index)} />

            </li>
          ))}
          <li className="flex items-center justify-center w-full bg-white/10 rounded-lg p-4 cursor-pointer mt-2 hover:bg-white/20" onClick={handleTypeListOnAdd} >
            <BsPlusCircleFill size={25} className=" text-white" />
            <p className="ml-2 text-lg text-white">Add new type</p>
          </li>
        </ul>

        <div className="flex w-1/3 h-12 px-4 my-4 space-x-4">
          <Button1 title={'Save'} onClick={handleSaveOnClick} />
          <Button1 title={'Reset'} onClick={handleResetOnClick} />
          <Button1 title={'Clear'} onClick={handleClearOnClick} />
        </div>
      </div>
    </div>
  )

}
export default Photography