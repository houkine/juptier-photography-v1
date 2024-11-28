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
        <div className="h-screen w-screen flex bg-gradient-to-b from-black to-black/50 flex-col overflow-y-auto overflow-x-hidden scroll-smooth">
            <div className='relative w-full flex' id='1'>
                <img src={section.imgSrc} className='w-screen h-screen animate-fadeIn_shopSectionContent' key={pathname} />
                <div className='absolute inset-0 w-screen h-screen bg-gradient-to-r from-black flex flex-col'>
                    <div className="flex mt-96 ml-72 ">
                        <div className="flex flex-col border-r-2 border-white/50 justify-center items-end pr-5 space-y-10">
                            <Link href={'/service#1'}
                                className={pathname.endsWith('/service') ? linkSelectedClassNameFix : linkUnSelectedClassNameFix}
                            >
                                PERSONAL PHOTOGRAPHY
                            </Link>
                            <Link href={'/service/video#1'}
                                className={pathname.endsWith('/service/video') ? linkSelectedClassNameFix : linkUnSelectedClassNameFix}
                            >
                                VIDEO GENERATION
                            </Link>
                            <Link href={'/service/photo-related#1'}
                                className={pathname.endsWith('/service/photo-related') ? linkSelectedClassNameFix : linkUnSelectedClassNameFix}
                            >
                                PHOTO-RELATED PRODUCTS
                            </Link>
                        </div>
                        <div className='flex flex-col ml-5'>
                            <h1 className='text-4xl tracking-wider text-white'>{section.title}</h1>
                            <p className='text-xl italic text-white/30 mt-12'>{section.content}</p>
                            <div className='flex space-x-5'>
                                <Link href={section.link_more} className='w-64 h-12 mt-6 flex justify-center items-center text-white/30 hover:text-white border-2 border-white/30 hover:border-white'>MORE</Link>
                                <Link href={section.link_book} className='w-64 h-12 mt-6 flex justify-center items-center text-white/30 hover:text-white border-2 border-white/30 hover:border-white'>BOOK</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {children}
        </div>
    );
}

const linkSelectedClassNameFix = 'text-white text-lg cursor-pointer text-wrap'
const linkUnSelectedClassNameFix = 'text-white/30 text-lg cursor-pointer hover:text-white'
export default Layout