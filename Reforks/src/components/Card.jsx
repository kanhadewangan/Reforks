import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";


const Card = ({width}) => {
  return (
    <div className={` ${width} `}>'
        
        <div className=' bg-zinc-800    p-5 rounded-xl text-white '>
            <div className='w-full flex justify-between items-center '> 
                <h3>
                    Up
                </h3>
                <IoIosArrowRoundForward />
            </div>
            <div className='text-3xl mb-60 '>
                No matter what you’re looking for, we have it.
                
            </div>
            <div className='text-6xl font-bold tracking-tight  '>
                Start  Project
                </div>
                <button className='w-32 rounded-full  mt-5 py-2 px-3  border-2 border-zinc-50'> Contact Us</button>
                    <p className='text-sm  text-zinc-500 font-medium mt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet laboriosam, nisi, upiditate minus inventore molestias unde, repellendus ipsa alias? Similique recusandae autem ipsum, ad debitis commodi animi?</p>
        </div>
        </div>
  )
}

export default Card;