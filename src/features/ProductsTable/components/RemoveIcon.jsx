import { HiOutlineTrash } from "react-icons/hi"
import Modal from "../../../components/common/Modal"

const RemoveIcon = ({product, handler}) => {

  const Trigger = () => <button className="cursor-pointer text-red-500 text-lg"><HiOutlineTrash/></button>

  return (
    <Modal 
    title="حذف محصول" 
    Trigger={<Trigger/>}
    onSubmit={() => handler(product.id)}
    >

      <div>
        <p>
          آیا از حذف محصول{" "}
          <kbd className="bg-red-200 text-red-500 rounded-md p-1 font-bold">
            {product.title}
          </kbd>{" "}
          اطمینان دارید؟
        </p>
      </div>
    </Modal>
  )
}

export default RemoveIcon