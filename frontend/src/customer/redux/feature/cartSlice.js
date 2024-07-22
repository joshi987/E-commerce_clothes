import { createSlice } from "@reduxjs/toolkit";


const userId=localStorage.getItem("_id")

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
      products: [],
      userId: userId,
      totalPrice: 0, 
      cartTotalQuantuty: 0,
    },
    reducers: {
      addProduct: (state, action) => {
        const existingProductIndex = state.products.findIndex(item => item.id === action.payload.id);

        if (existingProductIndex !== -1) {
          // If the product already exists in the cart, increase its quantity
          state.products[existingProductIndex].cartTotalQuantuty++;
        } else {
          // If the product does not exist in the cart, add it to the cart
          const newProduct = { ...action.payload, cartTotalQuantuty: 1 };
          state.products.push(newProduct);
        }
        
        // Update total price
        state.totalPrice += action.payload.prices;
        // Update total quantity
        state.cartTotalQuantuty++;
      },

      removeProduct: (state, action) => {
        const index = state.products.findIndex(product => product.id !== action.payload);
        if (index !== -1) {
          state.totalPrice -= state.products[index].price * state.products[index].cartTotalQuantuty;
          state.cartTotalQuantuty -= state.products[index].cartTotalQuantuty;
          state.products.splice(index, 1);
        }
      },
      incrementQuantity: (state, action) => {
        const product = state.products.find(item => item.id === action.payload);
        if (product) {
          product.cartTotalQuantuty++;
          state.totalPrice += product.prices;
          state.cartTotalQuantuty++;
        }
  },
  decrementQuantity: (state, action) => {
    const product = state.products.find(item => item.id === action.payload);
    if (product && product.cartTotalQuantuty > 1) {
      product.cartTotalQuantuty--;
      state.totalPrice -= product.prices;
      state.cartTotalQuantuty--;
    }
  },
      

    },
  });

export const { addProduct, removeProduct,incrementQuantity,decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;




