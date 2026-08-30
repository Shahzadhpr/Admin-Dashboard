const ModalFooter = ({onSubmit, onClose}) => {

    const submitHandler = () => {
        onSubmit()
        onClose()
    }

  return (
    <div className="flex items-center gap-2 *:p-2 *:rounded-md *:text-white *:cursor-pointer *:text-sm">

        <button onClick={submitHandler} className="bg-green-500">
            <span>تایید</span>
        </button>

        <button onClick={onClose} className="bg-red-500">
            <span>انصراف</span>
        </button>
        
    </div>
  )
}

export default ModalFooter