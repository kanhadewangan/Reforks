import React from 'react'
import Button from './Button';
const Product = ({elem}) => {
  return (
    <div>
        <div className='w-full py-5 text-white'>
            <div className='max-w-screen-xl  mx-auto flex justify-between items-center' >
                <h1 className='text-6xl capitalize font-medium '>{elem.title}</h1>
                
                <div className='dets w-1/3'>
                    <p className='mb-10'>{elem.Description}</p>
                    <div className='m-4 py-4 flex items-center gap-10'>
                    {elem.live && <Button/>}
                    {elem.case && <Button title ="Case Study"/>}
                    </div>
                      
                </div>
            </div>

        </div>
    </div>
  )
}

export default Product