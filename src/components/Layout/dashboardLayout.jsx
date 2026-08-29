import { Outlet } from "react-router"
import Sidebar from "../../features/Sidebar/Sidebar"
import Topbar from "../../features/Topbar/Topbar"
import BackgroundOverlay from "../common/BackgroundOverlay"

function dashboardLayout() {
  return (
    
    <main id="root" className="flex">

        <Sidebar/>

        <section className="grow *:px-6">
            <Topbar/>
            
            <div id="content" className="mt6 container m-auto">
                <div className="relative z-10">
                  <Outlet/>
                </div>
            </div>

            <BackgroundOverlay/>
        </section>

    </main>
    
  )
}

export default dashboardLayout