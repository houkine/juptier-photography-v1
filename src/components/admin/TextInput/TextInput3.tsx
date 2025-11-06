

const TextInput3 = ({ classname, label, value, OnChange, isDisabled = false, children, type = 'text' }: TextInput3InputType) =>
  <div className={"flex border-b-2 border-white/20 focus-within:border-white min-h-12 " + classname}>
    <p className="bg-white/20 h-full px-2 flex items-center justify-center rounded w-1/5 text-sm text-center text-white">{label}</p>
    <input
      disabled={isDisabled}
      className={"appearance-none outline-none bg-transparent p-2 flex-1 disabled:bg-gray-700 text-white"}
      value={value}
      onChange={e => OnChange(e.target.value)}
      type={type}
    />
    {children}
  </div>
type TextInput3InputType = {
  classname?: string,
  label?: string,
  value: string | number,
  OnChange: (text: string) => void,
  isDisabled?: boolean,
  children?: React.ReactNode
  type?: string,
}

export default TextInput3