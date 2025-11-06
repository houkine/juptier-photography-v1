'use client'

import Button1 from "@/components/admin/Button/Button1";
import TextInput1 from "@/components/admin/TextInput/TextInput1";
import Image from 'next/image';
import { useContext, useEffect, useRef, useState } from "react"
import { ThemeContext } from "../Context";

const About = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const theme = useContext(ThemeContext);

  const [image, setImage] = useState<string | null>(null)
  const [title, setTitle] = useState<string>('')
  const [workContent, setWorkContent] = useState<string>('')
  const [contactContent, setContactContent] = useState<string>('')

  useEffect(() => {
    handleResetOnClick()
  }, [])
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
    setImage(ImageSrc)
    setTitle(Title)
    setWorkContent(WorkContent)
    setContactContent(ContactContent)
  }
  const handleClearOnClick = (): void => {
    setImage(null)
  }
  return (
    <div className='w-full h-full flex flex-col overflow-y-auto '>
      <p className="text-xl text-white mt-4">Image</p>

      {image && <Image src={image} alt='' width={800} height={800} />}
      <input
        onChange={e => handleInputOnClick(e.target.files)}
        className="mt-2"
        multiple={false} ref={fileInputRef} type='file'
      />

      <div className={"flex-1 h-full flex flex-col p-2 " + theme}>
        <TextInput1 label={'title'} value={title} OnChange={setTitle} classname='mt-4 w-full' />
        <p className="text-xl text-white mt-4">Work Content</p>
        <textarea
          className="w-full h-24 bg-transparent border-2 border-gray-300 rounded-lg text-white text-base"
          value={workContent} onChange={e => setWorkContent(e.target.value)}
        />
        <p className="text-xl text-white mt-4">Contact Content</p>
        <textarea
          className="w-full h-24 bg-transparent border-2 border-gray-300 rounded-lg text-white text-base"
          value={contactContent} onChange={e => setContactContent(e.target.value)}
        />

        <div className="flex justify-between w-1/3 h-12 px-4 my-4 ">
          <Button1 title={'Save'} onClick={handleSaveOnClick} />
          <Button1 title={'Reset'} onClick={handleResetOnClick} />
          <Button1 title={'Clear'} onClick={handleClearOnClick} />
        </div>
      </div>
    </div>
  )
}

const ImageSrc = '/images/about_image/image1.jpg'
const Title = 'We are Gold Coast based Photography team & Creative with passion for design'
const WorkContent = 'We take pohots, editing them in different ways. We have several templates for them. After that, we can send them directly, or make photo frames, calendar ect.'
const ContactContent = 'We take pohots, editing them in different ways. We have several templates for them. After that, we can send them directly, or make photo frames, calendar ect.'


export default About