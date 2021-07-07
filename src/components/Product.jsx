import React, { useEffect, useState } from 'react';

import './Product.css';
import ProductDetails from './ProductDetails';


const Product = ({product,handleOnProductClick,viewProductList}) => {
    const [view, setView] = useState(false);
    const {name, price, img} = product;
    
    const handleView = () => {
        setView(true);
    }
    
    return (
        <div>
            {viewProductList && <div> 
                <img src={img} alt="" />
                <div onClick={handleView}> <h4  className="product" onClick={handleOnProductClick}>{name}</h4> </div>
                <p>Price: $ {price}</p>
                <br />
                <hr />
            </div>}
            {
                !viewProductList && view  && <ProductDetails product={product}></ProductDetails>
            }
        </div>
    );
};

export default Product;