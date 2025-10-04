


const ClientLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {

    return (
        <div className="bg-[url('/images/user_image/image1.png')] bg-cover h-screen w-screen flex">
            {children}
        </div>
    )
}
export default ClientLayout