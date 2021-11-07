import {ADD_TO_CART} from "../actions/cart-actions"
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
        default:
            return state
    }
}

export default shoppingCart
