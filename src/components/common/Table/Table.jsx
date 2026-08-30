import TableHeader from "./components/TableHeader"

const Table = ({header ={title: "لیست محصولات", Buttons: undefined}, Children}) => {
  return (
    <div className="bg-white p-2 border-2 primary-border-color rounded-xl min-w-full! overflow-hidden">
      <TableHeader header={header}/>
      <div>{Children}</div>
    </div>
  )
}

export default Table