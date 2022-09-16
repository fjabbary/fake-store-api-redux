import { actionTypes } from './actionTypes';
import { productAPI } from '../../api/productApis';

export const fetchProducts = () => async dispatch => {
    const response = await productAPI.get('/products');
    dispatch({
        type: actionTypes.FETCH_PRODUCTS,
        payload: response.data
    })
}

export const fetchProduct = (id) => async dispatch => {
    const response = await productAPI.get(`/products/${id}`);
    dispatch({
        type: actionTypes.FETCH_PRODUCT,
        payload: response.data
    })
}

export const resetProductDetail = () => {
    return {
        type: actionTypes.RESET_PRODUCT_DETAIL
    }
}