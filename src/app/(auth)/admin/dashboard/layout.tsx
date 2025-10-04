


const ClientLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {

    return (
        <div className=" w-full h-full flex">
            <ul className=" w-1/6 mt-24">
                <li className={TabClassname}>Dashboard</li>
                <li className={TabClassname}>Inbox</li>
                <li className={TabClassname}>Enquiries</li>
                <li className={TabClassname}>Confirmation</li>
                <li className={TabClassname}>Users</li>
                <li className={TabClassname}>Views</li>
            </ul>
            <div className='w-5/6 h-full'>{children}</div>
            
        </div>
    )
}

const TabClassname='m-6 p-3 rounded-md cursor-pointer hover:bg-white/50 text-xl text-white '
export default ClientLayout