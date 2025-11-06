'use client'

import { useContext, useEffect, useRef, useState } from "react"
import { ThemeContext } from "../Context"
import { personalPhotographySectionlist, serviceSectionlist } from "@/constant/shopPageContent"
import Image from 'next/image';
import TextInput1 from "@/components/admin/TextInput/TextInput1";
import Button1 from "@/components/admin/Button/Button1";
import TextInput3 from "@/components/admin/TextInput/TextInput3";


const Service = () => {
  const [currentTab, setCurrentTab] = useState<number>(1)

  return (
    <div className='w-full h-full flex'>
      <ul className=" mt-3">
        {ServiceTabs.map((tab, index) => (
          <li
            className={'m-3 w-12 h-10 rounded-md cursor-pointer flex ' + (currentTab == tab ? 'bg-white/15 ' : 'hover:bg-white/15')}
            key={index}
            onClick={() => setCurrentTab(tab)}
          >
            <p className="text-base text-white word-wrap m-auto">{tab}</p>
          </li>
        ))}
      </ul>
      <div className="flex-1 flex h-full"><ServiceTab tab={currentTab} /></div>
    </div>
  )
}

const ServiceTabs = [1, 2]

const ServiceTab = ({ tab }: { tab: number }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const theme = useContext(ThemeContext);

  // const [imageFile, setImageFile] = useState<Blob|null>(null)
  const [background, setBackground] = useState<string | null>(null)
  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')
  const [ourAdvantages, setOurAdvantages] = useState<OurAdvantageType[]>([])

  useEffect(() => {
    const serviceSrc = serviceSectionlist[tab - 1]
    if (serviceSrc) {
      setBackground(serviceSrc.imgSrc)
      setTitle(serviceSrc.title)
      setContent(serviceSrc.content)
      setOurAdvantages(personalPhotographySectionlist)
    }
  }, [tab])

  const handleOurAdvantageOnChange = (OurAdvantage: OurAdvantageType) => {
    const newOurAdvantages = []
    for (let index = 0; index < ourAdvantages.length; index++) {
      if (OurAdvantage.id == ourAdvantages[index].id) {
        newOurAdvantages.push(OurAdvantage)
      } else {
        newOurAdvantages.push(ourAdvantages[index])
      }
    }
    setOurAdvantages(newOurAdvantages)
  }

  const handleInputOnClick = (files: FileList | null) => {
    if (files && files[0]) {
      const ImageUrl = URL.createObjectURL(files[0])
      setBackground(ImageUrl)
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
      <p className="text-xl text-white mt-4">Background</p>
      {background && <Image src={background} alt='' width={800} height={800} />}
      <input
        onChange={e => handleInputOnClick(e.target.files)}
        className="mt-2"
        multiple={false} ref={fileInputRef} type='file'
      />
      <div className={"flex-1 flex flex-col p-2 " + theme}>
        <TextInput1 label={'title'} value={title} OnChange={setTitle} classname='mt-4 w-full' />
        <p className="text-xl text-white mt-4">Content</p>
        <textarea
          className="w-full h-24 bg-transparent border-2 border-gray-300 rounded-lg text-white text-base"
          value={content} onChange={e => setContent(e.target.value)}
        />

        <p className="text-xl text-white mt-12">Our Advantages</p>
        <ul className="w-full space-y-4">
          {ourAdvantages.map((ourAdvantage, index) => (
            <OurAdvantageTab ourAdvantage={ourAdvantage} onChange={handleOurAdvantageOnChange} key={index} />
          ))}
        </ul>
        <div className="flex justify-between w-1/3 h-12 px-4 my-4 ">
          <Button1 title={'Save'} onClick={handleSaveOnClick} />
          <Button1 title={'Reset'} onClick={handleResetOnClick} />
          <Button1 title={'Clear'} onClick={handleClearOnClick} />
        </div>
      </div>
    </div>
  )
}


const OurAdvantageTab = (
  { ourAdvantage, onChange }:
    { ourAdvantage: OurAdvantageType, onChange: (OurAdvantage: OurAdvantageType) => void }
) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputOnClick = (files: FileList | null) => {
    if (files && files[0]) {
      const ImageUrl = URL.createObjectURL(files[0])
      onChange({
        ...ourAdvantage,
        imgSrc: ImageUrl,
      })
    }
  }
  return (
    <li className='w-full flex p-4 space-x-4'>
      {ourAdvantage.layout == 'ImageRight' ?
        <>
          <div className="flex flex-col w-96 justify-center">
            <TextInput3 label={'title'} value={ourAdvantage.title}
              OnChange={(text: string) => onChange({ ...ourAdvantage, title: text, })} classname='w-full' />
            <p className="text-xl text-white mt-4">Content</p>
            <textarea
              className="w-full h-24 bg-transparent border-2 border-gray-300 rounded-lg text-white text-base"
              value={ourAdvantage.content} onChange={e => onChange({ ...ourAdvantage, content: e.target.value, })}
            />
          </div>
          <div className="flex flex-col flex-1">
            <Image src={ourAdvantage.imgSrc} alt='' width={400} height={400} />
            <input
              onChange={e => handleInputOnClick(e.target.files)}
              className="mt-2"
              multiple={false} ref={fileInputRef} type='file'
            />
          </div>
        </>
        :
        <>
          <div className="flex flex-col ">
            <Image src={ourAdvantage.imgSrc} alt='' width={400} height={400} />
            <input
              onChange={e => handleInputOnClick(e.target.files)}
              className="mt-2"
              multiple={false} ref={fileInputRef} type='file'
            />
          </div>
          <div className="flex flex-col w-96 justify-center">
            <TextInput3 label={'title'} value={ourAdvantage.title}
              OnChange={(text: string) => onChange({ ...ourAdvantage, title: text, })} classname='w-full' />
            <p className="text-xl text-white mt-4">Content</p>
            <textarea
              className="w-full h-24 bg-transparent border-2 border-gray-300 rounded-lg text-white text-base"
              value={ourAdvantage.content} onChange={e => onChange({ ...ourAdvantage, content: e.target.value, })}
            />
          </div>
        </>
      }
    </li>
  )
}

type OurAdvantageType = {
  id: number,
  imgSrc: string,
  title: string,
  content: string,
  layout: string,
}

export default Service