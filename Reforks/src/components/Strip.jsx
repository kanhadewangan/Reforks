import React from 'react'

const Strip = ({value}) => {
    
  return (
    <div>
        <div className='w-[16.666%] px-5 mt-20 py-5  flex justify-between items-center border-b-[1px] border-t-[1px] border-zinc-600 border-r-[1px] text-white'>
            <img src={value.url} />
            <span className=' font-semibold'>{value.number}</span>
        </div>
    </div>
  )
}

export default Strip