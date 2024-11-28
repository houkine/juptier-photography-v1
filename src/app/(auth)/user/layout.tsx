
import { Comforter } from 'next/font/google'

const comforter = Comforter({
    subsets: ["latin"],
    weight: '400',
})

const ClientLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {

    return (
        <div className="bg-[url('/images/user_image/image1.png')] bg-cover h-screen w-screen flex">
            <div className='w-full h-full bg-black/50 overflow-y-auto flex flex-col items-center justify-center space-y-24'>
                <div className='text-7xl font-bold text-white'>
                    <h1 className={comforter.className}>Juptier Photography Studio</h1>
                </div>
                {children}
            </div>
        </div>
    )
}
export default ClientLayout