import SectionTitle from "../../../components/common/SectionTitle"
import { products } from "../../../data/products"
import OpenInPage from "./OpenInPage"
import ProductCart from "./ProductCart"

const LastProducts = () => {
  return (
    <div className="col-span-3">
      <SectionTitle Title="آخرین محصول" className="text-sm sm:text-base md:text-lg lg:text-xl"/> 

      <div className="space-y-3 mt-5">
        {products.slice(-4).map(product => {
          return <ProductCart key={product.id} {...product}/>
        })}
      </div>

      <OpenInPage itemLength={products.length} navigateTo="/Products"/>
    </div>
  )
}

export default LastProducts