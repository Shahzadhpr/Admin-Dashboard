import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { generateSummaries } from "../../utils/home";

function DetailsCharts() {

    const data = generateSummaries({
        productsLength: 160,
        usersLength: 343,
        ticketsLength: 45,
        adminsLength: 22,
    });

    return (
      <div className="bg-white rounded-xl border-2 primary-border-color py-6 pr-10 pl-4">
      <p className="font-IRANSansX text-zinc-900 font-bold text-lg">
        آمار کلی داشبورد
      </p>

      <div className="w-full h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            width={80}
            height={40}
            barCategoryGap="20%"
          >
            <Bar
              dataKey="value"
              fill="#82ca9d"
              radius={[10, 10, 0, 0]}
            />

            <XAxis dataKey="title" />
            <YAxis tickMargin={10}/>
            <Tooltip />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
    )
}

export default DetailsCharts