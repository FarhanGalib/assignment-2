import { useEffect, useState } from "react";
import "./App.css";
import data from "./data/data";
import Product from "./components/Product";
import LoadingLogo from "./components/LoadingLogo";

function App() {
  
  const [products, setProducts] = useState(data);
  const [viewProductList, setViewProductList] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  },[loading]);

  const handleOnProductClick = () => {
    setViewProductList(false);
    
  };

  return (
    <div>
      {loading? <LoadingLogo></LoadingLogo> : 
       products.map((pd) => (
        <Product
          handleOnProductClick={handleOnProductClick}
          viewProductList={viewProductList}
          product={pd}
          key={pd.key}
        ></Product>
      ))}
    </div>
  );
}

export default App;
