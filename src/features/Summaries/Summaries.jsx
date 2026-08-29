import { generateSummaries } from "../../utils/home";
import SummaryCart from "./components/SummaryCart";

function Summaries() {
  const summaries = generateSummaries({
    productsLength: 4,
    usersLength: 12,
    ticketsLength: 80,
    adminsLength: 3,
  });

  return (
    <div className="grid gap-3 my-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
      {summaries.map((summary) => (
        <SummaryCart key={summary.id} {...summary} />
      ))}
    </div>
  );
}

export default Summaries;