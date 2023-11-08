import React from 'react'
import {data} from '../components/Data.js'

 const ProductsList = ({allProducts,setAllProducts,countProducts,setCountProducts,total,setTotal}) => {

    const onAddProduct = (product) =>{

          //si el id es igual al product.id
         if (allProducts.find(item => item.id === product.id)){
          const products = allProducts.map(item => item.id ===product.id ? {...item, quantity:item.quantity + 1 }:item );
          setCountProducts(countProducts + product.quantity)
          setTotal (total + product.price * product.quantity) 

          return setAllProducts ([...products])
         }
          
         setTotal (total + product.price * product.quantity) 
         setCountProducts(countProducts + product.quantity)
          setAllProducts([...allProducts,product])
    }

    console.log(allProducts)


  return (
    <div className='container-items'>
        {data.map((product)=> 
           <div className='item'>
            <figure>
						<img src={product.img} alt={product.nameProduct} />
					</figure>
					<div className='info-product'>
						<h2>{product.nameProduct}</h2>
						<p className='price'>${product.price}</p>
						<button onClick ={()=>onAddProduct(product)} >
							Añadir al carrito
						</button>
					</div>
      
           </div>
        )}
    </div>
  )
}

export default ProductsList