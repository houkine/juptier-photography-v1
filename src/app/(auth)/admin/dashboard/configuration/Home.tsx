'use client'

import Button1 from "@/components/admin/Button/Button1";
import TextInput1 from "@/components/admin/TextInput/TextInput1";
import HomeImageSrc from "@/constant/homeImageSrc"
import Image from 'next/image';
import { useContext, useEffect, useRef, useState } from "react"
import { ThemeContext } from "../Context";

const Home = () => {
  const [currentTab, setCurrentTab] = useState<number>(1)

  return (
    <div className='w-full h-full flex '>
      <ul className=" mt-3">
        {HomeTabs.map((tab, index) => (
          <li
            className={'m-3 w-12 h-10 rounded-md cursor-pointer flex ' + (currentTab == tab ? 'bg-white/15 ' : 'hover:bg-white/15')}
            key={index}
            onClick={() => setCurrentTab(tab)}
          >
            <p className="text-base text-white word-wrap m-auto">{tab}</p>
          </li>
        ))}
      </ul>
      <div className="flex-1 flex h-full"><HomeTab tab={currentTab} /></div>
    </div>
  )
}

const HomeTabs = [1, 2, 3]

const HomeTab = ({ tab }: { tab: number }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const theme = useContext(ThemeContext);

  // const [imageFile, setImageFile] = useState<Blob|null>(null)
  const [image, setImage] = useState<string | null>(null)
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [button, setButton] = useState<string>('')

  useEffect(() => {
    const imageSrc = HomeImageSrc.find(src => src.id == tab)
    if (imageSrc) {
      setImage(imageSrc.src)
      setTitle(imageSrc.content1)
      setDescription(imageSrc.content2)
      setButton(imageSrc.href_content)
    }
  }, [tab])

  const handleInputOnClick = (files: FileList | null) => {
    if (files && files[0]) {
      const ImageUrl = URL.createObjectURL(files[0])
      setImage(ImageUrl)
    }
  }
  const handleSaveOnClick = (): void => {
    alert('save button on click')
  }
  const handleResetOnClick = (): void => {
    alert('reset button on click')
  }
  const handleClearOnClick = (): void => {
    alert('clear button on click')
  }

  return (
    <div className='w-full h-full flex flex-col overflow-auto'>
      {image && <Image src={image} alt='' width={800} height={800} />}
      <input
        onChange={e => handleInputOnClick(e.target.files)}
        className="mt-2"
        multiple={false} ref={fileInputRef} type='file'
      />
      <div className={"flex-1 h-full flex flex-col p-2 " + theme}>
        <TextInput1 label={'title'} value={title} OnChange={setTitle} classname='mt-4 w-full' />
        <p className="text-xl text-white mt-4">Description</p>
        <textarea
          className="w-full h-24 bg-transparent border-2 border-gray-300 rounded-lg text-white text-base"
          value={description} onChange={e => setDescription(e.target.value)}
        />
        <TextInput1 label={'button'} value={button} OnChange={setButton} classname='mt-4 wfull' />

        <div className="flex justify-between w-1/3 h-12 px-4 my-4 ">
          <Button1 title={'Save'} onClick={handleSaveOnClick} />
          <Button1 title={'Reset'} onClick={handleResetOnClick} />
          <Button1 title={'Clear'} onClick={handleClearOnClick} />
        </div>
      </div>
    </div>
  )
}
export default Home