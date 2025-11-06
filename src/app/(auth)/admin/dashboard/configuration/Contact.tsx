'use client'

import Button1 from "@/components/admin/Button/Button1";
import TextInput1 from "@/components/admin/TextInput/TextInput1";
import Image from 'next/image';
import { useContext, useEffect, useRef, useState } from "react"
import { ThemeContext } from "../Context";

const Contact = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const theme = useContext(ThemeContext);

  const [background, setBackground] = useState<string | null>(null)
  const [address, setAddress] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [phone, setPhone] = useState<string>('')

  useEffect(() => {
    handleResetOnClick()
  }, [])
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
    setBackground(Background)
    setAddress(Address)
    setEmail(Email)
    setPhone(Phone)
  }
  const handleClearOnClick = (): void => {
    setBackground(null)
    setAddress('')
    setEmail('')
    setPhone('')
  }
  return (
    <div className='w-full h-full flex flex-col overflow-y-auto '>
      <p className="text-xl text-white mt-4">Background</p>

      {background && <Image src={background} alt='' width={800} height={800} />}
      <input
        onChange={e => handleInputOnClick(e.target.files)}
        className="mt-2"
        multiple={false} ref={fileInputRef} type='file'
      />

      <div className={"flex-1 h-full flex flex-col p-2 " + theme}>
        <TextInput1 label={'Address'} value={address} OnChange={setAddress} classname='mt-4 w-full' />
        <TextInput1 label={'Email'} value={email} OnChange={setEmail} classname='mt-4 w-full' />
        <TextInput1 label={'Phone'} value={phone} OnChange={setPhone} classname='mt-4 w-full' />

        <div className="flex justify-between w-1/3 h-12 px-4 my-4 ">
          <Button1 title={'Save'} onClick={handleSaveOnClick} />
          <Button1 title={'Reset'} onClick={handleResetOnClick} />
          <Button1 title={'Clear'} onClick={handleClearOnClick} />
        </div>
      </div>
    </div>
  )
}

const Background = '/images/appointment_image/bgimg.jpg'
const Address = 'Gold Coast, QLD'
const Email = 'Email: momo@juptierphotography.com'
const Phone = '0402123456'


export default Contact