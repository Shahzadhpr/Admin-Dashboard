import Table from "../../components/common/Table/Table"
import TableHead from "../../components/common/Table/components/TableHead"
import TableHeadCell from "../../components/common/Table/components/TableHeadCell"
import TableBody from "../../components/common/Table/components/TableBody"
import TableRow from "../../components/common/Table/components/TableRow"
import Tablecell from "../../components/common/Table/components/Tablecell"
import RemoveIcon from "./components/RemoveIcon"
import ChangeVisibilityIcon from "./components/ChangeVisibilityIcon"
import EditIcon from "./components/EditIcon"
import {productsTableHeadRow} from "../../data/products" 
import {products} from "../../data/products" 
import { Link } from "react-router"
import { MdOpenInNew } from "react-icons/md"
import clsx from "clsx"
import { useState } from "react"

function ProductsTable() {

  const[lastproduct, setLastproduct] = useState([...products])
 
  const Button = () => {
    return (
      <Link
        to="/Products"
        className="flex items-center gap-1 underline text-blue-600 hover:text-blue-700 text-sm"
      >
        <span>صفحه محصولات</span>
        <MdOpenInNew />
      </Link>
    );
  };

  const removeModal = (id) => {
    const newProduct = lastproduct.filter(product => product.id !== id)
    setLastproduct(newProduct)
  }

  const changeVisibillity = (id) => {
    const newProduct = lastproduct.map(product => {
      return product.id === id ? {...product, isPublished: !product.isPublished} : {...product}
    })

    setLastproduct(newProduct)

  }

  return (
    <div className="mb-20">
      <Table 
      header={{ title: "لیست محصولات", Buttons: Button }} 
      pagination={{item: products, setItem: setLastproduct, itemPerPages: 4}}>

        <TableHead>
          {productsTableHeadRow.map((item, index) => (
            <TableHeadCell key={index}>{item}</TableHeadCell>
          ))}
        </TableHead>

        <TableBody>
          {lastproduct.map((product) => (
            <TableRow key={product.id}>
              <Tablecell>{product.id}</Tablecell>  {/* {item.id.slice(0,10)}... */}
              <Tablecell>{product.title}</Tablecell>

              <Tablecell>
                <p className={clsx(product.isPublished ? "success-badge" : "danger-badge", "badge")}>
                    {product.isPublished ? "فعال" : "غیرفعال"}
                </p>
              </Tablecell>

              <Tablecell>
                <p>{product.price.toLocaleString()} تومان</p>
              </Tablecell>

              <Tablecell>
                <div className="flex items-center gap-2">
                  <RemoveIcon product={product} handler={removeModal}/>
                  <ChangeVisibilityIcon product={product} handler={changeVisibillity}/>
                  <EditIcon product={product}/>
                </div>
              </Tablecell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default ProductsTable