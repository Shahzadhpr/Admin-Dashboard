const AddPruductFildes = ({newProduct, onChange}) => {
  const fields = [
    { label: "عنوان محصول", key: "title", type: "text", placeholder: "عنوان محصول را وارد کنید..." },
    { label: "وضعیت انتشار", key: "isPublished", type: "select" },
    { label: "تعداد موجودی", key: "entity", type: "number", placeholder: "تعداد موجودی را وارد کنید..." },
    { label: "قیمت محصول", key: "price", type: "number", placeholder: "قیمت محصول را وارد کنید..." },
    { label: "توضیحات محصول", key: "description", type: "textarea", placeholder: "توضیحات محصول را وارد کنید..." },
  ];

  const onChangeHandler = (key, value) => {

    const product = {
        ...newProduct,
        [key]: key === "price" ? Number(value) : value
    }
    
    onChange(product)

  }

  const inputClass =
    "mt-2 block w-full h-11 rounded-lg border primary-border-color bg-zinc-50 px-3 text-sm text-zinc-800 shadow-sm outline-none transition-all duration-200 placeholder:text-zinc-400 hover:border-zinc-300 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10";

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

      {fields.map((field) => (
        <div
          key={field.key}
          className={field.type === "textarea" ? "md:col-span-2" : ""}
        >
          <label className="text-sm font-medium text-zinc-700 select-none">
            {field.label}
          </label>

          {field.type === "textarea" ? (
            <textarea
              placeholder={field.placeholder}
              className={`${inputClass} min-h-[150px] resize-none py-3`}
              value={newProduct[field.key]}
              onChange={(event) => {onChangeHandler(field.key, event.target.value)}}
            />
          ) : field.type === "select" ? (
            <select
              className={`${inputClass} cursor-pointer`}
              defaultValue="false"
            >
              <option value="true">فعال</option>
              <option value="false">غیرفعال</option>
            </select>
          ) : (
            <input
              type={field.type}
              placeholder={field.placeholder}
              className={inputClass}
              value={newProduct[field.key]}
              onChange={(event) => {onChangeHandler(field.key, event.target.value)}}
            />
          )}
        </div>
      ))}

    </div>
  );
};

export default AddPruductFildes;