

function Progressbar({bgColor, complete}) {
    return (
      <>
    <div  className='flex flex-col mt-10 items-center justify-center'>
            <div className="mb-6 h-6 w-1/2 bg-neutral-200 dark:bg-neutral-600">
                <div style={{width: `${complete}%`}} className={`h-6  ${bgColor} text-right duration-1000`} ><span className="me-1 text-white">{complete == "100" ? "Complete" : complete}</span></div>
            </div>
    </div>
       
  
       
      </>
    )
  }
  
  export default Progressbar
  
