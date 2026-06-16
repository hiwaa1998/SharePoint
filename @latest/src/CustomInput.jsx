function CustomInput({ Label, ...props }) {
  return (
    <div className="grid grid-cols-4 items-center gap-6 mb-6">
      
    
      <label className="col-span-1 text-slate-700 bg-amber-100 text-sm font-bold px-4 py-2 rounded-lg shadow-sm border border-amber-200 text-center">
        {Label}
      </label>

   
      <input 
        {...props} 
        className="col-span-3 bg-white border-2 border-gray-200 rounded-xl px-4 py-2.5 text-gray-700 focus:border-blue-400 focus:ring-4 focus:ring-blue-100 outline-none w-full transition-all duration-200 placeholder:text-gray-400" 
      />

    </div>
  )
}

export default CustomInput;
