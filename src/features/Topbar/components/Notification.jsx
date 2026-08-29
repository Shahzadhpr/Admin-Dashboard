import { BiBell } from "react-icons/bi";

function Notification() {
  return (
    <button className="flex size-10 border primary-border-color rounded-full items-center justify-center cursor-pointer transition-all duration-300 hover:text-white hover:primary-bg hover:scale-105">
      <BiBell className="text-[21px]" />
    </button>
  )
}

export default Notification