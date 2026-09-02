import clsx from "clsx"
import { useEffect, useState } from "react"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

const Pagination = ({item, setItem, itemPerPages}) => {

  const [currentPages, setCurrentPages] = useState(1)
  const pageCount = Math.ceil(item.length / itemPerPages)

  useEffect(() => {
    const startIndex = (currentPages - 1) *itemPerPages
    const endIndex = startIndex + itemPerPages  

    const paginatedItem = [...item].reverse().slice(startIndex, endIndex)

    setItem(paginatedItem)
    
  },[currentPages])

  const changePage = (numberPage) => {setCurrentPages(numberPage)}

  const renderPageNumber = () => { 
    const pageNumber = []; 
    for (let i = 1; i <= pageCount; i++) { 
      if ( i === 1 || i === pageCount || (i >= currentPages - 1 && i <= currentPages + 1) ) { 
        pageNumber.push( <button key={i} onClick={() => changePage(i)} className={clsx( "w-9 h-9 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer", currentPages === i ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200" )} > {i} </button> ); 
      } else if ( (i === 2 && currentPages > 3) || (i === pageCount - 1 && currentPages < pageCount - 2) ) { 
        pageNumber.push( <span key={i} className="px-1 text-gray-500"> ... </span> ); 
      } } 
      return pageNumber; 
  };

  return (
    <div className="flex items-center justify-center gap-3 border-t-2 primary-border-color p-3">
      <button
        className={clsx(
          "text-xl p-1.5 rounded-full transition-all duration-200",
          currentPages === 1
            ? "text-gray-400 bg-gray-100 cursor-not-allowed"
            : "text-blue-500 bg-gray-100 hover:bg-gray-200 cursor-pointer"
        )}
        onClick={() => changePage(currentPages - 1)}
        disabled={currentPages === 1}
      >
        <FaChevronRight />
      </button>

      {renderPageNumber()}
      
      <button
        className={clsx(
          "text-xl p-1.5 rounded-full transition-all duration-200",
          currentPages === pageCount
            ? "text-gray-400 bg-gray-100 cursor-not-allowed"
            : "text-blue-500 bg-gray-100 hover:bg-gray-200 cursor-pointer"
        )}
        onClick={() => changePage(currentPages + 1)}
        disabled={currentPages === pageCount}
      >
        <FaChevronLeft />
      </button>
    </div>
  )
}

export default Pagination