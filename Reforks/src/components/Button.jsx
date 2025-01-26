import React from 'react'
import { FaArrowRight } from "react-icons/fa";

export const Button = () => {
  return (
    <div>

        <div className='min-w-40 px-3 py-2 bg-zinc-100 text-black rounded-full flex items-center justify-between '>
            <span className='text-xl font-medium flex items-center'>start</span>
            <FaArrowRight />

        </div>
    </div>
  )
}
