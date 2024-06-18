import { ADD_TO_CART, REMOVE_FROM_CART } from "../contants";


const initialValue = {
    products: []
};


export const cartReducer = (state = initialValue, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            let newItem = {
                ...action.payload,
                quantity: action.payload.quantity + 1,
            }
            return {
                ...state,
                products: [...state.products, newItem],
            }
        }
        case REMOVE_FROM_CART:
            let existed_item = state.products.find(item => action.payload.id === item.id)
            if (existed_item) {
                state = {
                    ...state,
                    products: state.products.filter(item => item.id !== action.payload.id)
                }
                return state;
            }
        default:
            return state;
    }
};
