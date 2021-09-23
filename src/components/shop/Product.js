import React from 'react';
import './product.css';

const Product = (props) => {
    const {img,name,price,stock,star,seller}=props.product
    return (
        <div className='product'>
            <div className='product-img'>
                <img src={img} />
            </div>
          <div className='product-info'>
            <p className='product-name'>{name} </p>
            <p>by<small>{seller}</small></p>
            <p>{price}</p>
            <p>only {stock} left in stock - order soon</p>
            <p>{star}</p>
            <button className='btn'>Add to cart</button>
          </div>
                
           
        </div>
    );
};

export default Product;