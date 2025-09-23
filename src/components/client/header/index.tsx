'use client'
import Link from 'next/link'
import { BsPerson } from "react-icons/bs"
import { Comforter } from 'next/font/google'

import routes from '@/constant/routes'
import { usePathname, useRouter } from 'next/navigation'
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

  return (
    <div className={'fixed w-full z-10'}>
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
