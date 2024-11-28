'use client'
import { useState } from "react"
import Input from "./input"

import { BsFacebook, BsWechat, BsGoogle, BsApple, BsInstagram, BsTiktok } from "react-icons/bs";
import { useRouter } from "next/navigation";

const page = () => {
    const [email, setEmail] = useState(emailDefault)
    const [phone, setPhone] = useState(phoneDefault)
    const [name, setName] = useState(nameDefault)
    const [DOB, setDOB] = useState(DOBDefault)
    const [address, setAddress] = useState(addressDefault)
    const [linkedAccountList, setLsinkedAccountList] = useState(linkedAccountListDefault)
    const router = useRouter()

    const CancelDetails = () => {
        setEmail(emailDefault)
        setPhone(phoneDefault)
        setName(nameDefault)
        setDOB(DOBDefault)
        setAddress(addressDefault)
    }
    return (
        <div className="w-full h-full flex flex-col rounded-lg bg-black/30 items-start pt-6 pl-16 animate-fadeIn_personalContent">
            <Input label={"EMAIL:"} value={email} onChange={setEmail} />
            <Input label={"PHONE:"} value={phone} onChange={setPhone} />
            <Input label={"NAME:"} value={name} onChange={setName} />
            <Input label={"DATE OF BIRTH:"} value={DOB} onChange={setDOB} />
            <Input label={"ADDRESS:"} value={address} onChange={setAddress} />
            <div className=" mt-12  w-2/3 flex space-x-5 items-center">
                <div className="text-gray-200 text-xl tracking-wider">LINKED ACCOUNTS:</div>

                <BsFacebook
                    className={linkedAccountList.includes('facebook') ? SelectedIconClassNameFix : UnSelectedIconClassNameFix}
                    onClick={() => router.push('http://www.baidu.com')}
                />
                <BsWechat
                    className={linkedAccountList.includes('wechat') ? SelectedIconClassNameFix : UnSelectedIconClassNameFix}
                    onClick={() => router.push('http://www.baidu.com')}
                />
                <BsGoogle
                    className={linkedAccountList.includes('google') ? SelectedIconClassNameFix : UnSelectedIconClassNameFix}
                    onClick={() => router.push('http://www.baidu.com')}
                />
                <BsApple
                    className={linkedAccountList.includes('apple') ? SelectedIconClassNameFix : UnSelectedIconClassNameFix}
                    onClick={() => router.push('http://www.baidu.com')}
                />
                <BsInstagram
                    className={linkedAccountList.includes('instagram') ? SelectedIconClassNameFix : UnSelectedIconClassNameFix}
                    onClick={() => router.push('http://www.baidu.com')}
                />
                <BsTiktok
                    className={linkedAccountList.includes('tiktok') ? SelectedIconClassNameFix : UnSelectedIconClassNameFix}
                    onClick={() => router.push('http://www.baidu.com')}
                />
            </div>
            <div className=" mt-12 border-b-2 border-white/50 text-gray-200 text-2xl tracking-widest cursor-pointer hover:font-bold hover:border-white ">CHANGE PASSWORD</div>
            <div className="mt-12 w-2/3 flex space-x-10">
                <div className={ButtonClassNameFix} onClick={() => alert('detail saved')}>SAVE</div>
                <div className={ButtonClassNameFix} onClick={CancelDetails}>CANCEL</div>
            </div>
        </div>
    )
}
const emailDefault = 'pan@gmail.com'
const phoneDefault = '0402123456'
const nameDefault = 'pan'
const DOBDefault = '01-01-2000'
const addressDefault = '01 Test Road, Coomera, QLD'
const linkedAccountListDefault = [
    'facebook',
    'wechat',
    'google',
    'tiktok',
]
const SelectedIconClassNameFix = 'h-8 w-8 cursor-pointer text-white'
const UnSelectedIconClassNameFix = 'h-8 w-8 cursor-pointer text-gray-600 hover:text-gray-400'
const ButtonClassNameFix = 'w-60 h-12 flex justify-center items-center border-2 cursor-pointer rounded-xl border-white/50 hover:border-white/80 text-gray-200 text-xl hover:font-bold hover:bg-white/20'
export default page
