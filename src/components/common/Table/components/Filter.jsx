import { HiFilter } from "react-icons/hi"

function Filter() {
  return (
    <button className="flex gap-1 items-center border-2 primary-border-color *:text-sm">
      <HiFilter/>
      <span>فیلتر</span>
    </button>
  )
}

export default Filter