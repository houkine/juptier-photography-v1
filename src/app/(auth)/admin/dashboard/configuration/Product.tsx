'use client'

import { useState, useEffect, useContext, useRef } from "react"
import Image from 'next/image';
import Button1 from "@/components/admin/Button/Button1";
import TextInput1 from "@/components/admin/TextInput/TextInput1";
import { BsXCircleFill, BsPlusCircleFill, BsArrowUpCircle } from "react-icons/bs";
import { ThemeContext } from "../Context";
import TextInput3 from "@/components/admin/TextInput/TextInput3";
import NumberInput2 from "@/components/admin/TextInput/NumberInput2";
import Button2 from "@/components/admin/Button/Button2";


const Product = () => {

  const [productList, setProductList] = useState<ProductType[]>([])
  const [currentProduct, setCurrentProduct] = useState<ProductType | null>(null)

  useEffect(() => {
    setProductList(ProductList)
  }, [])



  return (
    <div className='w-full h-full flex overflow-y-auto '>
      <ul className='w-32 overflow-y-auto'>
        {productList.map((product, index) =>
          <li
            className={'flex m-2 p-2 rounded-md cursor-pointer ' + ((currentProduct && currentProduct.id == product.id) ? 'bg-white/15 ' : 'hover:bg-white/15')}
            key={index}
            onClick={() => setCurrentProduct(product)}
          >
            <p className="text-base text-white word-wrap ">{product.name}</p>
          </li>
        )}
      </ul>
      {currentProduct && <div className="flex-1 flex h-full"><ProductTab product={currentProduct} /></div>}

    </div>
  )
}

const ProductList: ProductType[] = [
  {
    id: '1',
    coverImage: '/images/product_image/image1.jpg',
    images: ['/images/product_image/image1.jpg', '/images/product_image/image2.jpg'],
    name: 'demo product1',
    types: [
      {
        id: '1',
        image: '/images/product_image/image1.jpg',
        name: 'demo product1 - size 1',
        price: 200,
        stock: 10,
      },
      {
        id: '2',
        image: '/images/product_image/image2.jpg',
        name: 'demo product1 - size 2',
        price: 220,
        stock: 5,
      },
    ],
    description: 'this is a demo product',
    delivery: '$10 for delivery',
  },
  {
    id: '2',
    coverImage: '/images/product_image/image3.jpg',
    images: ['/images/product_image/image3.jpg', '/images/product_image/image4.jpg'],
    name: 'demo product2',
    types: [
      {
        id: '1',
        image: '/images/product_image/image3.jpg',
        name: 'demo product2 - size 1',
        price: 200,
        stock: 10,
      },
      {
        id: '2',
        image: '/images/product_image/image3.jpg',
        name: 'demo product2 - size 2',
        price: 220,
        stock: 5,
      },
    ],
    description: 'this is a demo product',
    delivery: '$10 for delivery',
  },
]
type ProductType = {
  id: string,
  coverImage: string,
  images: string[],
  name: string,
  types: ProductTypeType[],
  description: string,
  delivery: string,
}
type ProductTypeType = {
  id: string,
  image: string,
  name: string,
  price: number,
  stock: number,
}

const ProductTab = ({ product }: { product: ProductType }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const theme = useContext(ThemeContext);

  const [coverImage, setCoverImage] = useState<string | null>(null)
  const [images, setImages] = useState<string[]>([])
  const [name, setName] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [delivery, setDelivery] = useState<string>('')
  const [typeList, setTypeList] = useState<ProductTypeType[]>([])

  useEffect(() => {
    setCoverImage(product.coverImage)
    setImages(product.images)
    setName(product.name)
    setDescription(product.description)
    setDelivery(product.delivery)
    setTypeList(product.types)
  }, [product])

  const handleInputOnClick = (files: FileList | null) => {
    if (files && files[0]) {
      const ImageUrl = URL.createObjectURL(files[0])
      setImages([...images, ImageUrl])
    }
  }
  const handleImageListOnDelete = (image: string) =>
    setImages(
      images.filter(_image => image != _image)
    )
  const handleTypeListOnChange = (newType: ProductTypeType, index: number) =>
    setTypeList(
      typeList.map((type, _index) => index == _index ? newType : type)
    )
  const handleTypeListOnDelete = (index: number) =>
    setTypeList(
      typeList.filter((type, _index) => index != _index)
    )
  const handleTypeListOnAdd = () =>
    setTypeList(
      [...typeList,
      {
        id: typeList.length.toString(),
        image: '',
        name: '',
        price: 0,
        stock: 0,
      }
      ]
    )
  const handleSaveOnClick = (): void => {
    alert('save button on click')
  }
  const handleResetOnClick = (): void => {
    setCoverImage(product.coverImage)
    setImages(product.images)
    setName(product.name)
    setDescription(product.description)
    setDelivery(product.delivery)
    setTypeList(product.types)
  }
  const handleClearOnClick = (): void => {
    setCoverImage(null)
    setImages([])
    setName('')
    setDescription('')
    setDelivery('')
    setTypeList([])
  }
  return (
    <div className='w-full h-full flex flex-col overflow-y-auto'>
      <p className="text-xl text-white mt-4">Cover Image</p>
      {coverImage && <Image src={coverImage} alt='' width={400} height={400} />}
      <p className="text-xl text-white mt-4">Images</p>
      <ul className="flex flex-wrap border-2 rounded p-2">
        {images.map((image, index) => <li key={index} className="p-2 flex">
          <Image src={image} alt='' width={200} height={200} />
          <div className="m-auto flex flex-col">
            <BsArrowUpCircle size={30} className='cursor-pointer' title='set as cover image' onClick={() => setCoverImage(image)} />
            <BsXCircleFill size={30} className='mt-4 cursor-pointer' title='delete' onClick={() => handleImageListOnDelete(image)} />

          </div>
        </li>)}
        <li className="w-36 h-36 my-auto border-2 rounded-xl flex cursor-pointer hover:bg-white/15">
          <BsPlusCircleFill size={40} className=" text-white m-auto" onClick={() => fileInputRef.current?.click()} />
          <input
            onChange={e => handleInputOnClick(e.target.files)}
            hidden
            multiple={false} ref={fileInputRef} type='file'
          />
        </li>
      </ul>
      <div className={"flex-1 flex flex-col p-2 " + theme}>
        <TextInput1 label={'Product name'} value={name} OnChange={setName} classname='mt-4 w-full' />
        <p className="text-xl text-white mt-4">Description</p>
        <textarea
          className="w-full h-24 bg-transparent border-2 border-gray-300 rounded-lg text-white text-base"
          value={description} onChange={e => setDescription(e.target.value)}
        />
        <p className="text-xl text-white mt-4">Delivery</p>
        <textarea
          className="w-full h-24 bg-transparent border-2 border-gray-300 rounded-lg text-white text-base"
          value={delivery} onChange={e => setDelivery(e.target.value)}
        />
        <p className="text-xl text-white mt-4">Type List:</p>
        <ul className="space-y-2 mt-2 border-2 border-gray-300 p-2 rounded-lg " >
          {typeList.map((type, index) => (
            <li key={index} className="flex space-x-2 w-auto" >
              {type.image == '' ?
                <div className="w-36 h-36 my-auto border-2 rounded-xl flex cursor-pointer hover:bg-white/15">
                  <BsPlusCircleFill size={40} className=" text-white m-auto" onClick={() => fileInputRef.current?.click()} />
                  <input
                    onChange={e => {
                      if (e.target.files && e.target.files[0]) {
                        const ImageUrl = URL.createObjectURL(e.target.files[0])
                        setImages([...images, ImageUrl])
                        handleTypeListOnChange({ ...type, image: ImageUrl }, index)
                      }
                    }
                    }
                    hidden
                    multiple={false} ref={fileInputRef} type='file'
                  />
                </div>
                :
                <Image src={type.image} alt='' width={400} height={400} />}
              <div className="flex-1 flex flex-col space-y-2">
                <TextInput3 label={'Type name'} value={type.name} OnChange={text => handleTypeListOnChange({ ...type, name: text }, index)} classname='mt-4 w-full' />
                <NumberInput2 label={'Price'} value={type.price} OnChange={text => handleTypeListOnChange({ ...type, price: text }, index)} classname='mt-4 w-full' />
                <NumberInput2 label={'Stock'} value={type.stock} OnChange={text => handleTypeListOnChange({ ...type, stock: text }, index)} classname='mt-4 w-full' />
                <Button2 title={'Delete'} onClick={() => handleTypeListOnDelete(index)} />
              </div>
            </li>
          ))}
          <li className="flex items-center justify-center w-full bg-white/10 rounded-lg p-4 cursor-pointer mt-2 hover:bg-white/20" onClick={handleTypeListOnAdd} >
            <BsPlusCircleFill size={25} className=" text-white" />
            <p className="ml-2 text-lg text-white">Add new type</p>
          </li>
        </ul>

        <div className="flex h-12 px-4 my-4 space-x-4">
          <Button1 title={'Save'} onClick={handleSaveOnClick} />
          <Button1 title={'Reset'} onClick={handleResetOnClick} />
          <Button1 title={'Clear'} onClick={handleClearOnClick} />
        </div>
      </div>
    </div>
  )

}
export default Product