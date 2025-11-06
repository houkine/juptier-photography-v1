import Image from "next/image"
import { Dispatch, SetStateAction, useState } from "react"
import { BsXCircleFill } from "react-icons/bs"

const PhotoUploader = ({ title, photoList, setPhotoList, onClose }: PhotoUploaderInputType) => {
  const [newFiles, setNewFiles] = useState<File[]>([])

  const HandleFilesOnChange = (fileList: FileList | null): void => {
    if (fileList) {
      const files = []
      for (let index = 0; index < fileList.length; index++) {
        const file = fileList[index];
        files.push(file)
      }
      setNewFiles(files)
    }
  }

  const handleUploadOnClick = () => {
    const newPhotoList = [...photoList]
    for (let index = 0; index < newFiles.length; index++) {
      const photo = newFiles[index];
      newPhotoList.push(photo.name)
    }
    setPhotoList(newPhotoList)
    setNewFiles([])
  }
  const handleClearOnClick = (): void => setNewFiles([])
  const handleSaveOnClick = () => {
    const confirmation = confirm('save your changes?')
    if (confirmation && onClose) {
      onClose()
    } else { }
  }
  const handleResetOnClick = () => {
    setPhotoList([...photoList])
    setNewFiles([])
  }

  return (
    <div className='w-full flex shadow-lg p-4 bg-gray-950 border-2 border-gray-300 rounded-lg'>
      <div className="w-1/3 flex flex-col ">
        <p className="mt-2 text-white text-xl ml-2">{title}</p>
        <ul className="w-full h-2/5 ml-2 mt-2 overflow-y-auto space-y-2 border-2 border-gray-500 p-1">
          {photoList.map((photo, index) => (
            <li className="text-white flex items-center hover:bg-white/20 p-1 cursor-pointer" key={index}>
              <p className="text-white text-sm w-32 flex-1">{photo}</p>
              <p className="text-white text-sm m-auto mr-4">{'2025-10-22'}</p>
              <BsXCircleFill size={20} className="cursor-pointer m-auto mr-0" onClick={() => confirm('confirm delete of pohot ' + photo)} />
            </li>
          ))}
        </ul>

        <div className="flex mt-4 items-center">
          <p className="mt-2 text-white text-xl ml-2">{'Upload Photos:'}</p>
          <input type="file" multiple className="ml-4" onChange={e => HandleFilesOnChange(e.target.files)} />
        </div>
        <ul className="w-full flex-1 ml-2 mt-2 overflow-y-auto space-y-2 border-2 border-gray-500 p-1">
          {newFiles.map((file, index) => (
            <li className="text-white flex items-center hover:bg-white/20 p-1 cursor-pointer" key={index}>
              <p className="text-white text-sm w-32 flex-1">{file.name}</p>
              <p className="text-white text-sm m-auto mr-4">{(file.size / 1024).toFixed(2) + ' KB'}</p>
            </li>
          ))}
        </ul>

        <div className="flex justify-evenly w-full h-6 px-2 mt-4 ">
          <Button title={'Upload'} onClick={handleUploadOnClick} />
          <Button title={'Clear'} onClick={handleClearOnClick} />
        </div>
        <div className="flex justify-evenly w-full h-6 px-2 mt-2 ">
          <Button title={'Reset'} onClick={handleResetOnClick} />
          <Button title={'Save'} onClick={handleSaveOnClick} />
        </div>

      </div>
      <div className="w-2/3 ml-4 border-l-2 border-gray-500 flex relative">
        <Image src={demoImageSrc} alt='' width={480} height={480} className="m-auto border-8 border-white" />
      </div>
      <BsXCircleFill size={20} className="cursor-pointer m-auto -mt-2 -mr-2" onClick={() => onClose && onClose()} />

    </div>
  )
}

type PhotoUploaderInputType = {
  title: string,
  photoList: string[],
  setPhotoList: Dispatch<SetStateAction<string[]>>,
  onClose?: () => void
}

const Button = ({ onClick, title }: ButtonInputType) => <div
  className="flex items-center justify-center w-24 h-full bg-white/10 rounded-md cursor-pointer hover:bg-white/20"
  onClick={onClick}
>
  <p className="m-auto text-sm text-white">{title}</p>
</div>
type ButtonInputType = {
  onClick: () => void,
  title: string
}

const demoImageSrc = '/images/shop_image/demo3.jpg'
export default PhotoUploader