import { CiGrid41, CiViewTable } from "react-icons/ci"
import SectionTitle from "../../components/common/SectionTitle"
import { useState } from "react"
import ProductsTableView from "../../features/ProductsTableView/ProductsTableView"
import ProductsGridVie from "../../features/ProductsGridView/ProductsGridView"

function Products() {

  const [layoutType, setLayoutType] = useState("TABEL") //GRID

  const toggelLayout = () => {
    const layout = layoutType === "TABEL" ? "GRID" : "TABEL"

    setLayoutType(layout)
  }

  const Buttons = () => {
    return(
      <>
        <button onClick={toggelLayout} className="text-xl size-9 flex-center bg-[#ECEFF3] text-[#818898] *:stroke-1 rounded-md hover:bg-[#e1e4e7] active:bg-[#ECEFF3] duration-150 transition-all primary-border-color border cursor-pointer shadow">
          {layoutType === "TABEL" ? <CiGrid41/> : <CiViewTable/>}
        </button>

        <button class="text-white primary-bg px-4 py-2 text-sm cursor-pointer hover:opacity-90 rounded-md">ایجاد محصول</button>
      </>
    )
  }

  return (
    <div className="container">
      <SectionTitle Title="لیست محصولات" Button={Buttons}/>

      <section className="mt-20 w-full! min-w-full!">
          {
            layoutType === "TABEL" ? (
              <ProductsTableView/>
            ) : (
              <ProductsGridVie/>
            )
          }
        </section>
    </div>
  )
}

export default Products