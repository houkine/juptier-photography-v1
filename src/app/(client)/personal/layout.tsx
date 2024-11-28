"use client"
import Image from 'next/image'
import SectionSelector from './sectionSelector';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

const ClientLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const router = useRouter()
  let pathname = usePathname()

  return (
    <div className="bg-[url('/images/user_image/image1.png')] bg-cover h-screen w-screen flex">
      <div className='w-full h-full bg-black/50 overflow-y-auto flex justify-center'>
        <div className='container flex mt-48 pb-20'>
          <div className='flex flex-col w-1/5 items-center animate-fadeIn_personalSectionContent'>
            <Image src={'/images/user_image/avatatr1.jpg'} alt='' width={100} height={100} className='rounded-full mt-12' />
            <div className='w-full h-12' />
            <SectionSelector title={'PROFILE'} status={pathname.endsWith('personal')} onClick={() => router.push('/personal')} />
            <SectionSelector title={'CART'} status={pathname.endsWith('cart')} onClick={() => router.push('/personal/cart')} />
            <SectionSelector title={'ORDER'} status={pathname.endsWith('order')} onClick={() => router.push('/personal/order')} />
            <SectionSelector title={'ALBUM'} status={pathname.endsWith('album')} onClick={() => router.push('/personal/album')} />
            <div className='w-2/3 h-6 border-b-2 border-black/50' />
            <div className='w-2/3 h-6' />
            <Link href={'/user/signin'} className='w-32 h-12 flex justify-center items-center cursor-pointer text-gray-200 text-xl hover:text-white hover:font-bold' >LOG OUT</Link>
          </div>
          <div className='flex flex-grow '>{children}</div>
        </div>
      </div>
    </div>
  )
}
export default ClientLayout