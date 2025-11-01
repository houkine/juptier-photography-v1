'use client'

import { useState } from "react"
import Image from 'next/image';

const Template = () => {
  const [template, setTemplate] = useState<number>(1)
  return (
    <div className='w-full h-full flex flex-col'>
      <div className='w-full flex h-16 '>
        <p className="text-2xl mt-4" title="only we can see this">Template:&nbsp;</p>
        <span
          className={template == 1 ? SpanSelectedClassname : SpanUnSelectedClassname}
          onClick={() => template != 1 && setTemplate(1)}
        >
          {'1'}
        </span>
        <span
          className={template == 2 ? SpanSelectedClassname : SpanUnSelectedClassname}
          onClick={() => template != 2 && setTemplate(2)}
        >
          {'2'}
        </span>
        <span
          className={template == 3 ? SpanSelectedClassname : SpanUnSelectedClassname}
          onClick={() => template != 3 && setTemplate(3)}
        >
          {'3'}
        </span>
      </div>
      <Template1 />
    </div>
  )
}


const Template1 = () => {
  return (
    <div className="w-full flex space-x-2">
      <div className="flex flex-col space-y-2">
        <Image src={'/images/gallery_image/2：3.jpg'} alt='' width={300} height={450} />
        <Image src={'/images/gallery_image/2：3.jpg'} alt='' width={300} height={450} />
      </div>
      <div className="flex flex-col space-y-2">
        <Image src={'/images/gallery_image/3：2.jpg'} alt='' width={300} height={200} />
        <Image src={'/images/gallery_image/2：3.jpg'} alt='' width={300} height={450} />
        <Image src={'/images/gallery_image/3：2.jpg'} alt='' width={300} height={200} />
      </div>
      <div className="flex flex-col space-y-2">
        <Image src={'/images/gallery_image/3：2.jpg'} alt='' width={300} height={200} />
        <Image src={'/images/gallery_image/3：2.jpg'} alt='' width={300} height={200} />
        <Image src={'/images/gallery_image/2：3.jpg'} alt='' width={300} height={450} />
      </div>
    </div>
  )
}
const SpanUnSelectedClassname = 'w-16 rounded-md cursor-pointer hover:bg-white/15 text-lg text-white flex items-center justify-center '
const SpanSelectedClassname = 'w-16 rounded-md cursor-pointer bg-white/15 text-lg text-white flex items-center justify-center '
export default Template