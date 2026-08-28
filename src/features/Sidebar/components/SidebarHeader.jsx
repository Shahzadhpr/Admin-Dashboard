import { Link } from "react-router";

function SidebarHeader() {
  return (
    <div className="pb-6 border-b-2 primary-border-color">
        <Link to="/" className="flex gap-3 items-center">
            <img src="/images/logo.png" className="size-10" alt="logo" />
            <span className="text-lg font-black text-zinc-900">پنل سبز</span>
        </Link>
    </div>
  )
}

export default SidebarHeader