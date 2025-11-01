'use client'

import { ThemeContext } from "@/app/(auth)/admin/dashboard/Context";
import { useContext, useEffect, useState } from "react"
import { createPortal } from "react-dom";
import { BsSearch, BsPlusCircleFill, BsXCircleFill, BsCheckLg, BsCamera } from "react-icons/bs";
import PhotoUploader from "./PhotoUploader";
import TextInput1 from "../TextInput/TextInput1";
import TextInput2 from "../TextInput/TextInput2";
import NumberInput from "../TextInput/NumberInput";
import Button1 from "../Button/Button1";

const OrderEditor = ({ enquiry, order }: OrderCreationInputType) => {
    const theme = useContext(ThemeContext);

    const [orderId, setOrderId] = useState<string>('')


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

    const [appoinmentList, setAppoinmentList] = useState<AppoinmentType[]>([])
    const [productList, setProductList] = useState<ProductType[]>([])

    const [postscript, setPostscript] = useState<string>('')

    const [status, setStatus] = useState<string>('')
    const [depositPaymentTime, setDepositPaymentTime] = useState<string>('')
    const [shootingCompleteTime, setShootingCompleteTime] = useState<string>('')
    const [balancePaymentTime, setBalancePaymentTime] = useState<string>('')
    const [finaliseTime, setFinaliseTime] = useState<string>('')

    const [totalPrice, setTotalPrice] = useState<number>(0)
    const [depositPrice, setDepositPrice] = useState<number>(0)
    const [balancePrice, setBalancePrice] = useState<number>(0)

    const [isOriginalPhotoEditorOpen, setIsOriginalPhotoEditorOpen] = useState<boolean>(false)
    const [originalPhotoList, setOriginalPhotoList] = useState<string[]>(defaultPhotoList)


    const [remark, setRemark] = useState<string>('')

    useEffect(() => {

    }, [enquiry])

    useEffect(() => {
        if (order) {
            setOrderId(order.id)
            setUserId(order.userId)
            setUserName('pan')
            setUserEmail('pan@email.com')
            setUserPhone('04020000000')

            setSession(order.session)
            setType(order.type)
            setOriginalPhotos(order.originalPhotos)
            setEditedPhotos(order.editedPhotos)
            setVideo(order.video)
            setDuration(order.duration)

            setAppoinmentList(order.appointments)
            setProductList(order.products)

            setPostscript(order.postscript)

            setStatus(order.status)
            setDepositPaymentTime(order.depositPaymentTime)
            setShootingCompleteTime(order.shootingCompleteTime)
            setBalancePaymentTime(order.balancePaymentTime)
            setFinaliseTime(order.finaliseTime)

            setTotalPrice(order.totalPrice)
            setDepositPrice(order.depositPrice)
            setBalancePrice(order.balancePrice)

            setOriginalPhotoList(defaultPhotoList)
            setRemark(order.remark)

        }
    }, [order])

    const GetUserById = () => {
        // userId
        setUserName('pan')
        setUserEmail('pan@email.com')
        setUserPhone('0402123456')
    }

    const HandleUserCheckboxonChange = (): void => {
        if (isHavingUser) {
            setUserId('')
            setUserName('')
            setUserEmail('')
            setUserPhone('')
        }
        setIsHavingUser(!isHavingUser)
    }
    const HandleSessionCheckboxonChange = (): void => {
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
    const CreateAppoinment = (): void => {
        const _appoinmentList = [...appoinmentList]
        const appoinment = {
            location: '',
            time: '',
            duration: '',
            postscript: '',
            remark: '',
        }
        _appoinmentList.push(appoinment)
        setAppoinmentList(_appoinmentList)
    }
    const UpdateAppoinment = (appoinment: AppoinmentType, index: number): void => {
        const _appoinmentList = [...appoinmentList]

        for (let _index = 0; _index < _appoinmentList.length; _index++) {
            if (_index == index) {
                _appoinmentList[index] = { ...appoinment }
            }

        }
        setAppoinmentList(_appoinmentList)
    }
    const DeleteAppoinment = (index: number): void => {
        const _appoinmentList = []
        for (let _index = 0; _index < appoinmentList.length; _index++) {
            if (_index != index) {
                _appoinmentList.push(appoinmentList[_index])
            }

        }
        setAppoinmentList(_appoinmentList)
    }
    const CreateProduct = (): void => {
        const _productList = [...productList]
        const product = {
            item: '',
            type: '',
            quantity: 0,
            price: 0,
            postscript: '',
            remark: '',
        }
        _productList.push(product)
        setProductList(_productList)
    }
    const UpdateProduct = (product: ProductType, index: number): void => {
        const _productList = [...productList]

        for (let _index = 0; _index < _productList.length; _index++) {
            if (_index == index) {
                _productList[index] = { ...product }
            }

        }
        setProductList(_productList)
    }
    const DeleteProduct = (index: number): void => {
        const _productList = []
        for (let _index = 0; _index < productList.length; _index++) {
            if (_index != index) {
                _productList.push(productList[_index])
            }

        }
        setProductList(_productList)
    }
    const handleSaveOnClick = (): void => {
        alert('save button on click')
    }
    const handleResetOnClick = (): void => {
        alert('reset button on click')
    }
    const handleClearOnClick = (): void => {
        alert('clear button on click')
    }
    return (
        <div className={'w-full h-full flex flex-col rounded-lg ' + theme}>
            {orderId ?
                <div className="w-full h-20 flex flex-col my-4 ml-4">
                    <p className="text-4xl text-white">{'Order Update: '}</p>
                    <p className="text-base text-gray-300 mt-2">{orderId}</p>
                </div> :
                <div className="w-full h-20 flex my-4 ml-4">
                    <p className="text-4xl text-white">{'New Order'}</p>
                </div>
            }
            <Line />
            <div className="flex flex-col w-full overflow-y-auto p-4 mt-1">
                <div className="flex w-full items-center">
                    <p className="text-2xl text-white">User</p>
                    <p className="text-sm ml-12 text-white">Link order with a user</p>
                    <input type="checkbox" className="ml-2" checked={isHavingUser} onChange={HandleUserCheckboxonChange} />
                </div>
                <div className="w-full flex flex-col mx-auto">
                    <div className="flex w-full">
                        <TextInput1 label={'user id'} value={userId} OnChange={setUserId} isDisabled={!isHavingUser} classname='mt-4 w-full' >
                            <BsSearch onClick={GetUserById} size={20} className="my-auto mx-2 cursor-pointer  text-white" />
                        </TextInput1>
                    </div>
                    <TextInput1 label={'user name'} value={userName} OnChange={setUserName} isDisabled={!isHavingUser} classname='mt-2 w-full' />
                    <TextInput1 label={'user email'} value={userEmail} OnChange={setUserEmail} isDisabled={!isHavingUser} classname='mt-2 w-full' />
                    <TextInput1 label={'user phone'} value={userPhone} OnChange={setUserPhone} isDisabled={!isHavingUser} classname='mt-2 w-full' />
                </div>


                <div className="flex w-full mt-10 items-center">
                    <p className="text-2xl text-white">Photography Service</p>
                    <p className="text-sm ml-12 text-white">Link order with a photography session</p>
                    <input type="checkbox" className="ml-2" checked={isHavingUser} onChange={HandleSessionCheckboxonChange} />
                </div>
                <div className="w-full flex flex-col mx-auto">
                    <TextInput1 label={'session'} value={session} OnChange={setSession} isDisabled={!isHavingSession} classname='mt-2 w-full' />
                    <TextInput1 label={'photo type'} value={type} OnChange={setType} isDisabled={!isHavingSession} classname='mt-2 w-full' />
                    <TextInput1 label={'number of original Photos'} value={originalPhotos} OnChange={setOriginalPhotos} isDisabled={!isHavingSession} classname='mt-2 w-full' />
                    <TextInput1 label={'number of edited Photos'} value={editedPhotos} OnChange={setEditedPhotos} isDisabled={!isHavingSession} classname='mt-2 w-full' />
                    <TextInput1 label={'video'} value={video} OnChange={setVideo} isDisabled={!isHavingSession} classname='mt-2 w-full' />
                    <TextInput1 label={'duration'} value={duration} OnChange={setDuration} isDisabled={!isHavingSession} classname='mt-2 w-full' />
                </div>

                <div className="flex w-full mt-10 items-center">
                    <p className="text-2xl text-white">Appoinment</p>
                </div>
                <ul className="w-full space-y-2 ">
                    {appoinmentList.map((appoinment, index) => <li key={index} className="flex flex-col w-full mt-2 border-2 border-gray-300 px-4 py-2 rounded-lg">
                        <TextInput2 label={'location'} value={appoinment.location} OnChange={value => { appoinmentList[index].location = value; UpdateAppoinment(appoinmentList[index], index) }} classname='mt-2 w-full' />
                        <div className="flex space-x-4 w-full">
                            <TextInput2 label={'time'} value={appoinment.time} OnChange={value => { appoinmentList[index].time = value; UpdateAppoinment(appoinmentList[index], index) }} classname='mt-2 w-1/2' />
                            <TextInput2 label={'duration'} value={appoinment.duration} OnChange={value => { appoinmentList[index].duration = value; UpdateAppoinment(appoinmentList[index], index) }} classname='mt-2 w-1/2' />
                        </div>
                        <TextInput2 label={'postscript'} value={appoinment.postscript} OnChange={value => { appoinmentList[index].postscript = value; UpdateAppoinment(appoinmentList[index], index) }} classname='mt-2 w-full' />
                        <TextInput2 label={'remark'} value={appoinment.remark} OnChange={value => { appoinmentList[index].remark = value; UpdateAppoinment(appoinmentList[index], index) }} classname='mt-2 w-full' />
                        <div
                            className="flex items-center justify-center w-full bg-white/10 rounded-md p-2 cursor-pointer mt-2 hover:bg-white/20"
                            onClick={() => DeleteAppoinment(index)}
                        >
                            <BsXCircleFill size={20} className=" text-white" />
                            <p className="ml-2 text-sm text-white">Delete</p>
                        </div>
                    </li>)}
                </ul>
                <div className="flex items-center justify-center w-full bg-white/10 rounded-lg p-4 cursor-pointer mt-2 hover:bg-white/20" onClick={CreateAppoinment}>
                    <BsPlusCircleFill size={25} className=" text-white" />
                    <p className="ml-2 text-lg text-white">Add new appoinment</p>
                </div>

                <div className="flex w-full mt-10 items-center">
                    <p className="text-2xl text-white">Product</p>
                </div>
                <ul className="w-full space-y-2 ">
                    {productList.map((product, index) => <li key={index} className="flex flex-col w-full mt-2 border-2 border-gray-300 px-4 py-2 rounded-lg">
                        <TextInput2 label={'item'} value={product.item} OnChange={value => { productList[index].item = value; UpdateProduct(productList[index], index) }} classname='mt-2 w-full' />
                        <TextInput2 label={'type'} value={product.type} OnChange={value => { productList[index].type = value; UpdateProduct(productList[index], index) }} classname='mt-2 w-full' />
                        <div className="flex space-x-4 w-full">
                            <TextInput2 label={'quantity'} type='number' value={product.quantity} OnChange={value => { productList[index].quantity = parseInt(value); UpdateProduct(productList[index], index) }} classname='mt-2 w-1/2' />
                            <TextInput2 label={'price'} type='number' value={product.price} OnChange={value => { productList[index].price = parseFloat(value); UpdateProduct(productList[index], index) }} classname='mt-2 w-1/2' />
                        </div>
                        <TextInput2 label={'postscript'} value={product.postscript} OnChange={value => { productList[index].postscript = value; UpdateProduct(productList[index], index) }} classname='mt-2 w-full' />
                        <TextInput2 label={'remark'} value={product.remark} OnChange={value => { productList[index].remark = value; UpdateProduct(productList[index], index) }} classname='mt-2 w-full' />
                        <div
                            className="flex items-center justify-center w-full bg-white/10 rounded-md p-2 cursor-pointer mt-2 hover:bg-white/20"
                            onClick={() => DeleteProduct(index)}
                        >
                            <BsXCircleFill size={20} className=" text-white" />
                            <p className="ml-2 text-sm text-white">Delete</p>
                        </div>
                    </li>)}
                </ul>
                <div className="flex items-center justify-center w-full bg-white/10 rounded-lg p-4 cursor-pointer mt-2 hover:bg-white/20" onClick={CreateProduct}>
                    <BsPlusCircleFill size={25} className=" text-white" />
                    <p className="ml-2 text-lg text-white">Add new product</p>
                </div>

                <div className="flex w-full mt-10 items-center">
                    <p className="text-2xl text-white">Postscript</p>
                </div>
                <div className="w-full flex mt-2">
                    <textarea
                        className="w-full h-24 bg-transparent border-2 border-gray-300 rounded-lg text-white"
                        value={postscript} onChange={e => setPostscript(e.target.value)}
                    />
                </div>

                <div className="flex w-full mt-10 items-center">
                    <p className="text-2xl text-white">Status</p>
                </div>
                <div className="w-full flex flex-col mx-auto">
                    <TextInput1 label={'status'} value={status} OnChange={setStatus} classname='mt-2 w-full' />
                    <TextInput1 label={'deposit payment time'} value={depositPaymentTime} OnChange={setDepositPaymentTime} classname='mt-2 w-full' >
                        {depositPaymentTime != '' && <CompleteTag />}
                    </TextInput1>
                    <TextInput1 label={'shooting complete time'} value={shootingCompleteTime} OnChange={setShootingCompleteTime} classname='mt-2 w-full' >
                        {shootingCompleteTime != '' && <CompleteTag />}
                    </TextInput1>
                    <TextInput1 label={'balance payment time'} value={balancePaymentTime} OnChange={setBalancePaymentTime} classname='mt-2 w-full' >
                        {balancePaymentTime != '' && <CompleteTag />}
                    </TextInput1>
                    <TextInput1 label={'finalise time'} value={finaliseTime} OnChange={setFinaliseTime} classname='mt-2 w-full' >
                        {finaliseTime != '' && <CompleteTag />}
                    </TextInput1>
                </div>

                <div className="flex w-full mt-10 items-center">
                    <p className="text-2xl text-white">Price</p>
                </div>
                <div className="w-full flex flex-col mx-auto">
                    <NumberInput label={'total price'} value={totalPrice} OnChange={setTotalPrice} classname='mt-2 w-full' />
                    <NumberInput label={'deposit price'} value={depositPrice} OnChange={setDepositPrice} classname='mt-2 w-full' />
                    <NumberInput label={'balance price'} value={balancePrice} OnChange={setBalancePrice} classname='mt-2 w-full' />
                </div>

                <div className="flex w-full mt-10 items-center">
                    <p className="text-2xl">Original Photos</p>
                </div>
                <p className="text-sm">100 photo uploaded</p>
                <div
                    className="flex items-center justify-center w-full bg-white/10 rounded-lg p-4 cursor-pointer mt-2 hover:bg-white/20"
                    onClick={() => setIsOriginalPhotoEditorOpen(true)}
                >
                    <BsCamera size={25} />
                    <p className="ml-2 text-lg">Photo Uploader</p>
                </div>
                {isOriginalPhotoEditorOpen && createPortal(
                    <div className="absolute inset-0 w-screen h-screen flex">
                        <div className="flex w-2/3 2xl:w-1/2 h-3/4 2xl:h-2/3 m-auto">
                            <PhotoUploader photoList={originalPhotoList} setPhotoList={setOriginalPhotoList} onClose={() => setIsOriginalPhotoEditorOpen(false)} title={"Original Photos"} />
                        </div>
                    </div>,
                    document.body
                )}

                <div className="flex w-full mt-10 items-center">
                    <p className="text-2xl">Edited Photos</p>
                </div>
                <p className="text-sm">10 photo uploaded</p>
                <div
                    className="flex items-center justify-center w-full bg-white/10 rounded-lg p-4 cursor-pointer mt-2 hover:bg-white/20"
                    onClick={() => setIsOriginalPhotoEditorOpen(true)}
                >
                    <BsCamera size={25} />
                    <p className="ml-2 text-lg">Photo Uploader</p>
                </div>
                {isOriginalPhotoEditorOpen && createPortal(
                    <div className="absolute inset-0 w-screen h-screen flex">
                        <div className="flex w-2/3 2xl:w-1/2 h-3/4 2xl:h-2/3 m-auto">
                            <PhotoUploader photoList={originalPhotoList} setPhotoList={setOriginalPhotoList} onClose={() => setIsOriginalPhotoEditorOpen(false)} title={"Original Photos"} />
                        </div>
                    </div>,
                    document.body
                )}

                <div className="flex w-full mt-10 items-center">
                    <p className="text-2xl text-white" title="only we can see this">Remark</p>
                </div>
                <div className="w-full flex mt-2">
                    <textarea
                        className="w-full h-24 bg-transparent border-2 border-gray-300 rounded-lg text-white"
                        value={remark} onChange={e => setRemark(e.target.value)}
                    />
                </div>
            </div>
            <Line />
            <div className="flex justify-between w-full h-24 px-4 my-4 ">
                <Button1 title={'Save'} onClick={handleSaveOnClick} />
                <Button1 title={'Reset'} onClick={handleResetOnClick} />
                <Button1 title={'Clear'} onClick={handleClearOnClick} />
            </div>
        </div>
    )
}
type OrderCreationInputType = {
    enquiry?: EnquiryType | null,
    order?: OrderType | null,
}

const Line = ({ classname }: LineInputType) => <div className={"h-1 bg-white/20 " + (classname && classname)} />
type LineInputType = { classname?: string }
const CompleteTag = () => <p className="flex space-x-2 text-sm text-green-300 items-center text-nowrap"><BsCheckLg size={20} />&nbsp;mark as completed</p>




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
export type OrderType = {
    id: string,
    userId: string,
    session: string,
    type: string,
    originalPhotos: string,
    editedPhotos: string,
    video: string,
    duration: string,
    appointments: AppoinmentType[],
    products: ProductType[],
    postscript: string,
    status: string,
    depositPaymentTime: string,
    shootingCompleteTime: string,
    balancePaymentTime: string,
    finaliseTime: string,
    totalPrice: number,
    depositPrice: number,
    balancePrice: number,
    remark: string,
    isValid: boolean,
    createdAt: string,
}
export type AppoinmentType = {
    id?: number,
    appoinmentId?: string,
    orderId?: string,
    location: string,
    time: string,
    duration: string,
    postscript: string,
    remark: string,
}
export type ProductType = {
    id?: number,
    productId?: string,
    orderId?: string,
    itemId?: string,
    item: string,
    type: string,
    quantity: number,
    price: number,
    postscript: string,
    remark: string,
}

const defaultPhotoList = [
    'photo1.jpg',
    'photo2.jpg',
    'photo3.jpg',
    'photo4.jpg',
    'photo5.jpg',
    'photo6.jpg',
    'photo7.jpg',
    'photo8.jpg',
    'photo9.jpg',
    'photo10.jpg',
    'photo11.jpg',
    'photo12.jpg',
    'photo13.jpg',
    'photo14.jpg',
    'photo15.jpg',
    'photo16.jpg',
    'photo17.jpg',
    'photo18.jpg',
    'photo19.jpg',
    'photo20.jpg',
    'photo31.jpg',
    'photo32.jpg',
    'photo33.jpg',
    'photo34.jpg',
    'photo35.jpg',
    'photo36.jpg',
    'photo37.jpg',
    'photo38.jpg',
    'photo39.jpg',
    'photo40.jpg',
]
export default OrderEditor