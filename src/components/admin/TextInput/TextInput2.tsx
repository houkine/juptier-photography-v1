import { Dispatch } from "react"

const TextInput2 = ({ classname, label, value, OnChange, children, type = 'text' }: TextInput2InputType) =>
  <div className={"flex border-b-2 border-white/20 focus-within:border-white h-12 " + classname}>
    <p className="bg-white/20 h-full px-2 flex items-center justify-center rounded w-1/5">{label}</p>
    <input
      className={"appearance-none outline-none bg-transparent pl-2 flex-1"}
      value={value}
      onChange={e => OnChange(e.target.value)}
      type={type}
    />
    {children}
  </div>
type TextInput2InputType = {
  classname?: string,
  label?: string,
  value: string | number,
  OnChange: Dispatch<string>,
  children?: React.ReactNode
  type?: string,
}

export default TextInput2
