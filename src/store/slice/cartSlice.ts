import { createSlice } from '@reduxjs/toolkit';

interface ICart {
	productId: number;
	quantity: number;
}

const initialState: ICart[] = [];

export const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		cart: initialState
	},
	reducers: {
		addToCart: (state, action) => {
			const itemInCart = state.cart.find((fin) => fin.productId === action.payload.productId);
			if (itemInCart != null) {
				itemInCart.quantity++;
			} else {
				state.cart.push({ ...action.payload });
			}
		},
		incrementQuantity: (state, action) => {
			const item = state?.cart?.find((fin) => fin?.productId === action.payload);
			item != null && item.quantity++;
		},
		decrementQuantity: (state, action) => {
			const item = state.cart.find((fin) => fin.productId === action.payload);
			if (item != null) {
				if (item.quantity === 1) {
					item.quantity = 1;
				} else {
					item.quantity--;
				}
			}
		},
		removeItem: (state, action) => {
			const removeItem = state.cart.filter((fil) => fil.productId !== action.payload);
			state.cart = removeItem;
		}
	}
});

export const { addToCart, incrementQuantity, decrementQuantity, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
