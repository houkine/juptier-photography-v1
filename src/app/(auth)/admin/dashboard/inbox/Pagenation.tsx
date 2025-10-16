
import { BsCaretLeftFill, BsCaretRightFill } from "react-icons/bs";
const Pagenation = ({ recordStartIndex, recordEndIndex, totalRecords, className, PreTabOnClick, PostTabOnClick }: PagenationInputType) => {
  const _className = className || ''

  return (
    <div className={_className}>
      <BsCaretLeftFill className="ml-8 cursor-pointer" onClick={PreTabOnClick} />
      <p className="ml-4 w-10 text-center">{recordStartIndex + '-' + recordEndIndex}</p>
      <BsCaretRightFill className="ml-4 cursor-pointer" onClick={PostTabOnClick} />
      <p className="ml-8 w-12">{'total:' + totalRecords}</p>
    </div>
  )
}
type PagenationInputType = {
  recordStartIndex?: number,
  recordEndIndex?: number,
  totalRecords?: number,
  className?: string,
  PreTabOnClick?: () => void,
  PostTabOnClick?: () => void,
}
export default Pagenation