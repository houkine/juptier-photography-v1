


const ClientLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {

    return (
        <div className="bg-[url('/images/admin_image/image2.jpg')] bg-cover h-screen w-screen flex">
            {children}
        </div>
    )
}
export default ClientLayout