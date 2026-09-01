import Pagination from "../../components/common/Pagination"
import ProductCard from "./components/ProductCard"

const ProductsGridView = ({products, paginationProduct, setProduct}) => {
  return (
    <>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-3">
        {paginationProduct.map(product => {
          return <ProductCard key={product.id} product={product}/>
        })}
      </div>

      <div className="mt-12">
        <Pagination item={products} itemPerPages={8} setItem={setProduct}/>
      </div>
    </>
  )
}

export default ProductsGridView