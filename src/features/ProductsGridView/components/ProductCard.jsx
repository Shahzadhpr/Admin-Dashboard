import clsx from "clsx";
import { BiShoppingBag } from "react-icons/bi";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { MdVisibility } from "react-icons/md";

const ProductCard = ({ product }) => {
  return (
    <article className="group w-full overflow-hidden rounded-xl border primary-border-color bg-white p-4 space-y-3 transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10">
      
      <header className="h-[200px] w-full overflow-hidden rounded-lg">
        <img
          src={product.img}
          className="size-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
          alt={product.title}
        />
      </header>

      <main className="space-y-2">
        <h2 className="font-bold! line-clamp-2 transition-colors duration-300 group-hover:text-blue-600">
          {product.title}
        </h2>

        <p className="h-[39px] text-[13px] text-neutral-500 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between gap-1">
          <div
            className={clsx(
              "badge transition-transform duration-300 group-hover:scale-105",
              product.isPublished
                ? "success-badge"
                : "danger-badge"
            )}
          >
            {product.isPublished ? (
              <>
                <BsEye />
                 فعال
              </>
            ) : (
              <>
                <BsEyeSlash />
               غیرفعال
              </>
            )}
          </div>

          <div className="inline-flex items-center gap-1 text-xs text-zinc-600">
            <BiShoppingBag className="size-4" />

            <span>تعداد موجودی:</span>

            <span className="font-semibold">
              {product.entity}
            </span>
          </div>
        </div>
      </main>

      <footer className="flex items-center justify-between">
        <div className="inline-flex items-center gap-1">
          <span className="text-lg font-black">
            {product.price.toLocaleString()}
          </span>

          <span className="text-xs text-zinc-500">
            تومان
          </span>
        </div>

        <div className="flex cursor-pointer items-center gap-1 text-lg transition-all duration-300 group-hover:text-blue-600">
            <div className="flex items-center gap-2 text-lg text-zinc-500">
                <button
                  type="button"
                  className="cursor-pointer transition-colors hover:text-blue-600"
                >
                  <FiEdit2 />
                </button>

                <button
                  type="button"
                  className="cursor-pointer transition-colors hover:text-green-600"
                >
                  <MdVisibility />
                </button>

                <button
                  type="button"
                  className="cursor-pointer transition-colors hover:text-red-500"
                >
                  <FiTrash2 />
                </button>
            </div>
        </div>
      </footer>
    </article>
  );
};

export default ProductCard;