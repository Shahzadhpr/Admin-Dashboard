import { Link } from "react-router"

const OpenInPage = ({itemLength, navigateTo}) => {
  return (
    <div className="mt-8 border-t primary-border-color pt-4 flex items-center justify-between">
        <span className="text-sm text-neutral-500">{itemLength} رکورد یافت شد...</span>

        <Link to={navigateTo || "/"} className="text-white primary-bg px-4 py-2 text-sm cursor-pointer hover:opacity-90 rounded-md">نمایش کامل لیست</Link>
    </div>
  )
}

export default OpenInPage