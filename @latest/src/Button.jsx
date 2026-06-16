import React from 'react';

function Button({ taskName, startDate, DueDate, Priority }) {



  if (!taskName) {
    return <>
  
      <button
      className={`
        px-8 py-2.5 
        rounded-xl 
        font-bold 
        text-[14px] 
        transition-all 
        duration-200 
        active:scale-95 
      `}
    >
      Fill the fields
    </button>

    </>
  }
  
  const saveStyle = "bg-blue-600 hover:bg-blue-700 text-white shadow-blue-200";

  const closeStyle = "bg-slate-500 hover:bg-slate-600 text-white shadow-slate-200";
async function createItem() {

  // 1.digest
   const resultDigest = await fetch (
        `http://apps.odcc.ir/sites/software/_api/contextinfo`,
        {
          method:'POST',
          credentials:'include',
          headers:{
            'accept':'application/json;odata=verbose'
          }
        }
      )
      const dataDigest = await resultDigest.json()
      const digest= dataDigest.d.GetContextWebInformation.FormDigestValue
      
      
      // 2. entity
        const resultEntity = await fetch (
        `http://apps.odcc.ir/sites/software/_api/web/lists/getByTitle('TakList')?$select=ListItemEntityTypeFullName`,
        {
          method:'GET',
          credentials:'include',
          headers:{
            'accept':'application/json;odata=verbose'
          }
        }
      )
      const dataEntity = await resultEntity.json()
      console.log(dataEntity)
      
      const entity= dataEntity.d.ListItemEntityTypeFullName
      
      // 3. create item
      const result = await fetch (
        `http://apps.odcc.ir/sites/software/_api/web/lists/getByTitle('TakList')/items`,
        {
          method:'POST',
          credentials:'include',
          headers:{
            'accept':'application/json;odata=verbose',
            'Content-Type':  'application/json;odata=verbose',
            'X-RequestDigest': digest
          },
          body: JSON.stringify({
            __metadata: {
              type: entity
            },

            Title: taskName,
            StartDate: new Date(startDate).toISOString(),
            DateDue: new Date(DueDate).toISOString(),
            Priority: Priority

          })
        }
      )
      
      
      
     }


  return (
    <button
      onClick={createItem}
      className={`
        px-8 py-2.5 
        rounded-xl 
        font-bold 
        text-[14px] 
        transition-all 
        duration-200 
        active:scale-95 
        ${saveStyle}
      `}
    >
      Save
    </button>
  );
  }

export default Button;
