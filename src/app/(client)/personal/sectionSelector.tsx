'use client'

import React, { MouseEventHandler } from 'react'

const SectionSelector = ({ title, onClick, status }: SectionSelectorType) => {
  return (
    <div
      className={'w-1/2 h-12 flex mt-2 justify-center items-center hover:text-white hover:font-bold text-xl tracking-wider ' + (status ? 'text-white font-bold' : 'text-gray-200 cursor-pointer')}
      onClick={onClick}
    >
      {title}
    </div>
  )
}

type SectionSelectorType = {
  title: string,
  status: boolean,
  onClick: MouseEventHandler<HTMLDivElement>,
}
export default SectionSelector
