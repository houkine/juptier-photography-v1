import { useState } from "react"
import { BsSearchHeart, BsArrowRightCircleFill } from "react-icons/bs";

const SearchBar = ({ className = '', selectValueList, SearchOnClick }: SearchBarInputType) => {
  const [keywords, setKeywords] = useState<string>('')
  const [selectedValue, setSelectedValue] = useState<string>('')

  return (
    <div className={'flex h-10 border-2 border-gray-300 rounded ' + className}>
      <select
        className="text-sm text-center outline-none bg-white/20 w-24 cursor-pointer "
        value={selectedValue} onChange={e => setSelectedValue(e.target.value)}
      >
        {selectValueList.map((selectValueOption, index) => <option value={selectValueOption} key={index} className=" bg-black border-none text-center">{selectValueOption}</option>)}
      </select>
      <BsSearchHeart size={20} className="my-auto ml-2" />
      <input
        className="text-base text-white appearance-none outline-none h-8 m-auto ml-2 w-48 bg-transparent "
        type="text" value={keywords} onChange={e => setKeywords(e.target.value)}
        placeholder="search..."
      />
      <BsArrowRightCircleFill
        size={20}
        className="my-auto mx-2"
        onClick={() => SearchOnClick(selectedValue, keywords)}
      />

    </div>
  )
}
type SearchBarInputType = {
  className?: string,
  selectValueList: string[],
  SearchOnClick: (selectedValue: string, keywords: string) => void,
}
// const SelectClassname = 'text-sm appearance-none outline-none bg-transparent ml-4 border-b-2 border-gray-400 text-white'
export default SearchBar