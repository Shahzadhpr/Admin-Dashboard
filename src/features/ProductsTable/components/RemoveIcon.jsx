import { HiOutlineTrash } from "react-icons/hi"
import Modal from "../../../components/common/Modal"

const RemoveIcon = () => {

  const Trigger = () => <button className="cursor-pointer text-red-500 text-lg"><HiOutlineTrash/></button>

  return (
    <Modal title="حذف محصول" Trigger={<Trigger/>}></Modal>
  )
}

export default RemoveIcon