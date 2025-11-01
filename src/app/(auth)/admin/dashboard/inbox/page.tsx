'use client'
import OrderEditor from '@/components/admin/OrderEditor/OrderEditor'
import React, { Dispatch, SetStateAction, useContext, useEffect, useState } from 'react'
import { OrderPanelSwitchContext, ThemeContext } from '../Context'
import EmailRecord, { EmailType } from './EmailRecord'
import Pagenation from './Pagenation'
import { BsBoxArrowInDown, BsBoxArrowRight, BsBoxArrowUp, BsFillReplyFill, BsTrashFill } from 'react-icons/bs'

const Page = () => {
  const isOrderEditorOpen = useContext(OrderPanelSwitchContext);
  const [email, setEmail] = useState<EmailType | null>(null)
  return (
    <div className='w-full h-full flex'>
      <div className='h-full w-1/6 flex px-2'><EmailList setEmail={setEmail} currentEmailId={email?.id} /></div>
      <div className='h-full flex-1 flex px-2'><EmailDetail email={email} /></div>

      {email && isOrderEditorOpen && <div className='h-full w-2/6 flex px-2'><OrderEditor /></div>}

    </div>
  )
}

enum EmailTabEnum {
  Received,
  Sent,
}
const EmailList = ({ setEmail, currentEmailId }: EmailListInputType) => {
  const [tab, setTab] = useState<EmailTabEnum>(EmailTabEnum.Received)

  return (
    <div className={'w-full h-full flex flex-col rounded-lg '}>
      <div className='w-full flex h-16 '>
        <span
          className={tab == EmailTabEnum.Received ? SpanSelectedClassname : SpanUnSelectedClassname}
          onClick={() => tab != EmailTabEnum.Received && setTab(EmailTabEnum.Received)}
        >
          <BsBoxArrowInDown size={20} className='text-white' />
        </span>
        <span
          className={tab == EmailTabEnum.Sent ? SpanSelectedClassname : SpanUnSelectedClassname}
          onClick={() => tab != EmailTabEnum.Sent && setTab(EmailTabEnum.Sent)}
        >
          <BsBoxArrowUp size={20} className='text-white' />
        </span>
      </div>
      {tab == EmailTabEnum.Received && <ReceivedEmailList setEmail={setEmail} currentEmailId={currentEmailId} />}
      {tab == EmailTabEnum.Sent && <SentEmailList setEmail={setEmail} currentEmailId={currentEmailId} />}
    </div>
  )
}
type EmailListInputType = {
  setEmail: Dispatch<SetStateAction<EmailType | null>>,
  currentEmailId?: string | null
}
const SpanUnSelectedClassname = 'w-1/2 rounded-md cursor-pointer hover:bg-white/15 text-lg text-white flex items-center justify-center '
const SpanSelectedClassname = 'w-1/2 rounded-md cursor-pointer bg-white/15 text-lg text-white flex items-center justify-center '

const ReceivedEmailList = ({ setEmail, currentEmailId }: EmailListInputType) => {
  const theme = useContext(ThemeContext);

  const [recordStartIndex, setRecordStartIndex] = useState<number>(0)
  const [recordEndIndex, setRecordEndIndex] = useState<number>(10)
  const [totalRecords, setTotalRecords] = useState<number>(10)

  const [emailList, setEmailList] = useState<EmailType[]>([])

  const PreTabOnClick = () => { }
  const PostTabOnClick = () => { }

  useEffect(() => {
    setEmailList(EmailDataset)
    setRecordStartIndex(0)
    setRecordEndIndex(10)
    setTotalRecords(EmailList.length)
  }, [])

  return (
    <div className='w-full h-full flex flex-col '>
      <div className={'w-full flex ' + theme}>

        <Pagenation
          recordStartIndex={recordStartIndex}
          recordEndIndex={recordEndIndex}
          totalRecords={totalRecords}
          className={'m-auto my-0 mr-2 h-12 flex items-center '}
          PreTabOnClick={PreTabOnClick}
          PostTabOnClick={PostTabOnClick}
        />
      </div>
      <ul className='w-full mt-2 space-y-2 overflow-auto'>
        {emailList.map((email, index) => <EmailRecord email={email} setEmail={setEmail} currentEmailId={currentEmailId} key={index} />)}
      </ul>
    </div>
  )
}

const SentEmailList = ({ setEmail, currentEmailId }: EmailListInputType) => {
  const theme = useContext(ThemeContext);

  const [recordStartIndex, setRecordStartIndex] = useState<number>(0)
  const [recordEndIndex, setRecordEndIndex] = useState<number>(10)
  const [totalRecords, setTotalRecords] = useState<number>(10)

  const [emailList, setEmailList] = useState<EmailType[]>([])

  const PreTabOnClick = () => { }
  const PostTabOnClick = () => { }

  useEffect(() => {
    setEmailList(EmailDataset)
    setRecordStartIndex(0)
    setRecordEndIndex(10)
    setTotalRecords(EmailList.length)
  }, [])

  return (
    <div className='w-full h-full flex flex-col '>
      <div className={'w-full flex ' + theme}>

        <Pagenation
          recordStartIndex={recordStartIndex}
          recordEndIndex={recordEndIndex}
          totalRecords={totalRecords}
          className={'m-auto my-0 mr-2 h-12 flex items-center '}
          PreTabOnClick={PreTabOnClick}
          PostTabOnClick={PostTabOnClick}
        />
      </div>
      <ul className='w-full mt-2 space-y-2 overflow-auto'>
        {emailList.map((email, index) => <EmailRecord email={email} setEmail={setEmail} currentEmailId={currentEmailId} key={index} />)}
      </ul>
    </div>
  )
}

const EmailDetail = ({ email }: EmailDetailInputType) => {
  const theme = useContext(ThemeContext);
  const handleReplyOnClick = () => { }
  const handleForwardOnClick = () => { }
  const handleDeleteOnClick = () => { }

  if (email) {

    return (
      <div className={'w-full h-full pl-8 flex flex-col rounded-lg ' + theme}>
        <div className='mt-8 w-full flex justify-between'>
          <p className='text-3xl'>{email.subject}</p>
          <span className='flex mr-12 space-x-4 items-center'>
            <BsFillReplyFill size={20} title='reply' onClick={handleReplyOnClick} className='cursor-pointer text-white' />
            <BsBoxArrowRight size={20} title='forward' onClick={handleForwardOnClick} className='cursor-pointer text-white' />
            <BsTrashFill size={20} title='delete' onClick={handleDeleteOnClick} className='cursor-pointer text-white' />
          </span>
        </div>
        <p className='mt-8 text-base text-gray-300'>{'From: ' + email.from}</p>
        <p className='mt-2 text-base text-gray-300'>{'To: ' + email.to}</p>
        <p className='mt-2 text-base text-gray-300'>{'Cc: ' + email.cc}</p>
        <p className='m-auto my-0 mr-16 text-base text-gray-300'>{email.time}</p>
        <p className='mt-16 pl-4 pr-4 mr-8 text-lg text-white overflow-y-auto'>{email.body}</p>
      </div>
    )
  } else {
    return <></>
  }
}
type EmailDetailInputType = {
  email: EmailType | null
}

const testingText = 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'
const EmailDataset: EmailType[] = [
  {
    id: '001',
    from: 'from@email.com',
    to: 'to@email.com',
    cc: 'cc@email.com',
    time: '2025-01-01',
    subject: 'test email1',
    body: testingText,
    isRead: false,
  },
  {
    id: '002',
    from: 'from@email.com',
    to: 'to@email.com',
    cc: 'cc@email.com',
    time: '2025-01-01',
    subject: 'test email2',
    body: testingText,
    isRead: true,
  },
  {
    id: '003',
    from: 'from@email.com',
    to: 'to@email.com',
    cc: 'cc@email.com',
    time: '2025-01-01',
    subject: 'test email3',
    body: testingText,
    isRead: false,
  },
  {
    id: '004',
    from: 'from@email.com',
    to: 'to@email.com',
    cc: 'cc@email.com',
    time: '2025-01-01',
    subject: 'test email4',
    body: testingText,
    isRead: true,
  },
  {
    id: '005',
    from: 'from@email.com',
    to: 'to@email.com',
    cc: 'cc@email.com',
    time: '2025-01-01',
    subject: 'test email5',
    body: testingText,
    isRead: false,
  },
  {
    id: '006',
    from: 'from@email.com',
    to: 'to@email.com',
    cc: 'cc@email.com',
    time: '2025-01-01',
    subject: 'test email6',
    body: testingText,
    isRead: true,
  },
]

export default Page
