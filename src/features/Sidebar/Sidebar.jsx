import SidebarHeader from "../Sidebar/components/SidebarHeader"
import Menus from "../Sidebar/components/Menus"
import MenuItem from "../../data/menu"

function Sidebar() {
  return (
    <aside className="relative z-10 w-70 min-h-screen bg-white border-l-2 primary-border-color p-6">
      <SidebarHeader/>
      <Menus menus={MenuItem}/>
    </aside>
  )
}

export default Sidebar