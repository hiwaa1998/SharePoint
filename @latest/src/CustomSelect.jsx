import React, { useEffect, useState } from 'react';

function CustomSelect({ Label, options = [], ...props }) {
  const [option,setOption] = useState([])
  useEffect (
    function () {
     async function getOptions() {
      const result = await fetch (
        `http://apps.odcc.ir/sites/software/_api/web/lists/getByTitle('TakList')/fields/getByInternalNameOrTitle('Priority')`,
        {
          method:'GET',
          credentials:'include',
          headers:{
            'accept':'application/json;odata=verbose'
          }
        }
      )
      const data = await result.json()
      setOption(data.d.Choices.results)
      
     }
     getOptions()
    },[]
  )
  return (

    <div className="grid grid-cols-4 items-center gap-6 mb-6">
      
      <label className="col-span-1 text-slate-700 bg-amber-100 text-sm font-bold px-4 py-2 rounded-lg shadow-sm border border-amber-200 text-center">
        {Label}
      </label>

      <select 
        {...props} 
        className="col-span-3 bg-white border-2 border-gray-200 rounded-xl px-4 py-2.5 text-gray-700 focus:border-blue-400 focus:ring-4 focus:ring-blue-100 outline-none w-full transition-all duration-200 cursor-pointer"
      >
        <option value="" disabled hidden>Select an option...</option>
        {option.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>

    </div>
  );
}

export default CustomSelect;
