'use client'
import dashboardTabs from "@/constant/dashboardTabs";
import { usePathname, useRouter } from "next/navigation";
import Calendar from "./calendar";
import { useState } from "react";
import { THEME_BACKGROUNDCOLOR_BLACK, THEME_BACKGROUNDCOLOR_WHITE, ThemeContext } from "./ThemeContext";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";



const ClientLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const path = usePathname()
    const router = useRouter()
    const [theme, SetTheme] = useState(THEME_BACKGROUNDCOLOR_BLACK)

    return (
        <div className=" w-full h-full flex">
            <ThemeContext.Provider value={theme}>
                <div className="w-52 flex flex-col h-full">
                    <ul className="w-full mt-3">
                        {dashboardTabs.map((dashboardTab, index) => (
                            <li
                                className={path == dashboardTab.href ? TabSelectedClassname : TabUnSelectedClassname} key={index}
                                onClick={() => path != dashboardTab.href && router.push(dashboardTab.href)}
                            >
                                {dashboardTab.title}
                            </li>
                        ))}
                    </ul>
                    <div className="w-full m-auto mb-12 flex">
                        <ThemeSelector theme={theme} SetTheme={SetTheme} />

                    </div>
                </div>
                <div className='w-full h-full flex py-6 px-2'>
                    {children}
                </div>
                <div className='w-1/6 h-full flex py-6 px-2'>
                    <Calendar />
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
            <p className="text-xs ml-6">Theme:</p>
            <div className="bg-white/20 h-2 w-6 flex ml-4 rounded-xl cursor-pointer" onClick={HandleOnClick}>
                {theme == THEME_BACKGROUNDCOLOR_WHITE && <BsFillSunFill size={20} className=" bg-white/20 rounded-full p-1 m-auto -mt-1.5 -ml-2" />}
                {theme == THEME_BACKGROUNDCOLOR_BLACK && <BsFillMoonFill size={20} className="bg-white/20 rounded-full p-1 m-auto -mt-1.5 -mr-2" />}
            </div>
        </div>
    )
}
type ThemeSelectorTypeInput = {
    theme: string,
    SetTheme: (theme: string) => void,
}
const TabUnSelectedClassname = 'm-3 p-3 rounded-md cursor-pointer hover:bg-white/15 text-xl text-white word-wrap'
const TabSelectedClassname = 'm-3 p-3 rounded-md cursor-pointer bg-white/15 text-xl text-white word-wrap'
export default ClientLayout