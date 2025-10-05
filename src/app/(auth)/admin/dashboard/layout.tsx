'use client'
import dashboardTabs from "@/constant/dashboardTabs";
import { usePathname, useRouter } from "next/navigation";
import Calendar from "./calendar";



const ClientLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const path = usePathname()
    const router = useRouter()

    return (
        <div className=" w-full h-full flex">
            <ul className=" w-1/6 mt-6">
                {dashboardTabs.map((dashboardTab, index) => (
                    <li
                        className={path == dashboardTab.href ? TabSelectedClassname : TabUnSelectedClassname} key={index}
                        onClick={() => path != dashboardTab.href && router.push(dashboardTab.href)}
                    >
                        {dashboardTab.title}
                    </li>
                ))}
            </ul>
            <div className='w-4/6 h-full flex'>
                <div className="w-full m-12 bg-white/30">{children}</div>
            </div>
            <div className='w-1/6 h-full flex'>
                <div className="w-full my-12 mx-4 "><Calendar /></div>
            </div>
        </div>
    )
}


const TabUnSelectedClassname = 'm-6 p-3 rounded-md cursor-pointer hover:bg-white/50 text-xl text-white word-wrap'
const TabSelectedClassname = 'm-6 p-3 rounded-md cursor-pointer bg-white/50 text-xl text-white word-wrap'
export default ClientLayout