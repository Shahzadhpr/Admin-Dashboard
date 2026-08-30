import Table from "../../components/common/Table/Table"
import TableHead from "../../components/common/Table/components/TableHead"
import TableHeadCell from "../../components/common/Table/components/TableHeadCell"
import TableBody from "../../components/common/Table/components/TableBody"
import TableRow from "../../components/common/Table/components/TableRow"
import Tablecell from "../../components/common/Table/components/Tablecell"
import {productsTableHeadRow} from "../../data/products" 
import {products} from "../../data/products" 
import { Link } from "react-router"
import { MdOpenInNew } from "react-icons/md"
import clsx from "clsx"

function ProductsTable() {
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

  return (
    <div className="mb-20">
      <Table header={{ title: "لیست محصولات", Buttons: Button }}>
        <TableHead>
          {productsTableHeadRow.map((item, index) => (
            <TableHeadCell key={index}>{item}</TableHeadCell>
          ))}
        </TableHead>

        <TableBody>
          {products.map((item) => (
            <TableRow key={item.id}>
              <Tablecell>{item.id}</Tablecell>  {/* {item.id.slice(0,10)}... */}
              <Tablecell>{item.title}</Tablecell>

              <Tablecell>
                <p className={clsx(item.isPublished ? "success-badge" : "danger-badge", "badge")}>
                    {item.isPublished ? "فعال" : "غیرفعال"}
                </p>
              </Tablecell>

              <Tablecell>
                <p>{item.price.toLocaleString()} تومان</p>
              </Tablecell>

              <Tablecell>{item.entity}</Tablecell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default ProductsTable