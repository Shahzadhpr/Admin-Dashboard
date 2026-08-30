import { BiEdit } from "react-icons/bi"
import Modal from "../../../components/common/Modal"

const EditIcon = () => {

  const Trigger = () => <button className="text-green-500 cursor-pointer text-lg"><BiEdit/></button>

  return (
    <Modal title="تغییر جزئیات محصول" Trigger={<Trigger/>}></Modal>
  )
}

export default EditIcon