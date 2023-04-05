import React, { useState } from 'react';
import Display from './Components/Display/AddDisplay/AddDisplay'
import './App.css';
import AddItem from './Components/Display/AddDisplay/AddDisplay';

function App() {
  const [products, setProducts] = useState([{itemNumber:"8675309", weight:"5500", usd:"4024.37"}, {itemNumber:"954001", weight:"700", usd:"472.11"}, {itemNumber:"19340002", weight:"12978", usd:"6845.09"}])

  function addNewProduct(Product){
    let tempProducts =[...Product, Product];
 
    setProducts(tempProducts);
  }
  
  return(
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-lg-6'>
          <div className='border-box'>
        <addNewProduct addNewProduct={addNewProduct} />
        
          </div>
        </div>
        <div className='col-lg-6'>
          <div className='border-box'>
      <ul>
        {products.map((product) => (
          <li key={product.itemNumber}>
            Item Number: {product.itemNumber}, Weight: {product.weight}, USD: {product.usd}
          </li>
        ))}
      </ul>
      </div>
      </div>
      </div>
     </div>
  
  );
}

export default App;