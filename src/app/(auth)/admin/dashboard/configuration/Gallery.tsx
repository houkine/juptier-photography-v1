'use client'

import Button1 from "@/components/admin/Button/Button1";
import Image from 'next/image';
import { useEffect, useRef, useState } from "react"

const Gallery = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<string | null>(null)

  useEffect(() => {
    setImage(Background)
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
    setImage(Background)
  }
  const handleClearOnClick = (): void => {
    setImage(null)
  }
  return (
    <div className='w-full h-full flex flex-col overflow-y-auto '>
      <p className="text-xl text-white mt-4">Background</p>

      {image && <Image src={image} alt='' width={800} height={800} />}
      <input
        onChange={e => handleInputOnClick(e.target.files)}
        className="mt-2"
        multiple={false} ref={fileInputRef} type='file'
      />
      <div className="flex justify-between w-1/3 h-12 px-4 my-4 ">
        <Button1 title={'Save'} onClick={handleSaveOnClick} />
        <Button1 title={'Reset'} onClick={handleResetOnClick} />
        <Button1 title={'Clear'} onClick={handleClearOnClick} />
      </div>
    </div>
  )
}

const Background = '/images/admin_image/image2.jpg'


export default Gallery