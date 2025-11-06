import { Dispatch, SetStateAction } from "react"

const NumberInput = ({ classname, label, value, OnChange, isDisabled = false, children }: NumberInputInputType) =>
  <div className={"flex border-b-2 border-white/20 focus-within:border-white min-h-12 " + classname}>
    <p className="bg-white/20 h-full px-2 flex items-center justify-center rounded w-1/5 text-sm text-center text-white">{label}</p>
    <input
      disabled={isDisabled}
      className={"appearance-none outline-none bg-transparent pl-2 flex-1 disabled:bg-gray-700 text-white"}
      value={value}
      onChange={e => OnChange(parseFloat(e.target.value))}
      type='number'
    />
    {children}
  </div>
type NumberInputInputType = {
  classname?: string,
  label?: string,
  value: string | number,
  OnChange: Dispatch<SetStateAction<number>>,
  isDisabled?: boolean,
  children?: React.ReactNode
}

export default NumberInput
