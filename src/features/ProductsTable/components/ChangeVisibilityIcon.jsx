import { HiEye } from "react-icons/hi"
import Modal from "../../../components/common/Modal"

const ChangeVisibilityIcon = () => {

  const Trigger = () => <button className="text-blue-500 cursor-pointer text-lg"><HiEye/></button>

  return (
    <Modal title="تغییر وضعیت انتشار" Trigger={<Trigger/>}></Modal>
  )
}

export default ChangeVisibilityIcon