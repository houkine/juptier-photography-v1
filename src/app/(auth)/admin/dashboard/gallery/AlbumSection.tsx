'use client'
import { useEffect, useState } from "react";
import NumberInput from "@/components/admin/TextInput/NumberInput";
import TextInput1 from "@/components/admin/TextInput/TextInput1";
import { BsPlusCircleFill } from "react-icons/bs";
import { Template, TemplateModeEnum } from "@/components/share/template/Template";

const AlbumSection = () => {

  const [albumList, setAlbumList] = useState<AlbumType[]>([])
  const [currentAlbum, setCurrentAlbum] = useState<AlbumType | null>(null)
  const [isAddingAlbum, setIsAddingAlbum] = useState<boolean>(false)

  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [sequence, setSequence] = useState<number>(0)
  const [currentTemplate, setCurrentTemplate] = useState<number>(1)

  useEffect(() => {
    setAlbumList(AlbumList)
  }, [])

  const AddAlbum = () => {
    const newAlbum = {
      id: 'default',
      title: '',
      description: '',
      coverImage: '',
      sequence: albumList.length,
      currentTemplate: 1,
    }
    setCurrentAlbum(newAlbum)
    setIsAddingAlbum(true)
  }
  const HandleAlbumOnClick = (album: AlbumType): void => {
    if (album != currentAlbum) {
      setCurrentAlbum(album)
      setIsAddingAlbum(false)

    }
  }
  return (
    <div className='w-full h-full flex '>
      <ul className='w-48 h-full overflow-y-auto'>
        {albumList.map((album, index) =>
          <li
            className={'flex m-2 p-2 rounded-md cursor-pointer ' + (currentAlbum == album ? 'bg-white/15 ' : 'hover:bg-white/15')}
            key={index}
            onClick={() => HandleAlbumOnClick(album)}
          >
            <p className="text-lg text-white word-wrap ">{album.title}</p>
          </li>
        )}
        <li
          className={'flex m-2 p-2 rounded-md cursor-pointer border-2 border-white/15 ' + (isAddingAlbum ? 'bg-white/15 ' : 'hover:bg-white/15')}
          onClick={AddAlbum}
        >
          <BsPlusCircleFill size={20} className='m-auto' />
        </li>
      </ul>
      <div className={"flex-1 h-full flex flex-col p-3 rounded-lg "}>
        <p className='text-xl text-white'>Details</p>
        <TextInput1 label={'title'} value={title} OnChange={setTitle} classname='mt-2 w-full' />
        <NumberInput label={'sequence'} value={sequence} OnChange={setSequence} classname='mt-2 w-full' />
        <NumberInput label={'current Template'} value={currentTemplate} OnChange={setCurrentTemplate} classname='mt-2 w-full' />
        <p className="text-2xl mt-4" title="only we can see this">description</p>
        <textarea
          className="w-full h-24 bg-transparent border-2 border-gray-300 rounded-lg"
          value={description} onChange={e => setDescription(e.target.value)}
        />
        <div className="flex h-full mt-4"><Template mode={TemplateModeEnum.Dashboard} /></div>
      </div>

    </div>
  )
}

type AlbumType = {
  id: string,
  title: string,
  description: string,
  coverImage: string,
  sequence: number,
  currentTemplate: number,
}
const AlbumList: AlbumType[] = [
  {
    id: '1',
    title: 'The Spit',
    description: 'this is the spit',
    coverImage: '',
    sequence: 1,
    currentTemplate: 1,
  },
  {
    id: '2',
    title: 'Surface',
    description: 'this is surface',
    coverImage: '',
    sequence: 2,
    currentTemplate: 1,
  },
  {
    id: '3',
    title: 'Boderbeach',
    description: 'this is boderbeach',
    coverImage: '',
    sequence: 3,
    currentTemplate: 1,
  },
]
export default AlbumSection