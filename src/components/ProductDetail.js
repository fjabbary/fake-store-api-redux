import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct, resetProductDetail } from '../redux/actions/productActions';

function ProductDetail() {
    const { productId } = useParams();
    const dispatch = useDispatch();
    const product = useSelector(state => state.products.product)
    const { title, price, description, category, image } = product;

    useEffect(() => {
        dispatch(fetchProduct(productId));

        return () => {
            dispatch(resetProductDetail())
        }

    }, [dispatch, productId]);

    return (
        <>
            {Object.keys(product).length !== 0 ? (
                <div className="product-detail">
                    <section className="left-img">
                        <img src={image} alt={title} />
                    </section>
                    <section className="right-desc">
                        <h1 className="product-title">{title}</h1>
                        <p className="product-price"><span className="arrow-left"></span> $ {price} </p>
                        <div className="product-category">{category}</div>
                        <p className="product-description">{description}</p>
                        <button className="add-to-cart">Add to Cart</button>
                    </section>
                </div>
            ) : <h2>Loading Products...</h2>}

        </>
    )
}

export default ProductDetail