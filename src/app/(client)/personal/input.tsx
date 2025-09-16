'use client'
import React from 'react'

const Input = ({ label, value, onChange }: InputType) => {
    return (
        <div className=" mt-6 border-b-2 border-black/30 hover:border-black/60 focus-within:border-black/60 w-2/3 flex">
            <label htmlFor='e-mail' className="text-gray-300 text-lg tracking-wider">{label}</label>
            <input
                className="appearance-none flex-grow text-base w-auto pl-2 ml-4 tracking-wider cursor-pointer outline-none  text-white bg-transparent "
                id='e-mail' value={value} onChange={e => onChange(e.target.value)}
            />
        </div>
    )
}

type InputType = {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    label: string, value: string, onChange: Function
}
export default Input
