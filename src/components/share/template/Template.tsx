'use client'
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react"
import Image from 'next/image';
import { BsPlusCircleFill, BsXCircleFill } from "react-icons/bs";

enum TemplateModeEnum {
  Dashboard,
  Client,
}

enum ImageSizeEnum {
  W3_H2,
  W2_H3,
}

type ImageType = {
  id: string,
  src: string,
  file?: Blob,
}

const DASHBOARD_PHOTO_WIDTH = 300
const CLIENT_PHOTO_WIDTH = 300
const HEIGHT = 0

const DEFAULT_TEMPLATE_PHOTO_W3_H2 = '/images/gallery_image/3：2.jpg'
const DEFAULT_TEMPLATE_PHOTO_W2_H3 = '/images/gallery_image/2：3.jpg'



const Template = ({ albumId = '', mode = TemplateModeEnum.Client }: ImageInputType) => {
  const [imageList1, setImageList1] = useState<ImageType[]>([])
  const [imageList2, setImageList2] = useState<ImageType[]>([])
  const [imageList3, setImageList3] = useState<ImageType[]>([])
  useEffect(() => {
    const imageLists = defaultImageLists1
    setImageList1(imageLists.imageList1)
    setImageList2(imageLists.imageList2)
    setImageList3(imageLists.imageList3)
  }, [albumId])

  return (
    <div className='w-full h-full flex flex-col'>
      <div className='w-full flex h-16 '>
        <p className="text-2xl mt-4" title="only we can see this">Template:&nbsp;</p>
      </div>
      <div className="w-full flex space-x-2 mt-4">
        <ImageList imageList={imageList1} onChange={setImageList1} mode={mode} />
        <ImageList imageList={imageList2} onChange={setImageList2} mode={mode} />
        <ImageList imageList={imageList3} onChange={setImageList3} mode={mode} />

      </div>
    </div>
  )
}
type ImageInputType = {
  albumId?: string,
  mode?: TemplateModeEnum,
}
const ImageList = ({ imageList, onChange, mode = TemplateModeEnum.Client }: ImageListInputType) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const AddPhotoOnClick = (files: FileList | null) => {
    if (files && files[0]) {
      const ImageUrl = URL.createObjectURL(files[0])
      const newImageList = [...imageList]
      newImageList.push({
        id: imageList.length.toString(),
        src: ImageUrl,
        file: files[0],
      })
      onChange(newImageList)
    }
  }
  const ImageOnChange = (index: number, action: PhotoAction, newImage?: ImageType) => {
    let newImageList: ImageType[] = []
    switch (action) {
      case PhotoAction.Delete:
        for (let _index = 0; _index < imageList.length; _index++) {
          if (_index != index) newImageList.push(imageList[_index])
        }
        break;
      case PhotoAction.Update:
        newImageList = [...imageList]
        if (newImage) newImageList[index] = newImage
        break;
      default:
        break;
    }
    onChange(newImageList)
  }
  return (
    <ul className="space-y-2">
      {imageList.map((image, index) => <li className="flex" key={index} >
        <TemplateImage image={image} ImageOnChange={ImageOnChange} width={DASHBOARD_PHOTO_WIDTH} height={HEIGHT} mode={mode} index={index} />
      </li>)}
      {mode == TemplateModeEnum.Dashboard &&
        <li
          className="flex items-center justify-center w-full bg-white/10 rounded-lg p-4 cursor-pointer mt-2 hover:bg-white/20"
          onClick={() => fileInputRef.current?.click()}
        >
          <BsPlusCircleFill size={25} className=" text-white" />
          <p className="ml-2 text-lg text-white">Add new Photo</p>
          <input onChange={e => AddPhotoOnClick(e.target.files)} multiple={false} ref={fileInputRef} type='file' hidden />

        </li>}
    </ul>
  )
}
type ImageListInputType = {
  imageList: ImageType[],
  onChange: Dispatch<SetStateAction<ImageType[]>>,
  mode?: TemplateModeEnum,
}
enum PhotoAction {
  Add,
  Delete,
  Update,
}
const TemplateImage = ({ image, ImageOnChange, width, height, mode, index }: TemplateImageInputType) => {
  const ImageClassname = mode == TemplateModeEnum.Dashboard ? 'cursor-pointer' : ''
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputOnClick = (files: FileList | null) => {
    if (files && files[0]) {
      const ImageUrl = URL.createObjectURL(files[0])
      ImageOnChange(index, PhotoAction.Update, {
        id: index.toString(),
        src: ImageUrl,
        file: files[0],
      })
    }
  }

  const PhotoDeleteOnClick = () => {
    const confirmation = confirm('Want to delete this photo?')
    if (confirmation) {
      ImageOnChange(index, PhotoAction.Delete)
    }
  }
  return (
    <div className="flex relative">
      <input onChange={e => handleInputOnClick(e.target.files)} multiple={false} ref={fileInputRef} type='file' hidden />
      <Image src={image.src} alt='' width={width} height={height}
        onClick={() => mode == TemplateModeEnum.Dashboard && fileInputRef.current?.click()} className={'z-10 ' + ImageClassname} />
      <BsXCircleFill size={30} className="cursor-pointer text-white absolute top-0 right-0 z-20" onClick={PhotoDeleteOnClick} />

    </div>
  )
}
type TemplateImageInputType = {
  image: ImageType,
  ImageOnChange: (index: number, action: PhotoAction, newImage?: ImageType) => void,
  width: number,
  height: number,
  mode: TemplateModeEnum,
  index: number,
}

const defaultImageLists1 = {
  imageList1: [
    {
      id: '1-1',
      src: DEFAULT_TEMPLATE_PHOTO_W2_H3,
    },
    {
      id: '1-2',
      src: DEFAULT_TEMPLATE_PHOTO_W2_H3,
    },
  ],
  imageList2: [
    {
      id: '2-1',
      src: DEFAULT_TEMPLATE_PHOTO_W3_H2,
    },
    {
      id: '2-2',
      src: DEFAULT_TEMPLATE_PHOTO_W2_H3,
    },
    {
      id: '2-3',
      src: DEFAULT_TEMPLATE_PHOTO_W3_H2,
    },
  ],
  imageList3: [
    {
      id: '3-1',
      src: DEFAULT_TEMPLATE_PHOTO_W3_H2,
    },
    {
      id: '3-2',
      src: DEFAULT_TEMPLATE_PHOTO_W3_H2,
    },
    {
      id: '3-3',
      src: DEFAULT_TEMPLATE_PHOTO_W2_H3,
    },
  ],
}
export {
  TemplateModeEnum,
  ImageSizeEnum,
  TemplateImage,
  Template,
  DASHBOARD_PHOTO_WIDTH,
  CLIENT_PHOTO_WIDTH,
  HEIGHT,
  DEFAULT_TEMPLATE_PHOTO_W3_H2,
  DEFAULT_TEMPLATE_PHOTO_W2_H3,
}
