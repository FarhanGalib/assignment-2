import React from 'react';
import './ProductDetails.css';

const ProductDetails = ({product}) => {
    const {name, img, price, category, stock} = product;
    return (
        <div>
            <div className="product-details-container">
            <img src={img} alt="" />
            <div >
                <h4>{name}</h4>
                <p>category: {category}</p>
                <p>price:$ {price}</p>
                <p>available: {stock} piece </p> 
            </div>
        </div>
        </div>
    );
};

export default ProductDetails;