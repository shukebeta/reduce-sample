import {ADD_TO_CART, UPDATE_CART, DELETE_FROM_CART} from "../actions/cart-actions"
const initialShoppingCartState = {
    sku: [
        {
            product: 'bread 700g',
            quantity: 2,
            unitCost: 90
        },
        {
            product: 'milk 500ml',
            quantity: 1,
            unitCost: 47
        }
    ]
}

const shoppingCart = (state=initialShoppingCartState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                sku: [...state.sku, action.payload],
            }
        case UPDATE_CART: 
            return {
                ...state,
                sku: state.sku.map(item => item.product === action.payload.product ? action.payload : item)
            }

        case DELETE_FROM_CART: 
            return {
                ...state,
                sku: state.sku.filter(item => item.product !== action.payload.product)
            }

        default:
            return state
    }
}

export default shoppingCart
