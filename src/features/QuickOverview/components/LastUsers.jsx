import SectionTitle from "../../../components/common/SectionTitle"
import OpenInPage from "./OpenInPage"
import users from "../../../data/users"
import UserCard from "./UserCard"

const LastUsers = () => {
  return (
    <div className="col-span-2 max-h-max">
        <SectionTitle Title="آخرین کاربران" className="text-sm sm:text-base md:text-lg lg:text-xl"/>

        <div>
            {
                users.slice(-6).map(user => {
                   return <UserCard key={user.id} {...user}/>
                })
            }
        </div>

        <OpenInPage itemLength={users.length} navigateTo="/Users"/>
    </div>
  )
}

export default LastUsers