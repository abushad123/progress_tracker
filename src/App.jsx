import { useState, useEffect } from 'react'
import Title from './components/Title'
import ProgressInput from './components/ProgressInput'
import Progressbar from './components/Progressbar'


function App() {
  const [complete , setComplete] = useState(55);
  const [status, setStatus] = useState({
    ui: 80,
    ux: 80,
    data: 90,
  })
  const backgr = [
    {bgColor:"bg-green-500", complete: status.ui},
    {bgColor:"bg-gray-400", complete: status.ux},
    {bgColor:"bg-yellow-500", complete: status.data}
  ];
  useEffect(() => {
    setInterval(() => setComplete(Math.floor(Math.random() * 100) + 1), 2000)
  }, [complete])
  return (
    <>
     <div className='flex flex-col justify-center content-center'>
       <div className='flex justify-center mt-5'>
          <Title/>
       </div>
       <div>
       <div className='flex flex-col justify-center mt-5' >
            <div className="flex items-center justify-center mt-3">
                <label htmlFor="" className="font-bold">UI Status</label>
                <input type="number" defaultValue="field" onChange={(e) => setStatus({...status, ui: e.target.value})} className="ms-2 border-4 w-28 border-black-500/100 px-3" />
            </div>
           <div className="flex items-center justify-center mt-3">
                <label htmlFor="" className="font-bold">UX Status</label>
                <input type="number" defaultValue="field" onChange={(e) => setStatus({...status, ux: e.target.value})} className="ms-2 border-4 w-28 border-black-500/100 px-3" />
           </div>
            <div className="flex items-center justify-center mt-3">
                <label htmlFor="" className="font-bold">DATA Status</label>
                <input type="number" defaultValue="field" onChange={(e) => setStatus({...status, data: e.target.value})} className="ms-2 border-4 w-28 border-black-500/100 px-3" />
            </div>
           
        </div>
       </div>
       <div>
         {backgr.map((data, idx) => (
          <Progressbar key={idx} bgColor={data.bgColor} complete={data.complete} />
         ))}
          <Progressbar bgColor={complete > 50 ? "bg-green-500" : "bg-red-500"} complete={complete} />
          
       </div>
     </div>
    </>
  )
}

export default App
