'use client'
import dashboardTabs from "@/constant/dashboardTabs";
import { usePathname, useRouter } from "next/navigation";
import Calendar from "./calendar";
import { useState } from "react";
import { THEME_BACKGROUNDCOLOR_BLACK, THEME_BACKGROUNDCOLOR_WHITE, ThemeContext, OrderPanelSwitchContext } from "./Context";
import { BsFillSunFill, BsFillMoonFill, BsCalendarHeart, BsCaretLeftFill, BsCaretRightFill, BsBox2Heart } from "react-icons/bs";



const ClientLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const path = usePathname()
    const router = useRouter()
    const [theme, SetTheme] = useState(THEME_BACKGROUNDCOLOR_BLACK)

    const [isCalendarOpen, setIsCalendarOpen] = useState<boolean>(false)
    const [isOrderEditorOpen, setIsOrderEditorOpen] = useState<boolean>(false)

    return (
        <div className=" w-full h-full flex">
            <ThemeContext.Provider value={theme}>
                <div className="flex flex-col h-full">
                    <ul className=" mt-3">
                        {dashboardTabs.map((dashboardTab, index) => (
                            <li
                                className={'m-3 p-3 rounded-md cursor-pointer  flex ' + (path == dashboardTab.href ? 'bg-white/15 ' : 'hover:bg-white/15')} key={index}
                                // className={path == dashboardTab.href ? TabSelectedClassname : TabUnSelectedClassname} key={index}
                                onClick={() => path != dashboardTab.href && router.push(dashboardTab.href)}
                            >
                                <span className="block text-white 2xl:invisible">{dashboardTab.icon}</span>
                                <p className="text-xl text-white word-wrap hidden 2xl:block">{dashboardTab.title}</p>
                            </li>
                        ))}
                    </ul>
                    <div className="w-full m-auto mb-12 flex">
                        <ThemeSelector theme={theme} SetTheme={SetTheme} />

                    </div>
                </div>
                <div className='flex-1 py-6 flex px-2'>
                    <OrderPanelSwitchContext.Provider value={isOrderEditorOpen}>
                        {children}
                    </OrderPanelSwitchContext.Provider>
                </div>
                <div className='h-full flex py-6 px-2'>
                    {isCalendarOpen && <Calendar />}
                </div>
                <div className="w-8 h-full py-6 ml-2 flex flex-col space-y-4">
                    <div className='flex flex-col bg-white/20 p-1 rounded-sm space-y-2'>
                        <BsCalendarHeart size={15} className="text-white" />
                        {isCalendarOpen ?
                            <BsCaretRightFill size={15} className="cursor-pointer text-white" onClick={() => setIsCalendarOpen(false)} />
                            :
                            <BsCaretLeftFill size={15} className="cursor-pointer text-white" onClick={() => setIsCalendarOpen(true)} />
                        }
                    </div>
                    <div className='flex flex-col bg-white/20 p-1 rounded-sm space-y-2'>
                        <BsBox2Heart size={15} className="text-white" />
                        {isOrderEditorOpen ?
                            <BsCaretRightFill size={15} className="cursor-pointer text-white" onClick={() => setIsOrderEditorOpen(false)} />
                            :
                            <BsCaretLeftFill size={15} className="cursor-pointer text-white" onClick={() => setIsOrderEditorOpen(true)} />
                        }
                    </div>
                </div>
            </ThemeContext.Provider>
        </div>
    )
}

const ThemeSelector = ({ theme, SetTheme }: ThemeSelectorTypeInput) => {
    const HandleOnClick = () => {
        SetTheme(theme == THEME_BACKGROUNDCOLOR_WHITE ? THEME_BACKGROUNDCOLOR_BLACK : THEME_BACKGROUNDCOLOR_WHITE)
        console.log(theme)
    }
    return (
        <div className="w-full h-12 flex items-center">
            <div className="bg-white/20 h-2 w-6 flex ml-4 rounded-xl cursor-pointer" onClick={HandleOnClick}>
                {theme == THEME_BACKGROUNDCOLOR_WHITE && <BsFillSunFill size={20} className=" bg-white/20 rounded-full p-1 m-auto -mt-1.5 -ml-2 text-white" />}
                {theme == THEME_BACKGROUNDCOLOR_BLACK && <BsFillMoonFill size={20} className="bg-white/20 rounded-full p-1 m-auto -mt-1.5 -mr-2 text-white" />}
            </div>
        </div>
    )
}
type ThemeSelectorTypeInput = {
    theme: string,
    SetTheme: (theme: string) => void,
}
// const TabUnSelectedClassname = 'm-3 p-3 rounded-md cursor-pointer hover:bg-white/15 text-xl text-white word-wrap'
// const TabSelectedClassname = 'm-3 p-3 rounded-md cursor-pointer bg-white/15 text-xl text-white word-wrap'
export default ClientLayout