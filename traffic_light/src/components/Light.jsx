import React from 'react'

const Light = () => {
  return (
    <div className='h-screen bg-black text-white'>
    
      <div className="flex items-center justify-center border border-white h-56 ">
            <div className="border border-yellow-500">
                <div className=" border rounded-full h-11 w-12 bg-red-600 border-r m-3 flex justify-center items-center">R</div>
                <div className="border rounded-full h-11 bg-yellow-500 border-r m-3 flex justify-center items-center">Y</div>
                <div className="border rounded-full h-11 bg-green-500 border-r m-3 flex justify-center items-center">G</div>
            </div>
      </div>
    </div>
  )
}

export default Light
