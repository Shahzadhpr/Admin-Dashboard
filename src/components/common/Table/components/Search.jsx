import { HiSearch } from "react-icons/hi"

function Search() {
  return (
    <div className="flex items-center gap-1">
      <input className="focus-within:outline-none placeholder:text-sm" type="text" placeholder="جستوجو کنید"></input>
      <HiSearch/>
    </div>
  )
}

export default Search