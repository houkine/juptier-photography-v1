import React, { MouseEventHandler } from 'react'

const SquareSelectOption = ({ title, IsSelected = false, onClick, theme = Theme.DARK }: input) => {


    return (
        <div onClick={onClick}
            className={classNameFix +
                (IsSelected ? ' border-blue-500 ' : ' border-gray-300 hover:border-blue-500 ') +
                (theme == Theme.LIGHT ? ' text-black' : ' text-white')
            }
        >
            {title}
        </div>
    )
}
const classNameFix = 'min-w-24 px-2 h-12 flex justify-center items-center border-2 cursor-pointer rounded-lg '
type input = {
    title: string,
    IsSelected: boolean,
    onClick: MouseEventHandler<HTMLDivElement>,
    theme: Theme
}
export enum Theme {
    LIGHT,
    DARK,
}

export default SquareSelectOption
