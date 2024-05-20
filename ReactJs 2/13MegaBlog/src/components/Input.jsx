import React,{useId} from "react";

const Input=React.forwardRef(function Input({
    label,
    type="text",
    classname="",
    ...props
},ref){
    const id=useId()
    return(
        <div className="w-full">
            {
              label && <label
              className="inline-block mb-1 pl-1"
              htmlFor={id} // this is due to seo purpose
              >
              {label}
              </label>
            }
            <input
            type={type}
            className={`${classname} px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full`}
            ref={ref}
            {...props}
            id={id}
            />
        </div>
    )
})
export default Input