import React from 'react'
import Strip from './Strip'
const Strips = () => {
    var data =[
        {url:"https://i.pinimg.com/736x/0b/97/b4/0b97b458bb2018023f79c7ca8178ff47.jpg", number:0},
        {url:"https://i.pinimg.com/736x/0b/c4/36/0bc436c48750654be864668657a54f2b.jpg", number:1},
        {url:"https://i.pinimg.com/736x/1d/9d/a7/1d9da7d7c82af38c20824048710a0909.jpg", number:2},
        {url:"https://i.pinimg.com/736x/b9/9f/8d/b99f8dd8c948d3c4cb55cbd325cf5b05.jpg", number:3},
    ]
  return (
    <div className='flex mt-20 items-center py-30'>
           {data.map((elem , key) =>{
             return <Strip key={key} value ={elem} />
           })}
    </div>
  )
}

export default Strips