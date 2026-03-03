// import { products } from "../products.js";
// import { useState } from "react";

// const Products = () => {
//     const [total, setTotal] = useState();

//     const countTotal = () => {
//         const sum = products.reduce((Prev, curr) => Prev.price + curr.price, 0);
//         console.log(sum)

//     }




//     return <>
//         <div className="card">
//             <p className=" title"> Total : {total}</p>
//         </div>
//         {
//             Products.map((product) => <div key={product.id}>
//                 <p className="title">{product.title}</p>
//                 <p className="price">{product.price}</p>
//             </div>)
//         }
//     </>
// }

// export default Products;


import { products } from "../products";
import { useState, useEffect } from "react";

const Products = () => {

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const sum = products.reduce((prev, curr) => prev + curr.price, 0);
    setTotal(sum);
  }, []);

  return (
    <div>
      <h2>Total Price: ₹{total}</h2>

      {products.map((product) => (
        <div key={product.id}>
          <p>{product.title}</p>
          <p>₹{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;