'use client'

import { ThemeContext } from "@/app/(auth)/admin/dashboard/ThemeContext";
import { Children, Dispatch, SetStateAction, useContext, useState } from "react"
import { BsSearch } from "react-icons/bs";

const OrderEditor = ({ enquiry }: OrderCreationInputType) => {
    const theme = useContext(ThemeContext);

    const [orderId, setOrderId] = useState<string | null>(null)


    const [isHavingUser, setIsHavingUser] = useState<boolean>(true)
    const [userId, setUserId] = useState<string>('')
    const [userName, setUserName] = useState<string>('')
    const [userEmail, setUserEmail] = useState<string>('')
    const [userPhone, setUserPhone] = useState<string>('')

    const [isHavingSession, setIsHavingSession] = useState<boolean>(true)
    const [session, setSession] = useState<string>('')
    const [type, setType] = useState<string>('')
    const [originalPhotos, setOriginalPhotos] = useState<string>('')
    const [editedPhotos, setEditedPhotos] = useState<string>('')
    const [video, setVideo] = useState<string>('')
    const [duration, setDuration] = useState<string>('')

    const [price, setPrice] = useState<string | null>(null)

    const GetUserById = () => {
        // userId
        setUserName('pan')
        setUserEmail('pan@email.com')
        setUserPhone('0402123456')
    }

    const HandleUserCheckboxonChange = () => {
        if (isHavingUser) {
            setUserId('')
            setUserName('')
            setUserEmail('')
            setUserPhone('')
        }
        setIsHavingUser(!isHavingUser)
    }
    const HandleSessionCheckboxonChange = () => {
        if (isHavingSession) {
            setSession('')
            setType('')
            setOriginalPhotos('')
            setEditedPhotos('')
            setVideo('')
            setDuration('')
        }
        setIsHavingSession(!isHavingSession)
    }
    return (
        <div className={'w-full h-full flex flex-col rounded-lg px-8 ' + theme}>
            <p className="mt-4 ml-4 text-4xl">{orderId ? 'Order Update: ' + orderId : 'New Order'}</p>


            <div className="flex w-full mt-10 items-center">
                <p className="text-2xl">User</p>
                <p className="text-sm ml-12">Link order with a user</p>
                <input type="checkbox" className="ml-2" checked={isHavingUser} onChange={HandleUserCheckboxonChange} />
            </div>
            {/* <Line /> */}
            <div className="w-full flex flex-col mx-auto">
                <div className="flex w-full">
                    <TextInput label={'user id'} value={userId} OnChange={setUserId} isDisabled={!isHavingUser} classname='mt-4 w-full' >
                        <BsSearch onClick={GetUserById} size={20} className="my-auto mx-2 cursor-pointer" />

                    </TextInput>
                </div>
                <TextInput label={'user name'} value={userName} OnChange={setUserName} isDisabled={!isHavingUser} classname='mt-2 w-full' />
                <TextInput label={'user email'} value={userEmail} OnChange={setUserEmail} isDisabled={!isHavingUser} classname='mt-2 w-full' />
                <TextInput label={'user phone'} value={userPhone} OnChange={setUserPhone} isDisabled={!isHavingUser} classname='mt-2 w-full' />
            </div>


            <div className="flex w-full mt-10 items-center">
                <p className="text-2xl">Photography Service</p>
                <p className="text-sm ml-12">Link order with a photography session</p>
                <input type="checkbox" className="ml-2" checked={isHavingUser} onChange={HandleSessionCheckboxonChange} />
            </div>
            <div className="w-full flex flex-col mx-auto">
                <TextInput label={'session'} value={session} OnChange={setSession} isDisabled={!isHavingSession} classname='mt-2 w-full' />
                <TextInput label={'photo type'} value={type} OnChange={setType} isDisabled={!isHavingSession} classname='mt-2 w-full' />
                <TextInput label={'number of original Photos'} value={originalPhotos} OnChange={setOriginalPhotos} isDisabled={!isHavingSession} classname='mt-2 w-full' />
                <TextInput label={'number of edited Photos'} value={editedPhotos} OnChange={setEditedPhotos} isDisabled={!isHavingSession} classname='mt-2 w-full' />
                <TextInput label={'video'} value={video} OnChange={setVideo} isDisabled={!isHavingSession} classname='mt-2 w-full' />
                <TextInput label={'duration'} value={duration} OnChange={setDuration} isDisabled={!isHavingSession} classname='mt-2 w-full' />
            </div>
        </div>
    )
}
type OrderCreationInputType = {
    enquiry: EnquiryType | null
}

const Line = ({ classname }: LineInputType) => <div className={"h-1 bg-white/20 " + (classname && classname)} />
type LineInputType = { classname?: string }

const TextInput = ({ classname, label, value, OnChange, isDisabled = false, children }: TextInputInputType) =>
    <div className={"flex border-b-2 border-white/20 focus-within:border-white h-12 " + classname}>
        <p className="my-auto whitespace-nowrap bg-white/20 h-full px-2 flex items-center rounded">{label}</p>
        <input disabled={isDisabled} className={"appearance-none outline-none bg-transparent pl-2 w-full disabled:bg-gray-700"} value={value} onChange={e => OnChange(e.target.value)} />
        {children}
    </div>
type TextInputInputType = {
    classname?: string,
    label?: string,
    value: string,
    OnChange: Dispatch<SetStateAction<string>>,
    isDisabled?: boolean,
    children?: React.ReactNode
}


export type EnquiryType = {
    id: string,
    userId: string,
    session: string,
    type: string,
    status: string,
    postscript: string,
    isValid: boolean,
    created: string,
    price: number,
    appointments: string[],
    products: string[],
}
export default OrderEditor