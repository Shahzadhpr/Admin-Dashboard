import { generateSummaries } from "../../utils/home";
import SummaryCart from "./components/SummaryCart";

function Summaries() {
  const summaries = generateSummaries({
    productsLength: 49,
    usersLength: 374,
    ticketsLength: 80,
    adminsLength: 3,
  });

  return (
    <div className="grid gap-3 mt-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
      {summaries.map((summary) => (
        <SummaryCart key={summary.id} {...summary} />
      ))}
    </div>
  );
}

export default Summaries;