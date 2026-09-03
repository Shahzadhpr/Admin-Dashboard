import { useState } from "react";
import { useNavigate } from "react-router";
import SectionTitle from "../../components/common/SectionTitle";
import Summaries from "../../features/Summaries/Summaries";
import DetailsCharts from "../../features/DetailsCharts/DetailsCharts";
import ProductsTable from "../../features/ProductsTable/ProductsTable";
import QuickOverview from "../../features/QuickOverview/QuickOverview";
import useToggle from "../../hooks/useToggle";
import useTitle from "../../hooks/useTitle";

function Home() {
  useTitle("صفحه‌ی اصلی")
  const [isRedirecting, toggle] = useToggle()
  const navigate = useNavigate();

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