import { FaEllipsisV } from "react-icons/fa"
import { Link } from "react-router"

const ProductCart = ({ title, description, price, img }) => {
  return (
    <article className="flex duration-150 bg-white shadow hover:bg-gradient-to-t hover:from-neutral-100/70 hover:scale-101 border primary-border-color p-3 rounded-md h-30 items-center grow gap-3 cursor-pointer">
      <div className="size-20! min-w-20 max-w-20">
        <img
          src={img}
          alt={title}
          className="size-full rounded-lg object-cover"
        />
      </div>
    
      <div className="h-full flex justify-between flex-col flex-1 min-w-0">
        <div className="space-y-1">
          <p className="text-sm font-bold text-zinc-800 line-clamp-1">
            {title}
          </p>
    
          <p className="text-xs text-neutral-500 line-clamp-1">
            {description}
          </p>
        </div>
    
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span className="text-sm font-bold">
              {Number(price).toLocaleString()}
            </span>
    
            <span className="text-xs text-neutral-500">
              تومان
            </span>
          </div>
    
          <Link
            to="/products"
            className="text-sm text-neutral-400 hover:text-neutral-600"
          >
            <FaEllipsisV />
          </Link>
        </div>
      </div>
    </article>
  )
}

export default ProductCart