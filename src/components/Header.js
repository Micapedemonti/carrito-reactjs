import React, { useState } from 'react'


 const Header = ({allProducts,setAllProducts,total,countProducts,setCountProducts,setTotal}) => {

const [active,setActive] = useState(false)

const onDeleteProduct = (product) =>{
  const results = allProducts.filter(item => item.id !== product.id)
   setAllProducts(results)
   setTotal (total - product.price * product.quantity) 
   setCountProducts(countProducts - product.quantity)
}
const onCleanCart = () =>{
    setAllProducts([])
    setTotal (0)
    setCountProducts (0)
}

  return (
    <>
    <div>
    <h1>Tienda</h1>

<div class="container-icon">
    <div class="container-cart-icon" onClick={()=> setActive (!active)}>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="icon-cart"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
        </svg>
        <div class="count-products">
            <span id="contador-productos">{countProducts}</span>
        </div>
    </div>

    <div class={`container-cart-products ${active? '' : 'hidden-cart'}`}>
        {
            allProducts.length ? (
                <>
                <div class="row-product">
                    {allProducts.map(product => (
   <div class="cart-product" key ={product.id}>
   <div class="info-cart-product">
       <span class="cantidad-producto-carrito">{product.quantity}</span>
       <p class="titulo-producto-carrito">{product.nameProduct}</p>
       <span class="precio-producto-carrito">${product.price}</span>
   </div>
   <svg
       xmlns="http://www.w3.org/2000/svg"
       fill="none"
       viewBox="0 0 24 24"
       stroke-width="1.5"
       stroke="currentColor"
       class="icon-close"
       onClick={()=> onDeleteProduct(product)}
   >
       <path
           stroke-linecap="round"
           stroke-linejoin="round"
           d="M6 18L18 6M6 6l12 12"
       />
   </svg>
</div>
                    ))}
         
        </div>

        <div class="cart-total ">
            <h3>Total:</h3>
            <span class="total-pagar">${total}</span>
        </div>

        <button className='btn-clear-all' onClick={onCleanCart}>Vaciar carrito</button>
                </>
            ): (
                <p class="cart-empty">El carrito está vacío</p>
            )
        }
        
    
    </div>
</div>
        </div>

    </>
  )
}
export default Header