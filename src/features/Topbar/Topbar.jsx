import SearchInput from "../Topbar/components/SearchInput"
import Notification from "../Topbar/components/Notification"
import Divider from "../Topbar/components/Divider"
import Profile from "../Topbar/components/Profile"

function Topbar() {
  return (
    <div className="w-full relative z-10 h-22 bg-white p-7 border-b-2 primary-border-color flex justify-between items-center *:flex *:justify-between *:items-center *:gap-3">
      <div>
        <SearchInput/>
      </div>

      <div>
        <Notification/>
        <Divider/>
        <Profile/>
      </div>
    </div>
  )
}

export default Topbar