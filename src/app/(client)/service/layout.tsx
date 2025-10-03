"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { serviceSectionlist } from "@/constant/shopPageContent";

const getInfo = (path: string) => {
    for (let index = 0; index < serviceSectionlist.length; index++) {
        if (path.endsWith(serviceSectionlist[index].href_endswith)) {
            return serviceSectionlist[index]
        }
    }
    return serviceSectionlist[0]
}
const Layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const pathname = usePathname()
    // const router = useRouter()
    const section = getInfo(pathname)
    return (
        <div className="w-full flex bg-white flex-col overflow-y-auto overflow-x-hidden scroll-smooth">
            <div className=' w-full flex flex-col' id='1'>
                <img src={section.imgSrc} className='w-screen h-screen' key={pathname} />
                <div className='flex flex-col -mt-72 ml-24'>
                    <div className="flex  space-x-10">
                        <Link href={'/service/personal#1'}
                            className={pathname.endsWith('/service/personal') ? linkSelectedClassNameFix : linkUnSelectedClassNameFix}
                        >
                            PERSONAL PHOTOGRAPHY
                        </Link>
                        <Link href={'/service/photo-related#1'}
                            className={pathname.endsWith('/service/photo-related') ? linkSelectedClassNameFix : linkUnSelectedClassNameFix}
                        >
                            PHOTO-RELATED PRODUCTS
                        </Link>
                    </div>
                    <div className='flex flex-col mt-10'>
                        <h1 className='text-4xl tracking-wider text-white'>{section.title}</h1>
                        <p className='text-xl italic text-white/50 mt-6'>{section.content}</p>
                        <div className='flex space-x-5'>
                            <Link href={section.link_more} className='w-64 h-12 mt-6 flex justify-center items-center text-white/30 hover:text-white border-2 border-white/30 hover:border-white'>MORE</Link>
                            <Link href={section.link_book} className='w-64 h-12 mt-6 flex justify-center items-center text-white/30 hover:text-white border-2 border-white/30 hover:border-white'>BOOK</Link>
                        </div>
                    </div>
                </div>
            </div>
            {children}
        </div>
    );
}

const linkSelectedClassNameFix = 'text-white text-lg cursor-pointer text-wrap border-b-2 border-white/50'
const linkUnSelectedClassNameFix = 'text-white/30 text-lg cursor-pointer hover:text-white'
export default Layout