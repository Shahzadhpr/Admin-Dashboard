import Table from "../../components/common/Table/Table"
import TableHead from "../../components/common/Table/components/TableHead"
import TableHeadCell from "../../components/common/Table/components/TableHeadCell"
import TableBody from "../../components/common/Table/components/TableBody"
import TableRow from "../../components/common/Table/components/TableRow"
import Tablecell from "../../components/common/Table/components/Tablecell"
import { Link } from "react-router"
import { MdOpenInNew } from "react-icons/md"

function ProductsTable() {

    const Button = () => {
        return (
          <Link
            to="/Products"
            className="flex items-center gap-1 underline text-blue-600 hover:text-blue-700 text-sm">
            <span>صفحه محصولات</span>
            <MdOpenInNew />
          </Link>
        );
    }
    
    return (
      <div className="mb-20">
          <Table header ={{title: "لیست محصولات", Buttons: Button}}>
              {/* <TableHead>
                  <TableHeadCell/>
              </TableHead>  
              <TableBody>
                  <TableRow>
                      <Tablecell/>
                  </TableRow>
              </TableBody> */}
          </Table>
      </div>
    )
}

export default ProductsTable