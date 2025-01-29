import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";


const Card = ({width,start,para, btn , hover}) => {
  return (
    <div className={` ${width}  `}>'
        
        <div className= "bg-zinc-800  hover:bg-violet-500 p-5 rounded-xl  text-white">
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
               {start==true ? <h1>Start Project</h1> : null}
                </div>
                    {btn==false ? <button className='w-32 rounded-full  mt-5 py-2 px-3  border-2 border-zinc-50'> Contact Us</button> : null}
                {para==true ? <p className='text-sm  text-white font-medium mt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet laboriosam, nisi, upiditate minus inventore molestias unde, repellendus ipsa alias? Similique recusandae autem ipsum, ad debitis commodi animi?</p> : null}
                    
        </div>
        </div>
  )
}

export default Card;