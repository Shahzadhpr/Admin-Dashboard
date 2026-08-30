import { HiEye } from "react-icons/hi";
import Modal from "../../../components/common/Modal";
import clsx from "clsx";

const ChangeVisibilityIcon = ({product, handler}) => {
  const Trigger = () => (
    <button className="text-blue-500 cursor-pointer text-lg">
      <HiEye />
    </button>
  );

  return (
    <Modal
      title="تغییر وضعیت انتشار"
      Trigger={<Trigger />}
      onSubmit={() => handler(product.id)}
      > 

        <div>
          <p>
            آیا از
            <span className={clsx(product.isPublished ? "text-red-500" : "text-green-500")}>
              <strong>{product.isPublished ? " غیرفعال  " : " فعال "}</strong>
            </span>
            کردن این محصول اطمینان دارید؟
          </p>
        </div>

    </Modal>
  );
};

export default ChangeVisibilityIcon