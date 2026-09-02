import { CiGrid41, CiViewTable } from "react-icons/ci"
import SectionTitle from "../../components/common/SectionTitle"
import { useState } from "react"
import ProductsTableView from "../../features/ProductsTableView/ProductsTableView"
import ProductsGridVie from "../../features/ProductsGridView/ProductsGridView"
import { products } from "../../data/products"
import Modal from "../../components/common/Modal"
import AddPruductFildes from "../../features/ProductsTable/components/AddPruductFildes"

function Products() {

  const [layoutType, setLayoutType] = useState("TABEL") //GRID
  const [allProduct, setAllProduct] = useState([...products])
  const [paginationProduct, setPaginationProduct] = useState([])

  const [newProduct, setNewProduct] = useState({
    id: Math.floor(Math.random() * 90) + 10,
    title: "",
    description: "",
    img: "/images/product-img.png",
    isPublished: false,
    price: "",
    entity: "",
  })

  const toggelLayout = () => {
    const layout = layoutType === "TABEL" ? "GRID" : "TABEL"

    setLayoutType(layout)
  }

  const creatNewProdut = () => {
    setAllProduct([...allProduct, newProduct])

    setNewProduct({
      id: crypto.randomUUID(),
      title: "",
      description: "",
      img: "/images/product-img.png",
      isPublished: false,
      price: "",
      entity: "",
    })
  }

  const Buttons = () => {
    return(
      <>
        <button onClick={toggelLayout} className="text-xl size-9 flex-center bg-[#ECEFF3] text-[#818898] *:stroke-1 rounded-md hover:bg-[#e1e4e7] active:bg-[#ECEFF3] duration-150 transition-all primary-border-color border cursor-pointer shadow">
          {layoutType === "TABEL" ? <CiGrid41/> : <CiViewTable/>}
        </button>

        <Modal title="ایجاد محصول جدید" onSubmit={creatNewProdut} Trigger={<button class="text-white primary-bg px-4 py-2 text-sm cursor-pointer hover:opacity-90 rounded-md">ایجاد محصول</button>}>
            <AddPruductFildes newProduct={newProduct} onChange={setNewProduct}/>
        </Modal>
      </>
    )
  }

  return (
    <div className="container">
      <SectionTitle Title="لیست محصولات" Button={Buttons}/>

      <section className="mt-12 w-full! min-w-full!">
          {
            layoutType === "TABEL" ? (
              <ProductsTableView products={allProduct} paginationProduct={paginationProduct} setProduct={setPaginationProduct}/>
            ) : (
              <ProductsGridVie products={allProduct} paginationProduct={paginationProduct} setProduct={setPaginationProduct}/>
            )
          }
        </section>
    </div>
  )
}

export default Products