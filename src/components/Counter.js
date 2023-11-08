
// import React from 'react'
// import { useState } from 'react'
// import '../styles/Counter.css'


//  const Counter = () => {

//     const [counter, setCounter] = useState (0);


// //increment counter


// const increment = () =>{
//     if (counter < 5) {
//         setCounter(count => count +1);
//       }
// }

// //decrement counter
// const decrement = () =>{
//     if (counter > 0) {
//         setCounter(count => count - 1);
//       }

// }

//   return (
//     <>
//     <div className='counter'>
//       <button onClick={increment}>+</button>
//       <h1>{counter}</h1>
//       <button onClick={decrement}>-</button>
//     </div>
//     <div className=''>
//         <button>Añadir al carrito</button>
//     </div>


//     </>
//   )
// }
// export default Counter


import React, { useState } from 'react';

const Counter = ({ onCountChange, count }) => {
  const [counter, setCounter] = useState(count);

  const increment = () => {
    if (counter < 5) {
      const newCount = counter + 1;
      setCounter(newCount);
      onCountChange(newCount); // Llama a la función para actualizar el carrito
    }
  };

  const decrement = () => {
    if (counter > 0) {
      const newCount = counter - 1;
      setCounter(newCount);
      onCountChange(newCount); // Llama a la función para actualizar el carrito
    }
  };

  return (
    <div className='counter'>
      <button onClick={increment}>+</button>
      <h1>{counter}</h1>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default Counter;
