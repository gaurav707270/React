import { fruits } from "../FruitsList";  
import { useState, useEffect } from "react";

const Fruits = () => {

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const sum = fruits.reduce((prev, curr) => prev + curr.price, 0);
    setTotal(sum);
  }, []);

  return (
    <div>
      <h2>Total Price: ₹{total}</h2>

      {fruits.map((fruit) => (
        <div key={fruit.id}>
          <p>{fruit.title}</p>
          <p>₹{fruit.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Fruits;  