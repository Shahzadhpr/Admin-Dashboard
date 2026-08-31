import LastProducts from "./components/LastProducts"
import LastUsers from "./components/LastUsers"

const QuickOverview = () => {
  return (
    <div className="mb-20 space-y-10 grid grid-cols-5 *:p-5 *:border *:primary-border-color *:bg-white *:rounded-xl gap-5 *:shadow">
        <LastProducts/>
        <LastUsers/>
    </div>
  )
}

export default QuickOverview