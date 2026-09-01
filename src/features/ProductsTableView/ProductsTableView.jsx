import { useState } from "react"
import TableBody from "../../components/common/Table/components/TableBody"
import Tablecell from "../../components/common/Table/components/Tablecell"
import TableHead from "../../components/common/Table/components/TableHead"
import TableHeadCell from "../../components/common/Table/components/TableHeadCell"
import TableRow from "../../components/common/Table/components/TableRow"
import Table from "../../components/common/Table/Table"
import {productsAllTableHeadRow} from "../../data/products"
import clsx from "clsx"
import RemoveIcon from "../ProductsTable/components/RemoveIcon"
import ChangeVisibilityIcon from "../ProductsTable/components/ChangeVisibilityIcon"
import EditIcon from "../ProductsTable/components/EditIcon"

const ProductsTableView = ({products, setProduct, paginationProduct}) => {

  const removeModal = (id) => {
    const newProduct = paginationProduct.filter(product => product.id !== id)
    setProduct(newProduct)
  }

  const changeVisibillity = (id) => {
    const newProduct = paginationProduct.map(product => {
      return product.id === id ? {...product, isPublished: !product.isPublished} : {...product}
    })

    setProduct(newProduct)

  }

  return (
    <div>
      <Table
      header={{ title: "لیست محصولات"}}
      pagination={{item: products, setItem: setProduct, itemPerPages: 10}}>

        <TableHead>
          {productsAllTableHeadRow.map(product => {
              return <TableHeadCell key={product.id}>{product}</TableHeadCell>
          })}
        </TableHead>
  
        <TableBody>
          {paginationProduct.map((product) => (
            <TableRow key={product.id}>
              <Tablecell>{product.id}</Tablecell>  {/* {item.id.slice(0,10)}... */}
              <Tablecell>{product.title}</Tablecell>
              <Tablecell>
                <img src={product.img} alt={product.title} className="w-[100px] border primary-border-color object-cover" />
              </Tablecell>

              <Tablecell>
                <p className={clsx(product.isPublished ? "success-badge" : "danger-badge", "badge")}>
                    {product.isPublished ? "فعال" : "غیرفعال"}
                </p>
              </Tablecell>

              <Tablecell>
                <p>{product.price.toLocaleString()} تومان</p>
              </Tablecell>

              <Tablecell>{product.entity}</Tablecell>
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
  )
}

export default ProductsTableView