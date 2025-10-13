import { Dispatch, SetStateAction } from "react"
import { BsCaretLeftFill, BsCaretRightFill } from "react-icons/bs";
const Pagenation = ({ take, handleTakeOnChange, takeOptions, recordStartIndex, recordEndIndex, totalRecords, className }: PagenationInputType) => {
  const _take = take || 5
  const _className = className || ''
  const _takeOptions = takeOptions || [1, 2, 5]

  return (
    <div className={_className}>
      <p>Rows Per Page:</p>
      <select
        value={_take} onChange={e => handleTakeOnChange && handleTakeOnChange(parseInt(e.target.value))}
        className="text-lg outline-none bg-transparent ml-4 cursor-pointer w-12 border-b-2 border-gray-300"
      >
        {_takeOptions.map((takeOption, index) => <option value={takeOption} key={index} className=" bg-black border-none text-center">{takeOption}</option>)}
      </select>
      <BsCaretLeftFill className="ml-8 cursor-pointer" />
      <p className="ml-4 w-10 text-center">{recordStartIndex + '-' + recordEndIndex}</p>
      <BsCaretRightFill className="ml-4 cursor-pointer" />
      <p className="ml-8 w-12">{'total:' + totalRecords}</p>
    </div>
  )
}
type PagenationInputType = {
  take: number,
  handleTakeOnChange?: Dispatch<SetStateAction<number>>,
  takeOptions?: number[],
  recordStartIndex?: number,
  recordEndIndex?: number,
  totalRecords?: number,
  className?: string,
}
// const SelectClassname = 'text-sm appearance-none outline-none bg-transparent ml-4 border-b-2 border-gray-400 text-white'
export default Pagenation