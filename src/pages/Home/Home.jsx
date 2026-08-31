import { useState } from "react";
import { useNavigate } from "react-router";
import SectionTitle from "../../components/common/SectionTitle";
import Summaries from "../../features/Summaries/Summaries";
import DetailsCharts from "../../features/DetailsCharts/DetailsCharts";
import ProductsTable from "../../features/ProductsTable/ProductsTable";
import QuickOverview from "../../features/QuickOverview/QuickOverview";

function Home() {
  const [isRedirecting, setIsRedirecting] = useState(false);
  const navigate = useNavigate();

  const toggle = () => {
    setIsRedirecting(!isRedirecting);
  };

  const CTAbutton = () => {
    const clickHandler = () => {
      toggle();
      navigate("/Products");
    };

    return (
      <button
        onClick={clickHandler}
        className="text-white primary-bg px-4 py-2 text-sm cursor-pointer hover:opacity-90 rounded-md"
      >
        {isRedirecting ? "در حال انتقال" : "ایجاد محصول"}
      </button>
    );
  };

  return (
    <div className="container">
      <SectionTitle Title="داشبورد" Button={CTAbutton} />

      <Summaries/>

      <div>
        <DetailsCharts/>
        <ProductsTable/>
        <QuickOverview/>
      </div>
    </div>
  );
}

export default Home;