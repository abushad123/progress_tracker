

function ProgressInput() {
    return (
      <>
        <div className='flex flex-col justify-center mt-5' >
            <div className="flex items-center justify-center mt-3">
                <label htmlFor="" className="font-bold">UI Status</label>
                <input type="number" defaultValue="field" className="ms-2 border-4 w-28 border-black-500/100 px-3" />
            </div>
           <div className="flex items-center justify-center mt-3">
                <label htmlFor="" className="font-bold">UX Status</label>
                <input type="number" defaultValue="field" className="ms-2 border-4 w-28 border-black-500/100 px-3" />
           </div>
            <div className="flex items-center justify-center mt-3">
                <label htmlFor="" className="font-bold">DATA Status</label>
                <input type="number" defaultValue="field" className="ms-2 border-4 w-28 border-black-500/100 px-3" />
            </div>
           
        </div>
      </>
    )
  }
  
  export default ProgressInput
  