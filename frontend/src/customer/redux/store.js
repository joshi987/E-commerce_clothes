import {configureStore} from '@reduxjs/toolkit'
import cartSlice from './feature/cartSlice'
import authSlice from './feature/authSlice'
import productSlice from './feature/product/productSlice'

export const store = configureStore({
    
    reducer:{
        
        cart:cartSlice,
        auth:authSlice,
        product: productSlice,
    }
})