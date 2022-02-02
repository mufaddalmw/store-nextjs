import { createSlice, current } from '@reduxjs/toolkit'

const initialState = {
  products: [],
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    increment: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      const productIndex = current(state).products.findIndex((item) => item.productId === action.payload)
      if (productIndex >= 0) {
        state.products[productIndex].productId = action.payload;
        state.products[productIndex].quantity = current(state).products[productIndex].quantity + 1;
      } else {
        state.products = [
          ...state.products,
          {
            productId: action.payload,
            quantity: 1
          }
        ]
      }
    },
    decrement: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      const productIndex = current(state).products.findIndex((item) => item.productId === action.payload)
      if (productIndex >= 0 && current(state).products[productIndex].quantity > 1) {
        state.products[productIndex].productId = action.payload;
        state.products[productIndex].quantity = current(state).products[productIndex].quantity - 1;
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement } = productSlice.actions

export default productSlice.reducer