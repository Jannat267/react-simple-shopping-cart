import React, { useEffect, useState } from 'react';
import Product from './Product';
import './shop.css';

const Shop = () => {
    const [products,setProducts]=useState([]);
    
    useEffect(()=>{
        fetch ('./products.JSON')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div className='shop'>
            <div className='products'>
            {products.map(product=> 
            <Product 
            key={product.key}
            product={product}></Product>
            )} 
            </div>
            <div className='shopping-cart'>
            sfsdefc
            </div>
        </div>
    );
};

export default Shop;