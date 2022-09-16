import { actionTypes } from '../actions/actionTypes';

const initialState = {
    products: [],
    product: {}
}

const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.FETCH_PRODUCTS:
            return { ...state, products: payload }

        case actionTypes.FETCH_PRODUCT:
            return { ...state, product: payload }

        case actionTypes.RESET_PRODUCT_DETAIL:
            return { ...state, product: {} }

        default:
            return state;
    }
}

export default productReducer;