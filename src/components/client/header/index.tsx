'use client'
import Link from 'next/link'
import { BsPerson } from "react-icons/bs"
import { Comforter } from 'next/font/google'

import routes from '@/constant/routes'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'
// Juptier Photography Studio

const comforter = Comforter({
  subsets: ["latin"],
  weight: '400',
})

const getTextColor = (path: string) => {
  for (let index = 0; index < routes.length; index++) {
    if (routes[index].href.includes(path)) {
      return routes[index].text_color
    }
  }
  return ' text-white'
}
const style1 = ' border-b-2 transition duration-700 hover:border-inherit hover:transition hover:duration-700'

const Header = () => {
  const path = usePathname()
  const router = useRouter()
  // const textColor = ' text-black'
  const textColor = getTextColor(path)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      const header = document.getElementById('header')
      console.log(window.pageYOffset)
      if (window.pageYOffset >= 200) {  //if语句判断window页面Y方向的位移是否大于或者等于导航栏的height像素值
        header?.classList.add('bg-black/20');  //当Y方向位移大于80px时，定义的变量增加一个新的样式'header_bg'
      } else {
        header?.classList.remove('bg-black/20'); //否则就移除'header_bg'样式
      }
    }, true)
  }, [])
  return (
    <div className={'fixed w-full z-10'} id='header'>
      <div className='flex justify-between container mx-auto mt-8 mb-8 items-center'>
        <div className={comforter.className}>
          <Link className={'text-5xl font-bold cursor-pointer ' + textColor} href={'/'}>Juptier</Link>
        </div>
        <div className={'flex text-base space-x-10 tracking-wider'}>
          {routes.map((route, index) => (
            <div key={index} className={(path.includes(route.href) ? 'border-inherit' : 'border-transparent') + style1 + textColor}>
              <Link href={route.href} >{route.title}</Link>
            </div>
          ))}
        </div>
        <BsPerson className={'cursor-pointer size-8 border-transparent ' + style1 + textColor} onClick={() => router.push('/personal')} />
      </div>
    </div>
  )
}



export { Header }
