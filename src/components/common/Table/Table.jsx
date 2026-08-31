import Pagination from "../Pagination"
import TableHeader from "./components/TableHeader"

const Table = (
  { header = { title: "لیست محصولات", Buttons: undefined }, 
    pagination = { item: null, setItem: null, itemPerPages: null, }, children, }
  ) => {
  return (
    <div className="bg-white p-2 border-2 primary-border-color rounded-xl min-w-full! overflow-hidden">
      <TableHeader header={header}/>
      <div>{children}</div>

      <Pagination
        item={pagination.item}
        setItem={pagination.setItem}
        itemPerPages={pagination.itemPerPages}
      />
    </div>
  )
}

export default Table