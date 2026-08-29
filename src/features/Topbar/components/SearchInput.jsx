import { MdKeyboardCommandKey } from "react-icons/md";

function SearchInput() {
  return (
    <div className="relative h-10 border rounded-lg primary-border-color w-[288px] flex items-center justify-center duration-150 focus-within:ring-4 focus-within:ring-emerald-500/10 focus-within:border-b-emerald-500/20! text-sm">
      <input
        type="text"
        className="absolute size-full focus-within:outline-none placeholder:text-sm px-4"
        placeholder="جستجو کنید ..."
      />

      <div className="absolute left-4 flex-center gap-1 *:size-5 text-sm *:rounded-sm select-none *:bg-[#ECEFF3] *:flex-center text-[#818898]">
        <span className="cursor-pointer">
          <MdKeyboardCommandKey />
        </span>
        <span className="cursor-pointer">
          <kbd>K</kbd>
        </span>
      </div>
    </div>
  )
}

export default SearchInput