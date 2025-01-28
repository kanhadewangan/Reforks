import React from 'react'
import Product from './Product'

const Products = () => {
    var Products =[
        {title:"Gyouko", Description:"hello there", live:true ,case:false },
        {title:"Gyouko", Description:"hello there",live:true ,case:false },
        {title:"Gyouko", Description:"hello there",live:true ,case:true },
        {title:"Gyouko", Description:"hello there",live:true ,case:true },
    ]
  return (
    <div>
        <div>
            {Products.map((elem ,key) =>  <Product   key={key} elem ={elem}/>)}
          
        </div>
    </div>
  )
}

export default Products