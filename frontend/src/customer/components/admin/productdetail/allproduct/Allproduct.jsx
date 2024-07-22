import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../../../redux/feature/product/productSlice';
import ProductList from './ProductList';

const Allproduct = () => {
    const dispatch = useDispatch();
    const { products } = useSelector((state) => state.product);
    console.log(products);
    
    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);
    
    return (
        <div>
            <ProductList products={products}/>
        </div>
    );
}

export default Allproduct;
